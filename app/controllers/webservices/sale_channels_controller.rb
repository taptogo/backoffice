class Webservices::SaleChannelsController <  WebservicesController
    def getSaleChannelByStore
        sale_channel = SaleChannel.where(:store => params[:store]).first
        if !sale_channel.nil?
            render :json => SaleChannel.mapSaleChannels([sale_channel], current_user)
        else
            render :json => {:message => "Canal de venda não encontrado"}, status: 404
        end
    end
end