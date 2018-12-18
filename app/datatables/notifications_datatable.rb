class NotificationsDatatable
  delegate :params, :h, :link_to, to: :@view

    def initialize(view, user)
    @view = view
    @source = Notification.where(:created_at.gte => Time.now - 1.year) 
    # @source = Notification.all 
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
        '<span style="display:none">' + (d.created_at.nil? ? "" :  d.created_at.strftime("%Y%m%d%H%M")) +  '</span>' + (d.created_at.nil? ? "" : d.created_at.strftime("%d/%m/%Y %H:%M")),
        d.users.distinct(:name),
        d.message
      ]
    end
  end

  def getCode(d)
   code = "" 
   if d.coupons.count > 0 
     code = d.coupons.first 
   end 
   code
  end

  def extratos
    @extratos ||= fetch_extratos
  end

  def fetch_extratos
    extratos = nil
    if params[:sSearch].present?
      @types_id = []
       extratos = @source.any_of({:message => /.*#{params[:sSearch]}.*/i},{:title => /.*#{params[:sSearch]}.*/i},{:facebook => /.*#{params[:sSearch]}.*/i}
                                 )       
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
    columns = ["created_at","fireDate", "message", "id", "id", "id", "id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "asc" : "desc"
  end
end