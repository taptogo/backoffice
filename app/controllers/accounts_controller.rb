class AccountsController < ApplicationController
  before_action :set_account, only: [:show, :edit, :update, :destroy]
  before_action :set_account_type
  before_action :check_super_admin

  # GET /accounts
  def index
    respond_to do |format|
      format.html 
      format.json { render json: AccountsDatatable.new(view_context, current_user) }
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
    @account.enabled = true
  end

  # GET /accounts/1/edit
  def edit

  end

  # POST /accounts
  def create
    @account = Account.new(account_params)

    if @account.save
      if !@account.partner.nil?
        redirect_to partners_url, notice: 'Conta criada com sucesso'
      elsif !@account.sale_channel.nil?
        redirect_to sale_channels_url, notice: 'Conta criada com sucesso'
      else
        redirect_to accounts_url, notice: 'Conta criada com sucesso'
      end
    elsif !@account.partner.nil?
      redirect_to partners_url, notice: 'Ocorreu um erro ao cadastrar a conta bancária'
    elsif !@account.sale_channel.nil?
      redirect_to sale_channels_url, notice: 'Ocorreu um erro ao cadastrar a conta bancária'
    else
      render :new
    end
  end

  # PATCH/PUT /accounts/1
  def update
    if @account.update(account_params)
      if !@account.partner.nil?
        redirect_to partners_url, notice: 'Conta alterada com sucesso'
      elsif !@account.sale_channel.nil?
        redirect_to sale_channels_url, notice: 'Conta alterada com sucesso'
      else
        redirect_to accounts_url, notice: 'Conta alterada com sucesso'
      end
    elsif !@account.partner.nil?
      redirect_to partners_url, notice: 'Ocorreu um erro ao cadastrar a conta bancária'
    elsif !@account.sale_channel.nil?
      redirect_to sale_channels_url, notice: 'Ocorreu um erro ao cadastrar a conta bancária'
    else
      render :new
    end
  end

  # DELETE /accounts/1
  def destroy
    @account.destroy
    if !@account.partner.nil?
      redirect_to partners_url, notice: 'Conta removida com sucesso'
    elsif !@account.sale_channel.nil?
      redirect_to sale_channels_url, notice: 'Conta removida com sucesso'
    else
      redirect_to accounts_url, notice: 'Conta removida com sucesso'
    end
  end

  private
    def set_account_type
      @accountType = params[:accountType]
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def account_params
      params.require(:account).permit(:bank_code, :agencia, :agencia_dv, :conta, :conta_dv,:name, :partner, :cnpj, :sale_channel, :enabled)
    end

end
