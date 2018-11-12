class Webservices::AccountController <  WebservicesController
  require 'credit_card_validations/string'

  def getPromoCode
    if current_user.promocode.blank?
        o = [('0'..'9'), ('A'..'Z')].map { |i| i.to_a }.flatten
        string = (0...6).map { o[rand(o.length)] }.join
        current_user.promocode = string
        current_user.save(validate: false)
    end

    render :json => {:code => current_user.promocode}
  end

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




  def getCredits
    i = Invite.where(:tap_id => current_user.id).first 
    credits = 0
    if !i.nil?
      credits = i.credit
    end
    render :json => {:credits => credits}
  end



  def updatePhoto
    u = current_user
    u.picture = params[:photo]
    u.changedPhoto = true
    u.save(validate: false)
    render :json =>  User.mapUser(u).to_json
  end


  def updateCity
    u = current_user
    u.city_id = params[:city_id]
    u.save(validate: false)
    render :json =>  User.mapUser(u).to_json
  end



  def updateInterests
    u = current_user
    u.categories = []
    params[:interests].each do |i|
      u.categories << Category.find(i["id"])
    end
    u.save(validate: false)
    render :json =>  User.mapUser(u).to_json
  end




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

  def getAbout
    a = User.mapUser(current_user)
    render :json => a.to_json
  end

  

  def getNotifications
    render :json => Notification.mapNotifications(current_user.notifications)
    # render :json => [{:id => "23232", :message => "Pediu para alterar o nome do evento para Pride 2018", :title => "Victor Catao", :type => 1}]
  end
  



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



  def cards
    render :json => Card.mapCards(current_user.cards.desc(:created_at))
  end


  def bankAccounts
    render :json => Account.mapAccounts(current_user.accounts.desc(:created_at))
  end



  def lastCard
    render :json => {:tax => 0.1, :credit => 0.1, :card => Card.mapCards(current_user.cards.desc(:created_at)).first }
  end

  
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
