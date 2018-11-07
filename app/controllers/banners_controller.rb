class BannersController < ApplicationController
  before_action :set_banner, only: [:show, :edit, :update, :destroy]

  # GET /banners
  def index
    respond_to do |format|
      format.html 
      format.json { render json: BannersDatatable.new(view_context, current_user) }
    end    
  end

  # GET /banners/1
  def show
  end

  # GET /banners/new
  def new
    @banner = Banner.new
  end

  # GET /banners/1/edit
  def edit

    if !@banner.from.nil?
      @banner.from = @banner.from.strftime("%d/%m/%Y %H:%M")
    end
    if !@banner.to.nil?
      @banner.to = @banner.to.strftime("%d/%m/%Y %H:%M")
    end

  end

  # POST /banners
  def create
    @banner = Banner.new(banner_params)

    if @banner.save
      redirect_to banners_url, notice: 'Banner criado com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /banners/1
  def update
    if @banner.update(banner_params)
      redirect_to banners_url, notice: 'Banner alterado com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /banners/1
  def destroy
    @banner.destroy
    redirect_to banners_url, notice: 'Banner removido com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_banner
      @banner = Banner.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def banner_params
      params.require(:banner).permit(:name, :enabled, :from, :to, :fixed, :picture, :activity, :url, :viewcontroller)
    end
end
