class SaleChannelsDatatable
    delegate :params, :h, :link_to, to: :@view
  
    def initialize(view, user)
        @view = view
        @current_user = user
        @source = SaleChannel.all 
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
                    extrato.full_name,
                    extrato.name_establishment,
                    extrato.cpf_cnpj,
                    extrato.recipient_id,
                    extrato.enabled ? "Sim" : "Não",
                    @view.layout_opts(@current_user,extrato,"sale_channels")
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
            columns = ["full_name", "name_establishment", "cpf_cnpj", "recipient_id", "enabled", "id"]
            columns[params[:iSortCol_0].to_i]
        end
    
        def sort_direction
            params[:sSortDir_0] == "desc" ? "desc" : "asc"
        end
end