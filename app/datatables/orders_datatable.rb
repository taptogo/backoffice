class OrdersDatatable
  delegate :params, :h, :link_to, to: :@view

   def initialize(view, user,from, to, app_user, offer, coupon)
    @view = view
    @current_user = user

    @source = !offer.nil? ? Order.where(:package_id.in => Package.where(:offer_id => offer).distinct(:id)) : (user.isSuperAdmin? ? Order.all : Order.where(:package_id.in => Package.where(:offer_id.in => user.partner.offers.distinct(:id)).distinct(:id)))
    @source = app_user.nil? ? @source : @source.where(:user_id => app_user)
    @source = coupon.nil? ? @source : @source.where(:coupon_id => coupon)

    if from && to
      from = from.to_time.beginning_of_day
      to = to.to_time.end_of_day
      @source = @source.where(:created_at => from..to)
    end


  end

  def as_json(options = {})
    {
      sEcho: params[:sEcho].to_i,
      iTotalRecords: extratos.count,
      iTotalDisplayRecords: @source.count,
      aaData: data
    }
  end

private

  def data
    extratos.map do |d|
      [
        (link_to d.id.to_s, d),
        d.getDate,
        d.user.nil? ? "" : (link_to d.user.name, (@current_user.isSuperAdmin? ? "/app_users/#{d.user.id.to_s}" : "#")),
        (d.package.nil? || d.package.offer.nil?) ? "" : (link_to d.package.offer.name, (@current_user.isSuperAdmin? ? d.package.offer : "#")),
        (d.package.nil?) ? "" : d.package.getDate,
        d.quantity,
        d.status,
        ActionController::Base.helpers.number_to_currency(d.amount, unit: "R$", separator: ",", delimiter: ".")
      ]
    end
  end

  def getPrice(d)
      if d.price.nil?
        d.price = d.accommodation.base_value
      end
      stores = "<div class='row'><div class='col-md-3'> <input type='text' class='form-control' value='#{"%.2f" %  d.price}' id='#{d.id.to_s}' style='width:80px;'/>&nbsp;&nbsp;</div>&nbsp;"
  end

  def getQuantity(d)
      stores = "<div class='row'><div class='col-md-3'> <input type='text' class='form-control' value='#{d.capacity}' id='#{"quantity" +  d.id.to_s}' style='width:80px;'/>&nbsp;&nbsp;</div>&nbsp;"
  end

  def getEspecialPrice(d)
      if d.especial_price.nil?
        d.especial_price = 0
      end
      stores = "<div class='row'><div class='col-md-3'> <input type='text' class='form-control' value='#{"%.2f" %  d.especial_price}' id='#{"especial_price" +  d.id.to_s}' style='width:80px;'/>&nbsp;&nbsp;</div>&nbsp;"
  end

  def extratos
    @extratos ||= fetch_extratos
  end

  def fetch_extratos
    extratos = nil
    if params[:sSearch].present?
      @types_id = []
       extratos = @source.any_of({:name => /.*#{params[:sSearch]}.*/i})       
       # extratos =  Extrato.all
    else
        extratos = @source.order_by("#{sort_column} #{sort_direction}")
    end
        WillPaginate.per_page = per_page
    extratos = extratos.paginate(:page => page, :limit => per_page)

    extratos
  end

  def page
    params[:iDisplayStart].to_i/per_page + 1
  end

  def per_page
   10
  end

  def sort_column
    columns = ["date", "name", "id", "price", "quantity", "id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "asc" : "desc"
  end
end