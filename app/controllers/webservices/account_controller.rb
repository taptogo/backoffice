class Webservices::AccountController <  WebservicesController
  require 'credit_card_validations/string'


  api :POST, '/account/updatePassword'
  formats ['json']
  param :current_password, String, :desc => "Current Password", :required => true, :missing_message => lambda { "senha atual ausente" }
  param :password, String, :desc => "New password", :required => true, :missing_message => lambda { "nova senha ausente" }
  param :password_confirmation, String, :desc => "New password confirmation", :required => true, :missing_message => lambda { "confirmação de senha ausente" }
  error 403, "parâmetros inválidos"
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      {"message" : ""}, status 
    EOS

  def updatePassword
    u = current_user
    user_id = current_user.id
    if params[:password].length < 8
      render :json => {message: "A senha deve ter 8 caracteres"}, :status => 403
    elsif params[:password] != params[:password_confirmation]
      render :json => {message: "Senha atual e confirmação diferentes"}, :status => 403
    elsif ! u.valid_password?(params[:current_password])
      render :json => {message: "Senha atual inválida"}, :status => 403
    elsif u.update_with_password(params)
      sign_in current_user, :bypass => true
      render :json =>  {:message => nil}.to_json
    else
      render :nothing => true, :status => 401
    end
  end


  api :POST, '/account/inviteFriend'
  param :name, String, :required => false, :allow_nil => true
  param :phone, String, :required => false, :allow_nil => true
  param :email, String, :required => false, :allow_nil => true
  param :facebook, String, :required => false, :allow_nil => true
  error 401, "Usuário não autenticado"
  error 340, "Usuário já convidado"
  error 500, "Erro desconhecido"
  description <<-EOS
    type 0 - sem aprovação
    == Request
      friends:
      [{
        "name" : "Caio",
        "phone" : "222",
        "email" : "aaa@gmail.com"
        "facebook" : "3333"
        }]
    == Response
      {}
    EOS

  def inviteFriend
    params[:friends].each do |friend|
      i = Invite.new 
      i.phone = friend[:phone]
      i.facebook = friend[:facebook]
      i.email = friend[:email]
      i.name = friend[:name]
      i.user = current_user
      i.save
    end
    render :json => {}, status: status
  end



  api :GET, '/account/getCredits'
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
    type 0 - sem aprovação
    == Response
      {"credits" : 0.0}
    EOS

  def getCredits
    i = Invite.where(:tap_id => current_user.id).first 
    credits = 0
    if !i.nil?
      credits = i.credit
    end
    render :json => {:credits => credits}
  end


  api :POST, '/account/updatePhoto'
  param :photo_64, String, :desc => "Base64 string, only for Android", :required => false, :allow_nil => true
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"

  def updatePhoto
    u = current_user
    u.picture = params[:photo]
    u.changedPhoto = true
    u.save(validate: false)
    render :json =>  User.mapUser(u).to_json
  end


  api :PUT, '/account/updateCity'
  param :city_id, String, :desc => "city", :required => true, :missing_message => lambda { "telefone ausente" } 
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"

  def updateCity
    u = current_user
    u.city_id = params[:city_id]
    u.save(validate: false)
    render :json =>  User.mapUser(u).to_json
  end


  api :PUT, '/account/updateInterests'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Request
      interests: [{"id" : "abc1234", "name" : "teste"}]
    EOS

  def updateInterests
    u = current_user
    u.categories = []
    params[:interests].each do |i|
      u.categories << Category.find(i["id"])
    end
    u.save(validate: false)
    render :json =>  User.mapUser(u).to_json
  end


  api :PUT, '/account/updateAbout'
  param :gender, String, :desc => "gender", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :phone, String, :desc => "User Telephone", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :name, String, :desc => "User Name", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :email, String, :desc => "email", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :cpf, String, :desc => "cpf Name", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :birth_date, String, :desc => "birth_date", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :street, String, :desc => "address", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :number, String, :desc => "number", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :zip, String, :desc => "zip", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :city, String, :desc => "city", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :complement, String, :desc => "city", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :state, String, :desc => "state", :required => false, :missing_message => lambda { "telefone ausente" } 
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"

  def updateAbout
    u = current_user
    u.gender = params[:gender].nil? ? u.gender : params[:gender]
    u.email = params[:email].nil? ? u.email : params[:email]
    u.phone = params[:phone].nil? ? u.phone : params[:phone]
    u.name = params[:name].nil? ? u.name : params[:name]
    u.cpf = params[:cpf].nil? ? u.cpf : params[:cpf]
    u.zip = params[:zip].nil? ? u.zip : params[:zip]
    u.number = params[:number].nil? ? u.number : params[:number]
    u.complement = params[:complement].nil? ? u.complement : params[:complement]
    u.street = params[:street].nil? ? u.street : params[:street]
    u.city = params[:city].nil? ? u.city : params[:city]
    u.state = params[:state].nil? ? u.state : params[:state]
    u.birth_date = params[:birth_date].nil? ? u.birth_date : params[:birth_date]
    u.save(validate: false)
    render :json =>  User.mapUser(u).to_json
  end

  api :GET, '/account/getAbout'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  def getAbout
    a = User.mapUser(current_user)
    render :json => a.to_json
  end

  

  api :GET, '/account/getNotifications'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"

  description <<-EOS
    type 0 - sem aprovação
    == Response
      [{"id" : "abc1234", "message" : "pediu para....",  "title" : "titulo", "type" : 0 }]
    EOS

  def getNotifications
    render :json => Notification.mapNotifications(current_user.notifications)
    # render :json => [{:id => "23232", :message => "Pediu para alterar o nome do evento para Pride 2018", :title => "Victor Catao", :type => 1}]
  end
  
  api :POST, '/account/approveNotification'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  param :notification_id, String

  def approveNotification

     n =  Notification.find(params[:notification_id])
     notification = Notification.new
     notification.user_id = n.sender_id
     notification.message = current_user.name + " aprovou sua solicitação"
     notification.save

     if !n.account_id.nil?
      e = Event.find(n.event_id)
      e.account_id = n.account_id
      e.save
     elsif  !n.event_id.nil?
        e = Event.find(n.event_id)
        e.user_ids << n.user_id 
        e.save
     end
     n.destroy


    render :json => {}
  end

  api :DELETE, '/account/refuseNotification'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  param :notification_id, String

  def refuseNotification
    begin
      Notification.find(params[:notification_id]).destroy
    rescue
    end
    render :json => {}
  end



  api :POST, '/account/addCard'
  param :name, String, :desc => "name", :required => true, :missing_message => lambda { "telefone ausente" } 
  param :month, String, :desc => "month", :required => true, :missing_message => lambda { "telefone ausente" } 
  param :year, String, :desc => "Year", :required => true, :missing_message => lambda { "telefone ausente" } 
  param :cvv, String, :desc => "CVV", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :cpf, String, :desc => "cpf Name", :required => false, :missing_message => lambda { "telefone ausente" } 
  param :number, String, :desc => "nmuber", :required => true, :missing_message => lambda { "telefone ausente" } 
  param :zip, String, :desc => "ZIP", :required => true, :missing_message => lambda { "telefone ausente" } 
  param :phone, String, :desc => "ZIP", :required => true, :missing_message => lambda { "telefone ausente" } 
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
       {"id" : "3232", "brand" : "visa", "number" : "4141 **** **** 2121"}
    EOS

  def addCard
    a = Card.new
    a.name = "●●●● ●●●● ●●●● " + params[:number].last(4)
    a.number = params[:number]
    a.month = params[:month]
    a.year = params[:year]
    a.cvv = params[:cvv]
    a.holder = params[:name]
    a.zip = params[:zip]
    a.brand = params[:number].credit_card_brand
    a.cpf = params[:cpf]
    a.phone = params[:phone]
    a.deleted = false
    a.user = current_user
    a.save(validate: false)
    render :json => Card.mapCards([a]).first
  end


  api :POST, '/account/addBankAccount'
  param :bank, String, :desc => "bank number", :required => true, :missing_message => lambda { "telefone ausente" } 
  param :agency, String, :required => true, :missing_message => lambda { "telefone ausente" } 
  param :agency_digit, String, :required => true, :missing_message => lambda { "telefone ausente" } 
  param :account, String, :required => true, :missing_message => lambda { "telefone ausente" } 
  param :account_digit, String, :required => true, :missing_message => lambda { "telefone ausente" } 
  param :cpf, String, :required => true, :missing_message => lambda { "telefone ausente" } 
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
  description <<-EOS
    == Response
       {"id" : "3232", 
        "bank" : "visa", 
        "agency" : "222", 
        "agency_digit" : "2", 
        "account" : "222", 
        "account_digit" : "2", 
        "selected" : false, 
        }
    EOS

  def addBankAccount
    a = Account.new
    a.bank_code = params[:bank]
    a.agencia = params[:agency]
    a.agencia_dv = params[:agency_digit]
    a.conta = params[:account]
    a.conta_dv = params[:account_digit]
    a.cpf = params[:cpf]
    a.user = current_user
    a.selected = current_user.accounts.count == 0
    a.save(validate: false)
    render :json => Account.mapAccounts([a]).first
  end


 
  api :GET, '/account/cards'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
       [{"id" : "3232", "brand" : "visa", "number" : "4141 **** **** 2121"}]
    EOS

  def cards
    render :json => Card.mapCards(current_user.cards.desc(:created_at))
  end


  api :GET, '/account/bankAccounts'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
       [{"id" : "3232", 
        "bank" : "visa", 
        "agency" : "222", 
        "agency_digit" : "2", 
        "account" : "222", 
        "account_digit" : "2", 
        "selected" : false, 
        }]
    EOS

  def bankAccounts
    render :json => Account.mapAccounts(current_user.accounts.desc(:created_at))
  end


  api :DELETE, '/account/removeBankAccount'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  param :account_id, String, :desc => "account id", :required => true , :missing_message => lambda { "id ausente" } 
  description <<-EOS
    == Response
      {:status=>"ok"}
    EOS

  def removeBankAccount
    a = current_user.accounts.where(:id => params[:account_id].to_s).first
    a.destroy
    render :json => {status: "ok"}
  end

  api :PUT, '/account/selectBankAccount'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  param :account_id, String, :desc => "account id", :required => true , :missing_message => lambda { "id ausente" } 
  description <<-EOS
    == Response
      {:status=>"ok"}
    EOS

  def selectBankAccount
    a = current_user.accounts.where(:id => params[:account_id].to_s).first
    current_user.accounts.each do |c|
      c.selected = false
      c.save
    end
    a.selected = true
    a.save
    render :json => {status: "ok"}
  end


  api :GET, '/account/lastCard'
  param :event_id, String, :desc => "latitude", :required => true
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
       {"card" :{ "id" : "3232", "brand" : "visa", "number" : "4141 **** **** 2121"}. "tax" : 0.5, "credit" : 10}
    EOS

  def lastCard
    render :json => {:tax => 0.1, :credit => 0.1, :card => Card.mapCards(current_user.cards.desc(:created_at)).first }
  end

  api :DELETE, '/account/removeCard'
  formats ['json']
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  param :card, String, :desc => "card id", :required => true , :missing_message => lambda { "id ausente" } 
  description <<-EOS
    == Response
      {:status=>"ok"}
    EOS

  def removeCard
    a = current_user.cards.where(:id => params[:card].to_s).first
    a.deleted = true
    a.save
    render :json => {status: "ok"}
  end



  def registerToken
    if params[:token].nil? || current_user.nil?
      render :json => {:message => "Token registrado com sucesso"}
      return
    end
    
    current_user.token = params[:token]
    current_user.os = params[:os]
    current_user.device = params[:device]
    current_user.save(validate: false)
    render :json => {:message => "Token registrado com sucesso"}
  end



  def removeToken
    current_user.token = nil
    current_user.save(validate: false)
    render :json => {}
  end




  def getFaq
    key = "tap_faq"
    value = Redisaux::Aux.checkKey(key)
    if value.nil? || value.to_s.length < 10
      faqs = Faq.enabled.asc(:position)
      Faq.mapFaqs(faqs)
      json =  Faq.mapFaqs(faqs)
      Redisaux::Aux.set(key, json)
      render :json => json
    else
      render :json => value
    end
  end


end
