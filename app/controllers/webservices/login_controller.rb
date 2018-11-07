class Webservices::LoginController <  WebservicesController 


  api :POST, '/login/forgotPass'
  formats ['json']
  param :email, String, :desc => "Email", :required => true, :missing_message => lambda { "email ausente" }
  error 340, "Usuário não encontrado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      {"message" : ""}, status 
    EOS

  def forgotPass
    if User.where(:email => params[:email]).count > 0
      render :json => {}
    else
      render :json =>  {:message => "Usuário não encontrado", :error_code => "1"} , :status => 340
    end
  end

  api :POST, '/login/signinFacebook'
  param :name, String, :desc => "Name", :required => true, :missing_message => lambda { "nome ausente" }
  param :email, String, :desc => "Email", :required => true, :missing_message => lambda { "email ausente" }
  param :facebook, String, :desc => "Facebook", :required => true, :missing_message => lambda { "facebook ausente" }
  error 401, "Usuário não encontrado"
  error 500, "Erro desconhecido"

  def signinFacebook
    u = User.where(:email => params[:email]).first
    if !u.nil?
      u.facebook = (params[:facebook].nil? || params[:facebook].to_s == "empty") ? u.facebook :  params[:facebook]
      sign_in u, :bypass => true
      u.save(validate: false)
      render :json => User.mapUser(u)
    elsif u.nil? && !params[:facebook].nil? 
      user = User.new
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


 

  api :POST, '/login/signin'
  formats ['json']
  param :email, String, :desc => "Email", :required => true, :missing_message => lambda { "email ausente" }
  param :password, String, :desc => "Password", :required => true, :missing_message => lambda { "senha ausente" }
  error 401, "Usuário não encontrado"
  error 500, "Erro desconhecido"

  def signin
    u = User.where(:email => params[:email]).first
    if !u.nil?
      if u.valid_password?(params[:password]) 
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

  api :POST, '/login/signup'
  param :email, String, :desc => "Email", :required => true, :missing_message => lambda { "email ausente" }
  param :cpf, String, :desc => "CPF", :required => false, :missing_message => lambda { "cpf ausente" }
  param :zip, String, :desc => "zip", :required => false, :missing_message => lambda { "zip ausente" }
  param :birth_date, String, :desc => "BirthDate", :required => false, :missing_message => lambda { "nascimento ausente" }
  param :phone, String, :desc => "Phone", :required => false, :missing_message => lambda { "telefone ausente" }
  param :gender, ["Masculino","Feminino"], :desc => "Gender", :required => false, :missing_message => lambda { "sexo ausente" }
  param :password, String, :desc => "Password", :required => true, :missing_message => lambda { "senha ausente" }
  param :name, String, :desc => "Name", :required => false, :missing_message => lambda { "nome ausente" }
  param :photo_64, String, :desc => "Base64 string, only for Android", :required => false, :allow_nil => true

  error 403, "Usuário já cadastrado"
  error 500, "Erro desconhecido"

  def signup
    u = User.where(:email => params[:email].downcase).first
    if !u.nil?
        render :json =>  {:message => "usuário já cadastrado"}, :status => 403
    else
      user = User.new
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
