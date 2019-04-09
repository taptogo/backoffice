class UsersDatatable
  delegate :params, :h, :link_to, to: :@view

    def initialize(view, user, category)
      @view = view
      @current_user = user
      @source = category.nil? ? User.where(:_type.nin => ["SuperAdmin", "Manager", "Seller"]) : User.where(:category_ids.in => [category], :_type.nin => ["SuperAdmin", "Manager", "Seller"])
    end

  def as_json(options = {})
    {
      sEcho: params[:sEcho].to_i,
      iTotalRecords: @source.count,
      iTotalDisplayRecords: extratos.count,
      aaData: data
    }
  end

private

  def data
    extratos.map do |d|
      [
        d.name,
        '<span style="display:none">' + (d.created_at.nil? ? "" :  d.created_at.strftime("%Y%m%d%H%M")) +  '</span>' + (d.created_at.nil? ? "" : d.created_at.strftime("%d/%m/%Y %H:%M")),
        d.orders.count,
        d.enabled? ? "Sim" : "Não",
        @view.layout_opts(@current_user, d,"app_users")
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
    params[:iDisplayLength].to_i > 0 ? params[:iDisplayLength].to_i : 20
  end

  def sort_column
    columns = ["name","created_at", "id","id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end
end