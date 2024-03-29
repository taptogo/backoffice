class Webservices::LoginController <  WebservicesController 



  def forgotPass
    u = User.where(:email => params[:email]).first
    if !u.nil?
      o = [('0'..'9')].map { |i| i.to_a }.flatten
      string = (0...9).map { o[rand(o.length)] }.join
      u.password = string
      u.temp_pass = string
      u.save(validate: false)
      u.send_reset_password_instructions
      render :json => {}
    else
      render :json =>  {:message => "Usuário não encontrado", :error_code => "1"} , :status => 340
    end
  end


  def signinFacebook
    u = User.where(:email => params[:email]).first
    if !u.nil?
      u.facebook = (params[:facebook].nil? || params[:facebook].to_s == "empty") ? u.facebook :  params[:facebook]
      
      if !params[:interests].blank?
        u.category_ids = params[:interests]
      end

      sign_in u, :bypass => true
      u.save(validate: false)
      render :json => User.mapUser(u)
    elsif u.nil? && !params[:facebook].nil? 
      user = User.new
            
      if !params[:interests].blank?
        user.category_ids = params[:interests]
      end

      user.password = params[:facebook]
      user.password_confirmation = params[:facebook]
      user.facebook = params[:facebook]
      user.name = params[:name]
      user.email = params[:email]
      user.save(validate: false)
      sign_in user, :bypass => true
      render :json => User.mapUser(user)
    else
      #render :nothing => true, :status => 401
      render :json =>  {:message => "Usuário não encontrado", :error_code => "1"} , :status => 401
    end
  end

  def saleChannelSignin
    u = User.where(:email => params[:email]).first
    if !u.nil? && u.isSaleChannel?
      if u.valid_password?(params[:password]) 
              
        if !params[:interests].blank?
          u.category_ids = params[:interests]
        end

        sign_in u, :bypass => true
        u.save(validate: false)
        render :json => User.mapUser(u)
      else
      render :json =>  {:message => "Senha incorreta", :error_code => "1"} , :status => 200
      end
    else
      render :json =>  {:message => "Usuário não encontrado", :error_code => "2"} , :status => 200
    end
  end

  def signin
    u = User.where(:email => params[:email]).first
    if !u.nil?
      if u.valid_password?(params[:password]) 
              
        if !params[:interests].blank?
          u.category_ids = params[:interests]
        end

        sign_in u, :bypass => true
        u.save(validate: false)
        render :json => User.mapUser(u)
      else
      render :json =>  {:message => "Senha incorreta", :error_code => "1"} , :status => 340
      end
    else
      render :json =>  {:message => "Usuário não encontrado", :error_code => "1"} , :status => 340
    end
  end

  def signup
    u = User.where(:email => params[:email].downcase).first
    if !u.nil?
        render :json =>  {:message => "usuário já cadastrado"}, :status => 403
    else
      user = User.new
            
      if !params[:interests].blank?
        user.category_ids = params[:interests]
      end

      user.cpf = params[:cpf]
      user.birth_date = params[:birth_date]
      user.phone = params[:phone]
      user.gender = params[:gender]
      user.password = params[:password]
      user.password_confirmation = params[:password]
      user.name = params[:name]
      user.zip = params[:zip]
      user.picture = params[:profile_picture]
      user.email = params[:email].downcase
      user.save(validate: false)
      sign_in user, :bypass => true
      render :json =>  User.mapUser(user)
    end
  end


end
