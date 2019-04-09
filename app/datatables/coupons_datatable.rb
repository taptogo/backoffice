class CouponsDatatable
  delegate :params, :h, :link_to, to: :@view

    def initialize(view, user, offer)
    @view = view
    @current_user = user
    @source = offer.nil? ? Coupon.all : Coupon.where(:offer_ids.in => [offer])
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
    extratos.map do |extrato|
      [
        extrato.name,
        extrato.type.to_i == 1 ? getDiscount(extrato.discount) : getCurrency(extrato.discount),
        extrato.orders.count,
        extrato.enabled ? "Sim" : "Não",
        @view.layout_opts(@current_user,extrato,"coupons")
      ]
    end
  end

  def getCurrency(value)
    value.nil? ? "" : ActionController::Base.helpers.number_to_currency(value, unit: "R$", separator: ",", delimiter: ".")
  end

  def getDiscount(value)
    value.nil? ? "" : ((value * 100).round(2).to_s + "%")
  end

  def extratos
    @extratos ||= fetch_extratos
  end

  def fetch_extratos
    extratos = nil
    if params[:sSearch].present?
      @types_id = []
       extratos = @source.any_of({:name => /.*#{params[:sSearch]}.*/i}
                                 )       
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
    params[:iDisplayLength].to_i > 0 ? params[:iDisplayLength].to_i : 10
  end

  def sort_column
    columns = ["name","is_money", "id","id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end
end