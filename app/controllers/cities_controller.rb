class CitiesController < ApplicationController
  before_action :set_city, only: [:show, :edit, :update, :destroy]
  before_action :check_super_admin

  # GET /cities
  def index
    respond_to do |format|
      format.html 
      format.json { render json: CitiesDatatable.new(view_context, current_user, params[:offer]) }
    end    
  end

  # GET /cities/1
  def show
  end

  # GET /cities/new
  def new
    @city = City.new
  end

  # GET /cities/1/edit
  def edit

  end

  # POST /cities
  def create
    @city = City.new(city_params)

    if @city.save
      redirect_to cities_url, notice: 'Cidade criada com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /cities/1
  def update
    @city.enabled = false
    @city.soon = false
    if @city.update(city_params)
      redirect_to cities_url, notice: 'Cidade alterada com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /cities/1
  def destroy
    @city.destroy
    redirect_to cities_url, notice: 'Cidade removida com sucesso.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_city
      @city = City.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def city_params
      params.require(:city).permit(:name, :enabled, :soon, :picture, :country, :state)
    end
end
