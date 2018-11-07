class SuperAdminsController < ApplicationController
  before_action :set_super_admin, only: [:show, :edit, :update, :destroy, :reset_pass]
  before_action :check_super_admin

  # GET /super_admins
  def index
    respond_to do |format|
      format.html 
      format.json { render json: SuperAdminsDatatable.new(view_context, current_user) }
    end    
  end

  # GET /super_admins/1
  def show
  end

  # GET /super_admins/new
  def new
    @super_admin = SuperAdmin.new
  end

  # GET /super_admins/1/edit
  def edit

  end

  # POST /super_admins
  def create
    @super_admin = SuperAdmin.new(super_admin_params)
    @super_admin.password = "12345678"
    if @super_admin.save(validate: false)
      redirect_to super_admins_url, notice: 'SuperAdmin criado com sucesso.'
    else
      render :new
    end
  end

  def reset_pass
    @super_admin.password = "12345678"
    if @super_admin.save(validate: false)
      redirect_to super_admins_url, notice: 'Senha alerada para 12345678 com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /super_admins/1
  def update
    if @super_admin.update(super_admin_params)
      redirect_to super_admins_url, notice: 'SuperAdmin alterado com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /super_admins/1
  def destroy
    @super_admin.destroy
    redirect_to super_admins_url, notice: 'SuperAdmin removido com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_super_admin
      @super_admin = SuperAdmin.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def super_admin_params
      params.require(:super_admin).permit(:name, :email, :phone)
    end
end
