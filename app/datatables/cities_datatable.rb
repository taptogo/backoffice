class CitiesDatatable
  delegate :params, :h, :link_to, to: :@view

  def initialize(view, user, amenity)
    @view = view
    @current_user = user
    if amenity.nil?
      @source = City.all 
    else
      @source = City.where(:offer_ids.in => [amenity])
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
    extratos.map do |extrato|
      [
        extrato.name,
        extrato.offers.count,
        extrato.enabled ? "Sim" : "Não",
        extrato.soon ? "Sim" : "Não",
        @view.layout_opts(@current_user,extrato,"cities")
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
    extratos = extratos.paginate(:page => page, :limit => per_page)
    extratos
  end

  def page
    params[:iDisplayStart].to_i/per_page + 1
  end

  def per_page
    params[:iDisplayLength].to_i > 0 ? params[:iDisplayLength].to_i : 20
  end

  def sort_column
    columns = ["name", "hotel_ids", "enabled", "id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end
end