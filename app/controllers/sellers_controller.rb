class SellersController < ApplicationController
  before_action :set_seller, only: [:show, :edit, :update, :destroy, :reset_pass]

  # GET /sellers
  def index
    respond_to do |format|
      format.html 
      format.json { render json: SellersDatatable.new(view_context, current_user) }
    end    
  end

  # GET /sellers/1
  def show
  end

  # GET /sellers/new
  def new
    @seller = Seller.new
    if current_user.isManager?
      @seller.partner = current_user.partner
    end
  end

  # GET /sellers/1/edit
  def edit

  end

  # POST /sellers
  def create
    @seller = Seller.new(seller_params)
    @seller.password = ENV["DEFAULT_PASSWORD"]
    if @seller.save(validate: false)
      redirect_to sellers_url, notice: 'Usuário criado com sucesso.'
    else
      render :new
    end
  end

  def reset_pass
    @seller.password = ENV["DEFAULT_PASSWORD"]
    if @seller.save(validate: false)
      redirect_to sellers_url, notice: 'Senha alerada para ' + ENV["DEFAULT_PASSWORD"] + ' com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /sellers/1
  def update
    if @seller.update(seller_params)
      redirect_to sellers_url, notice: 'Usuário alterado com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /sellers/1
  def destroy
    @seller.destroy
    redirect_to sellers_url, notice: 'Usuário removido com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_seller
      @seller = Seller.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def seller_params
      params.require(:seller).permit(:name, :email, :phone, :partner)
    end
end
