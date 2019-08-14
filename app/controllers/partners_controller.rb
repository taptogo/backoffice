class PartnersController < ApplicationController
  before_action :set_partner, only: [:show, :edit, :update, :destroy]
  before_action :check_super_admin

  # GET /partners
  def index
    respond_to do |format|
      format.html 
      format.json { render json: PartnersDatatable.new(view_context, current_user) }
    end    
  end

  # GET /partners/1
  def show
  end

  # GET /partners/new
  def new
    @partner = Partner.new
  end

  # GET /partners/1/edit
  def edit

  end

  # POST /partners
  def create
    @partner = Partner.new(partner_params)

    if @partner.save
      redirect_to partners_url, notice: 'Parceiro criado com sucesso.'
    #elsif @partner.abort?
      #redirect_to partners_url, notice: 'Algum erro ocorreu ao cadastrar o Parceiro'
    else
      render :new
    end
  end

  # PATCH/PUT /partners/1
  def update
    #@partner.enabled = false
    if @partner.update(partner_params)
      redirect_to partners_url, notice: 'Parceiro alterado com sucesso.'
    #elsif @partner.errors
      #redirect_to partners_url, notice: 'Algum erro ocorreu ao atualizar o Parceiro'
    else
      render :edit
    end
  end

  # DELETE /partners/1
  def destroy
    @partner.destroy
    redirect_to partners_url, notice: 'Parceiro removido com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_partner
      @partner = Partner.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def partner_params
      params.require(:partner).permit(:zip, :street, :number, :complement, :neighborhood, :city, :state, :country, :enabled, :bank_code, :agencia, :agencia_dv, :conta, :conta_dv,:name, :social, :tax, :email, :cnpj, :phone, :url, :facebook, :instagram)
    end

end
