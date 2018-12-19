class ApplicationMailer < ActionMailer::Base
  default from: 'projetos@mobile2you.com.br'
  # layout 'mailer'

   def welcome(email)
    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => email, :subject => '[TaptoGo] Bem Vindo')
    
  end


   def welcomeManager(email)
    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => email, :subject => '[TaptoGo] Bem Vindo')
    
  end



   def sendOrder(order)
    email = order.user.email
    @name = order.user.name
    @offer = order.package.offer.name
    @qtd = order.quantity.to_s
    @amount = order.amount
    @address = order.package.offer.partner.getAddress
    @date = order.created_at.strftime("%d/%m/%Y %H:%M")
    @policy = order.package.offer.policy
    if @policy
      @policy = @policy.description
    else
      @policy = ""
    end
    @id = order.id.to_s

    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => email, :subject => '[TaptoGo] Pedido Realizado')
    
  end

   def sendOrderCompany(order)
    emails = [order.package.offer.partner.email]
    if order.package.offer.partner.managers.count > 0
      emails += order.package.offer.partner.managers.distinct(:email)
    end

    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => emails.join(","), :subject => '[TaptoGo] Nova Reserva')
    
  end



end
