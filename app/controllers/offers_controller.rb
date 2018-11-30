class OffersController < ApplicationController
  before_action :set_offer, only: [:show, :edit, :update, :destroy]
  before_action :check_super_admin, except: [:calendar, :update_price, :update_all, :update_price_mass, :create_mass]

  # GET /offers
  def index
    respond_to do |format|
      format.html 
      format.json { render json: OffersDatatable.new(view_context, current_user, params[:partner], params[:category], params[:city]) }
    end    
  end

  # GET /offers/1
  def show
  end

  # GET /offers/new
  def new
    @offer = Offer.new
  end

  # GET /offers/1/edit
  def edit
    if @offer.price_plain.nil?
      @offer.price_plain = @offer.price
    end
    if !@offer.date_from.nil? && @offer.date_from_plain.blank?
      @offer.date_from_plain = @offer.date_from.strftime("%d/%m/%Y")
    end
    if !@offer.date_to.nil? && @offer.date_to_plain.blank?
      @offer.date_to_plain = @offer.date_to.strftime("%d/%m/%Y")
    end
  end


  # POST /offers
  def create
    @offer = Offer.new(offer_params)
    if @offer.save
      redirect_to offers_url, notice: 'Oferta criada com sucesso.'
    else
      render :new
    end
  end

  # PATCH/PUT /offers/1
  def update
    @offer.enabled = false
    if @offer.update(offer_params)
      redirect_to offers_url, notice: 'Oferta alterada com sucesso.'
    else
      render :edit
    end
  end

  # DELETE /offers/1
  def destroy
    @offer.destroy
    redirect_to offers_url, notice: 'Oferta removida com sucesso.'
  end



   
  def calendar
    @date  =   Time.now.in_time_zone("Brasilia").beginning_of_day 
    @dateEnd = Time.now.in_time_zone("Brasilia").end_of_day
    @offer = nil

    if !params[:offer_id].blank?
      @offer = Offer.find(params[:offer_id])
    end


    if !params[:from].nil?
      @date = params[:from].to_time.in_time_zone("Brasilia").beginning_of_day + 1.days
    elsif !@offer.nil?
      @date = @offer.from_date
    end

    if !params[:to].nil?
      @dateEnd = params[:to].to_time.in_time_zone("Brasilia").end_of_day + 1.days
    elsif !@offer.nil?
      @dateEnd = @offer.to_date
    end

  end


  def update_price
    c = Package.find(params[:id])
    c.price = params[:price]
    c.capacity = params[:quantity]
    c.save(validate: false)
    render :json => {}
  end


  def create_mass
    @offer = Offer.find(params[:offer_id]) 

    batch = []


    from = params[:from]
    to = params[:to]
    if from && to
      from = from.to_time.beginning_of_day
      to = to.to_time.end_of_day
    end
    while from < to
      should_add = true

      if params[:domingo].nil?  && from.wday == 0
        should_add = false
      end 
      if params[:segunda].nil? && from.wday == 1
        should_add = false
      end
      if params[:terca].nil? && from.wday == 2
        should_add = false
      end
      if params[:quarta].nil? && from.wday == 3
        should_add = false
      end
      if params[:quinta].nil? && from.wday == 4
        should_add = false
      end
      if params[:sexta].nil? && from.wday == 5
        should_add = false
      end
      if params[:sabado].nil? && from.wday == 6
        should_add = false
      end

      if should_add 
        json = {}
        json[:date] = from
        json[:name] = @offer.name
        json[:wDay] = from.wday
        json[:offer_id] = @offer.id
        json[:capacity] = params[:quantity]
        json[:hour] = params[:hour]
        json[:price] = params[:price].nil? ? 0 : params[:price].gsub(".", ",").to_f
        batch << json
      end

      from = from + 1.days
    end

    puts batch
    # Package.collection.insert_many(batch)
    batch.each do |row|
      Package.collection.insert_one(row)
    end 

    redirect_to({:controller=> :offers, :action => :calendar, :offer_id => params[:offer_id], to: params[:to], from: params[:from]}, :flash => { :notice_success => "Valores Criados com sucesso" })   

  end
  def update_price_mass
    candidates = Package.where(:offer_id => params[:offer_id]) 
    from = params[:from]
    to = params[:to]
    if from && to
      from = from.to_time.beginning_of_day
      to = to.to_time.end_of_day
      candidates = candidates.where(:date.gte => from, :date.lte => to)
    end
    week_days = []
    if !params[:domingo].nil?
      week_days << 0
    end
    if !params[:segunda].nil?
      week_days << 1
    end
    if !params[:terca].nil?
      week_days << 2
    end
    if !params[:quarta].nil?
      week_days << 3
    end
    if !params[:quinta].nil?
      week_days << 4
    end
    if !params[:sexta].nil?
      week_days << 5
    end
    if !params[:sabado].nil?
      week_days << 6
    end

    if params[:hour].blank?
      candidates = candidates.where(:wDay.in => week_days)
    else
      candidates = candidates.where(:wDay.in => week_days, :hour => params[:hour])
    end

    if !params[:value].nil?
      candidates.update_all(price: params[:value].gsub(".", ",").to_f)
    end

    if !params[:quantity].blank? && params[:quantity].to_i > 0
      candidates.update_all(capacity: params[:quantity])
    elsif !params[:quantity].blank? && params[:quantity].to_s == "0"
      candidates.destroy_all
    end
    

    redirect_to({:controller=> :offers, :action => :calendar, :offer_id => params[:offer_id], to: params[:to], from: params[:from]}, :flash => { :notice_success => "Valores Alterados com sucesso" })   


  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_offer
      @offer = Offer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def offer_params
      params.require(:offer).permit(:name, :position, :picture, :description, :enabled, :date_from_plain, :date_to_plain, :price_plain, :capacity, :percent, :partner, :policy, city_ids: [], category_ids: [], account_ids: [])
    end




end
