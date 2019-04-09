class SuperAdminsDatatable
  delegate :params, :h, :link_to, to: :@view

    def initialize(view, user)
      @view = view
      @current_user = user
      @source = SuperAdmin.where(:id.ne => user.id.to_s, :email.ne => "admin@gmail.com")
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
        d.email,
        @view.layout_opts(@current_user, d,"super_admins")
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
    params[:iDisplayLength].to_i > 0 ? params[:iDisplayLength].to_i : 10
  end

  def sort_column
    columns = ["name","email", "id","id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end
end