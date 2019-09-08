class OrderNotifierMailer < ApplicationMailer
    default from: 'Equipe TapToGo <info@taptogo.io>'

    def send_order_email(order)
        @order = order
        @name = "Allan"
        @offer = "Balão"
        @qtd = "2"
        @amount = "679.2"
        @address = "Rua inambu"
        @date = "17/02/2019"
        @policy = "Cancelamento em 7 dias"
        @id = "GYZH12K3L4SE3"
        headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
        mail(
            :to => @order,
            :subject => '[TapToGo] Pedido realizado'
        )
    end

    def send_order_to_partner_email
        headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
        mail(
            :to => "allan.sduarte@gmail.com",
            :subject => '[TapToGo] Nova reserva'
        )
    end

    def send_order_to_sale_channel_email
        headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
        mail(
            :to => "allan.sduarte@gmail.com",
            :subject => '[TapToGo] Nova venda'
        )
    end
end
