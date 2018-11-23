class CouponsController < ApplicationController
  before_action :set_coupon, only: [:show, :edit, :update, :destroy]
  before_action :check_super_admin

  # GET /coupons
  def index
    respond_to do |format|
      format.html 
      format.json { render json: CouponsDatatable.new(view_context, current_user, params[:offer]) }
    end    
  end

  # GET /coupons/1
  def show
  end

  # GET /coupons/new
  def new
    @coupon = Coupon.new
  end

  # GET /coupons/1/edit
  def edit

  end

  # POST /coupons
  def create
    @coupon = Coupon.new(coupon_params)

    if @coupon.save
      redirect_to coupons_url, notice: 'Cupom criado com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /coupons/1
  def update
    @coupon.enabled = false
    if @coupon.update(coupon_params)
      redirect_to coupons_url, notice: 'Cupom alterado com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /coupons/1
  def destroy
    @coupon.destroy
    redirect_to coupons_url, notice: 'Cupom removido com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coupon
      @coupon = Coupon.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def coupon_params
      params.require(:coupon).permit(:type, :enabled, :discount, :from_plain, :to_plain,:min_value,:max_value, :max_quantity, :description, :name, :discount, offer_ids: [])
    end



end
