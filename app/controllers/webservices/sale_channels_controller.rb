class Webservices::SaleChannelsController <  WebservicesController
    def getSaleChannel
        render :json => SaleChannel.mapSaleChannels(SaleChannel.availableSaleChannels(), current_user)
    end
end