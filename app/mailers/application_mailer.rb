class ApplicationMailer < ActionMailer::Base
  default from: 'info@taptogo.io'
  # layout 'mailer'

   def welcome(email)
    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
    mail(from: "Equipe TapToGo <info@taptogo.io>", :to => email, :subject => '[TapToGo] Bem Vindo')
    
  end


   def welcomeManager(email)
    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
    mail(from: "Equipe TapToGo <info@taptogo.io>", :to => email, :subject => '[TapToGo] Bem Vindo')
    
  end



   def sendOrder(order)
    email = order.user.email
    @name = order.user.name
    @offer = order.package.offer.name
    @qtd = order.quantity.to_s
    @amount = order.amount
    @address = order.package.offer.partner.getAddress
    @date = order.package.getDateFull
    @policy = order.package.offer.policy
    if @policy
      @policy = @policy.description
    else
      @policy = ""
    end
    @id = order.id.to_s

    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
    mail(from: "Equipe TapToGo <info@taptogo.io>", :to => email, :subject => '[TapToGo] Pedido Realizado')
    
  end

   def sendOrderCompany(order)
    emails = order.package.offer.partner.email.blank? ? [] : [order.package.offer.partner.email]
    if order.package.offer.partner.managers.count > 0
      emails += order.package.offer.partner.managers.distinct(:email)
    end

    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'info@taptogo.io',
            'sender' => 'info@taptogo.io'
    mail(from: "Equipe TapToGo <info@taptogo.io>", :to => emails.join(","), :subject => '[TapToGo] Nova Reserva')
    
  end



end
