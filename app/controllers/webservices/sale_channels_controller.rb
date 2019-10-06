class Webservices::SaleChannelsController <  WebservicesController
    def getSaleChannelByStore
        sale_channel = SaleChannel.where(:store => params[:store]).first
        if !sale_channel.nil?
            render :json => SaleChannel.mapSaleChannels([sale_channel], current_user)
        else
            render :json => {:message => "Canal de venda não encontrado"}, status: 404
        end
    end

    def getDashboardData
        begin
            sale_channel    = SaleChannel.where(:store => params[:store]).first
            if !sale_channel.nil?
                orders          = Order.where(:sale_channel => sale_channel, :status => "Confirmada")
                tickesSold      = orders.count

                total_profit = 0
                amount_owed = 0
                orders.each do |order|
                    sale_channel_fee        = order.package.offer.getSaleChannelPercent().to_f / 100
                    price                   = order.package.price
                    sale_channel_comission_amount   = (price * sale_channel_fee).to_f

                    if order.transaction_id == "cash"
                        partner_fee                 = order.package.offer.getTapPercent.to_f / 100
                        partner_comission_amount    = (price * partner_fee).to_f
                        
                        amount_owed =  ((sale_channel_comission_amount + partner_comission_amount) - price) + amount_owed
                    end
                    total_profit            = sale_channel_comission_amount + total_profit
                end

                if amount_owed < 0
                    amount_owed = amount_owed * -1
                end

                render :json => {
                    :tickets        => tickesSold,
                    :total_profit   => total_profit.round(2),
                    :amount_owed  => amount_owed
                }, status: 200
            else
                render :json => {
                    :error_code => "codigo 1",
                }, status: 200
            end
        rescue StandardError => error
            render :json => {
                :error_code => "codigo 1",
            }, status: 200
            puts 'Dashboard Data Error: ' + error.message
            Raven.capture_exception(error)
        end
    end
end