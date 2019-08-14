class OffersDatatable
  delegate :params, :h, :link_to, to: :@view

    def initialize(view, user, partner, category, city)
    @view = view
    @current_user = user
    @source = nil
    if !params[:partner].nil?
      @source = Offer.where(:partner_id => params[:partner].to_s)
    else
      @source = Offer.all
    end

    @source = category.nil? ? @source : @source.where(:category_ids.in => [category])
    @source = city.nil? ? @source : @source.where(:city_ids.in => [city])
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
        (link_to extrato.name, '/offers/' + extrato.id),
        extrato.partner.nil? ? "" : (link_to extrato.partner.name, extrato.partner),
        extrato.position,
        extrato.categories.distinct(:name).join(","),
        extrato.cities.distinct(:name).join(","),
        extrato.date_from.nil? ? "" : extrato.date_from.strftime("%d/%m/%Y %H:%M"),
        extrato.date_to.nil? ? "" : extrato.date_to.strftime("%d/%m/%Y %H:%M"),
        extrato.orders.count,
        extrato.sale_channel_comission,
        extrato.enabled? ? "Sim" : "Não",
        @view.layout_opts(@current_user, extrato,"offers")
      ]
    end
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
    columns = ["name", "position", "enabled", "id", "id", "id", "id", "id", "id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end
end