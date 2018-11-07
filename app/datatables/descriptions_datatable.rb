class DescriptionsDatatable
  delegate :params, :h, :link_to, to: :@view

    def initialize(view, user, offer)
    @view = view
    @current_user = user
    @source = offer.nil? ? Description.all : Description.where(:offer_id => offer)
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
        extrato.title,
        extrato.offer.nil? ? "" : (link_to extrato.offer.name, extrato.offer),
        @view.layout_opts(@current_user,extrato,"descriptions")
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
       extratos = @source.any_of({:title => /.*#{params[:sSearch]}.*/i}, {:message => /.*#{params[:sSearch]}.*/i})   
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
    columns = ["name","id", "id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end
end