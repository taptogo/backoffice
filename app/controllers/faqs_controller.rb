class FaqsController < ApplicationController
  before_action :set_faq, only: [:show, :edit, :update, :destroy]
  before_action :check_super_admin

  # GET /faqs
  def index
    respond_to do |format|
      format.html 
      format.json { render json: FaqsDatatable.new(view_context, current_user) }
    end    
  end

  # GET /faqs/1
  def show
  end

  # GET /faqs/new
  def new
    @faq = Faq.new
  end

  # GET /faqs/1/edit
  def edit

  end

  # POST /faqs
  def create
    @faq = Faq.new(faq_params)

    if @faq.save
      redirect_to faqs_url, notice: 'Faq criado com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /faqs/1
  def update
    @faq.enabled = false
    if @faq.update(faq_params)
      redirect_to faqs_url, notice: 'Faq alterado com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /faqs/1
  def destroy
    @faq.destroy
    redirect_to faqs_url, notice: 'Faq removido com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_faq
      @faq = Faq.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def faq_params
      params.require(:faq).permit(:title, :enabled, :message, :position)
    end
end
