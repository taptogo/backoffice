class ApplicationMailer < ActionMailer::Base
  default from: 'projetos@mobile2you.com.br'
  # layout 'mailer'

   def welcome(email)
    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => email, :subject => '[Tap2Go] Bem Vindo')
    
  end

   def sendOrder(order)
    email = order.user.email

    @policy = order.package.offer.policy
    if @policy
      @policy = @policy.description
    else
      @policy = ""
    end

    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => email, :subject => '[Tap2Go] Pedido Realizado')
    
  end

   def sendOrderCompany(order)
    email = order.package.offer.partner.email
    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => email, :subject => '[Tap2Go] Nova Reserva')
    
  end



end
