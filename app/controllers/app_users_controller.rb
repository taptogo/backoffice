class AppUsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy, :reset_pass]

  # GET /users
  def index
    respond_to do |format|
      format.html 
      format.json { render json: UsersDatatable.new(view_context, current_user, params[:category]) }
    end    
  end

  # GET /users/1
  def show
  end

  # GET /users/new
  def new
    @user = Usuario.new
  end

  # GET /users/1/edit
  def edit

  end

  # POST /users
  def create
    @user = Usuario.new(user_params)
    @user.password = "123456"
    if @user.save(validate: false)
      redirect_to app_users_url, notice: 'User criado com sucesso.'
    else
      render :new
    end
  end

  def reset_pass
    @user.password = "tap2go123456"
    @user.temp_pass = false
    if @user.save(validate: false)
      redirect_to app_users_url, notice: 'Senha alerada para tap2go123456 com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /users/1
  def update
    @user.temp_pass = false
    @user.activated = false
    if @user.update(user_params)
      redirect_to app_users_url, notice: 'User alterado com sucesso.'
    else
      render :edit
    end
  end

 # PATCH/PUT /users/1
  def unlock
    @user = User.find(params[:id])
    @user.blocked = false
    @user.login_tries = 0
    @user.save(validate: false)
    redirect_to app_users_url, notice: 'User desbloqueado com sucesso.'
  end 

  def lock
    @user = User.find(params[:id])
    @user.blocked = true
    @user.login_tries = 3
    @user.save(validate: false)
    redirect_to app_users_url, notice: 'User bloqueado com sucesso.'
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    redirect_to app_users_url, notice: 'User removido com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:usuario).permit(:name, :email, :phone, :cpf, :account_id, :person_id, :card_id, :birth_date, :invoice_count, :activated, :step, :temp_pass)
    end
end
