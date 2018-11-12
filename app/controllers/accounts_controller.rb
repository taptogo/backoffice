class AccountsController < ApplicationController
  before_action :set_account, only: [:show, :edit, :update, :destroy]
  before_action :check_super_admin

  # GET /accounts
  def index
    respond_to do |format|
      format.html 
      format.json { render json: AccountsDatatable.new(view_context, current_user, params[:partner]) }
    end    
  end

  # GET /accounts/1
  def show
  end

  def password
    render :layout => "login"
  end

  # GET /accounts/new
  def new
    @account = Account.new
  end

  # GET /accounts/1/edit
  def edit

  end

  # POST /accounts
  def create
    @account = Account.new(account_params)

    if @account.save
      redirect_to accounts_url, notice: 'Conta criada com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /accounts/1
  def update
    @account.enabled = false
    if @account.update(account_params)
      redirect_to accounts_url, notice: 'Conta alterada com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /accounts/1
  def destroy
    @account.destroy
    redirect_to accounts_url, notice: 'Conta removida com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def account_params
      params.require(:account).permit(:bank_code, :agencia, :agencia_dv, :conta, :conta_dv,:name, :partner, :cnpj)
    end

end
