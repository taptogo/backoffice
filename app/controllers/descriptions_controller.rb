class DescriptionsController < ApplicationController
  before_action :set_description, only: [:show, :edit, :update, :destroy]
  before_action :check_super_admin

  # GET /descriptions
  def index
    respond_to do |format|
      format.html 
      format.json { render json: DescriptionsDatatable.new(view_context, current_user, params[:offer]) }
    end    
  end

  # GET /descriptions/1
  def show
  end

  # GET /descriptions/new
  def new
    @description = Description.new
  end

  # GET /descriptions/1/edit
  def edit

  end

  # POST /descriptions
  def create
    @description = Description.new(description_params)

    if @description.save
      redirect_to descriptions_url, notice: 'Descrição criada com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /descriptions/1
  def update
    @description.enabled = false
    if @description.update(description_params)
      redirect_to descriptions_url, notice: 'Descrição alterada com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /descriptions/1
  def destroy
    @description.destroy
    redirect_to descriptions_url, notice: 'Descrição removida com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_description
      @description = Description.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def description_params
      params.require(:description).permit(:title, :message, :enabled, :position, :offer)
    end




end
