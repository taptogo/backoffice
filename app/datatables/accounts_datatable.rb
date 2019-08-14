class AccountsDatatable
  delegate :params, :h, :link_to, to: :@view

    def initialize(view, user)
      @view = view
      @current_user = user
      @source = nil
      if !params[:partner].nil?
        @source = Account.where(:partner_id => params[:partner].to_s)
      elsif !params[:sale_channel].nil?
        @source = Account.where(:sale_channel_id => params[:sale_channel].to_s)
      else
        @source = Account.all
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
        userAccountLinked = nil
        if !params[:partner].nil?
          userAccountLinked = extrato.partner.nil? ? "" : (link_to extrato.partner.name, extrato.partner)
        elsif !params[:sale_channel].nil?
          userAccountLinked = extrato.sale_channel.nil? ? "" : (link_to extrato.sale_channel.full_name, extrato.sale_channel)
        end
        [
          extrato.name,
          extrato.cnpj,
          userAccountLinked,
          extrato.offers.count,
          extrato.recipient_id,
          @view.layout_opts(@current_user,extrato,"accounts")
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
       extratos = @source.any_of({:name => /.*#{params[:sSearch]}.*/i}, {:message => /.*#{params[:sSearch]}.*/i})   
       # extratos =  Extrato.all
    else
        extratos = @source.order_by("#{sort_column} #{sort_direction}")
    end
    WillPaginate.per_page = per_page
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
    columns = ["name", "cnpj", "enabled", "enabled", "id"]
    columns[params[:iSortCol_0].to_i]
  end

  def sort_direction
    params[:sSortDir_0] == "desc" ? "desc" : "asc"
  end
end