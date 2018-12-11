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
    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => email, :cco => order.package.offer.partner.email :subject => '[Tap2Go] Pedido Realizado')
    
  end

end
