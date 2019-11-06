class PackagesDatatable
  delegate :params, :h, :link_to, to: :@view

  def initialize(view, user, from, to, offer)
    @view = view
    @current_user = user

    @source = offer.nil? ? Package.where(id: 'fake') : Offer.find(offer).packages

    if from && to
      from = from.to_time.beginning_of_day + 3.hours
      to = to.to_time.end_of_day + 3.hours
      @source = @source.where(:date => from..to)
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
        d.getDate,
        d.hour,
        d.offer.nil? ? '' : (link_to d.offer.name, d.offer),
        getQuantity(d),
        @current_user.isSuperAdmin? ? getPrice(d) : format('%.2f', (d.price.nil? ? 0 : d.price)),
        getPriceChangeFactor(d),
        "<div class='col-md-3'><a class='btn btn-success waves-effect align-right priceTable'  href='#' id='price_#{d.id}'>ATUALIZAR</a></div></div>",
        "<div class='col-md-3'><a class='btn btn-danger waves-effect align-right priceTableRemove'  href='#' id='price_#{d.id}'>REMOVER</a></div></div>"
      ]
    end
  end

  def getPriceChangeFactor(d)
    factor = d.price_change_factor > 0 ? d.price_change_factor : d.offer.price_change_factor
    stores = "<div class='row'><div class='col-md-3'> <input type='text' class='form-control' value='#{'%.2f' % factor}' id='#{'price_change_factor' + d.id.to_s}' style='width:80px;'/>&nbsp;&nbsp;</div>&nbsp;"
  end

  def getPrice(d)
    if d.price.nil?
      d.price = 0
    end
    stores = "<div class='row'><div class='col-md-3'> <input type='text' class='form-control' value='#{'%.2f' % d.price}' id='#{d.id}' style='width:80px;'/>&nbsp;&nbsp;</div>&nbsp;"
  end

  def getQuantity(d)
    if d.capacity.nil?
      d.capacity = 0
    end
    stores = "<div class='row'><div class='col-md-3'> <input type='text' class='form-control' value='#{d.capacity}' id='#{'quantity' + d.id.to_s}' style='width:80px;'/>&nbsp;&nbsp;</div>&nbsp;"
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
    params[:iDisplayStart].to_i / per_page + 1
  end

  def per_page
    25
  end

  def sort_column
    columns = ["date", "name", "id", "price", "quantity", "id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == 'desc' ? 'asc' : 'desc'
  end
end
