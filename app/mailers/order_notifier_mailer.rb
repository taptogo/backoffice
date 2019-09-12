class OrderNotifierMailer < ApplicationMailer
    default from: 'Equipe TapToGo <info@taptogo.io>'

    def send_order_email(buyer_name, orders, amount, creditCard)
        @buyer_name = buyer_name
        @orders     = orders
        @amount     = amount
        @creditCard = creditCard
        headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
        mail(
            :to => "allan.sduarte@gmail.com",
            :subject => '[TapToGo] Pedido realizado'
        )
    end

    def send_order_to_partner_email(
        partner_name,
        buyer_name,
        experience_title,
        book_date,
        book_hour,
        order_price,
        order_amount,
        meeting_point
    )
    @partner_name       = partner_name
    @buyer_name         = buyer_name
    @experience_title   = experience_title
    @book_date          = book_date
    @book_hour          = book_hour
    @order_price        = order_price
    @order_amount       = order_amount
    @meeting_point      = meeting_point
        headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
        mail(
            :to => "allan.sduarte@gmail.com",
            :subject => '[TapToGo] Nova reserva'
        )
    end

    def send_order_to_sale_channel_email(experience_title, comission_amount)
        @experience_title = experience_title
        @comission_amount =comission_amount
        headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
        mail(
            :to => "allan.sduarte@gmail.com",
            :subject => '[TapToGo] Nova venda'
        )
    end
end