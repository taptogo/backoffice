class ManagersController < ApplicationController
  before_action :set_manager, only: [:show, :edit, :update, :destroy, :reset_pass]

  # GET /managers
  def index
    respond_to do |format|
      format.html 
      format.json { render json: ManagersDatatable.new(view_context, current_user) }
    end    
  end

  # GET /managers/1
  def show
  end

  # GET /managers/new
  def new
    @manager = Manager.new
    if current_user.isManager?
      @manager.partner = current_user.partner
    end
  end

  # GET /managers/1/edit
  def edit

  end

  # POST /managers
  def create
    @manager = Manager.new(manager_params)
    @manager.password = "12345678"
    if @manager.save(validate: false)
      redirect_to managers_url, notice: 'Gestor criado com sucesso.'
    else
      render :new
    end
  end

  def reset_pass
    @manager.password = "12345678"
    if @manager.save(validate: false)
      redirect_to managers_url, notice: 'Senha alerada para 12345678 com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /managers/1
  def update
    if @manager.update(manager_params)
      redirect_to managers_url, notice: 'Gestor alterado com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /managers/1
  def destroy
    @manager.destroy
    redirect_to managers_url, notice: 'Gestor removido com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manager
      @manager = Manager.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def manager_params
      params.require(:manager).permit(:name, :email, :phone, :partner)
    end
end
