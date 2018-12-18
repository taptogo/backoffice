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
    email = order.package.offer.partner.email
    if order.package.offer.partner.managers.count > 0
      email += order.package.offer.partner.managers.distinct(:email).join(",")
    end

    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => email, :subject => '[TaptoGo] Nova Reserva')
    
  end



end
