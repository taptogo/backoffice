class PoliciesController < ApplicationController
  before_action :set_policy, only: [:show, :edit, :update, :destroy]
  before_action :check_super_admin

  # GET /policies
  def index
    respond_to do |format|
      format.html 
      format.json { render json: PoliciesDatatable.new(view_context, current_user, params[:offer]) }
    end    
  end

  # GET /policies/1
  def show
  end

  # GET /policies/new
  def new
    @policy = Policy.new
  end

  # GET /policies/1/edit
  def edit

  end

  # POST /policies
  def create
    @policy = Policy.new(policy_params)

    if @policy.save
      redirect_to policies_url, notice: 'Política criada com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /policies/1
  def update
    @policy.enabled = false
    if @policy.update(policy_params)
      redirect_to policies_url, notice: 'Política alterada com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /policies/1
  def destroy
    @policy.destroy
    redirect_to policies_url, notice: 'Política removida com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_policy
      @policy = Policy.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def policy_params
      params.require(:policy).permit(:name, :description)
    end
end
