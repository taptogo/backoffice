class ApplicationMailer < ActionMailer::Base
  default from: 'projetos@mobile2you.com.br'
  # layout 'mailer'

   def updateEmail(user,email, token)
    @token = token
    @user = user
    headers 'X-Special-Domain-Specific-Header' => "SecretValue",
            'from' => 'projetos@mobile2you.com.br',
            'sender' => 'projetos@mobile2you.com.br'
    mail(from: "Equipe Mobile2you <projetos@mobile2you.com.br>", :to => email, :subject => 'Minha Revenda Digital - Alterar E-mail')
    
  end
end
