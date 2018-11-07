class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy, :cancel, :confirm]

  # GET /orders
  def index
    respond_to do |format|
      format.html 
      format.json { render json: OrdersDatatable.new(view_context, current_user, params[:from], params[:to], params[:user], params[:offer], params[:coupon]) }
    end    
  end

  # GET /orders/1
  def show
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      redirect_to orders_url, notice: 'Notificação criada com sucesso.'
    else
      render :new
    end
  end


  def cancel
    @order.status = "Cancelado"
    @order.cancel(current_user)
    @order.save(validate: false)
    redirect_to({:controller=> :orders, :action => :show, :id => params[:id]}, :flash => { :notice_success => "Pedido Cancelado com sucesso" })   
  end

  def confirm
    @order.status = "Confirmado"
    @order.picked = true
    @order.confirm
    @order.save(validate: false)
    redirect_to({:controller=> :orders, :action => :show, :id => params[:id]}, :flash => { :notice_success => "Pedido Confirmado com sucesso" })   
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
    redirect_to orders_url, notice: 'Notificação removida com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_params
      params.fetch(:order).permit(:title, :message, :fireDate, :user)
    end
end
