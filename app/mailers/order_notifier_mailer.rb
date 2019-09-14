class OrderNotifierMailer < ApplicationMailer
    default from: 'Equipe TapToGo <info@taptogo.io>'

    def send_order_email(
        email_to,
        buyer_name,
        orders,
        amount,
        creditCard
    )
        @buyer_name = buyer_name
        @orders     = orders
        @amount     = amount
        @creditCard = creditCard
        headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
        mail(
            :to => email_to,
            :subject => '[TapToGo] Pedido realizado'
        )
    end

    def send_order_to_partner_email(
        email_to,
        partner_name,
        buyer_name,
        experience_title,
        book_date,
        book_hour,
        order_price,
        order_amount,
        meeting_point,
        order_quantity
    )
    @partner_name       = partner_name
    @buyer_name         = buyer_name
    @experience_title   = experience_title
    @book_date          = book_date
    @book_hour          = book_hour
    @order_price        = order_price
    @order_amount       = order_amount
    @meeting_point      = meeting_point
    @order_quantity     = order_quantity
        headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
        mail(
            :to => email_to,
            :subject => '[TapToGo] Nova reserva'
        )
    end

    def send_order_to_sale_channel_email(
        email_to,
        experience_title,
        comission_amount
    )
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
