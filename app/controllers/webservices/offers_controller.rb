class Webservices::OffersController < WebservicesController
  def getCategories
    key = 'tap_categories'
    value = Redisaux::Aux.checkKey(key)
    if !params[:offer_id].nil?
      json = Category.mapCategories(Category.where(offer_ids: params[:offer_id], enabled: true).asc(:position), current_user)
      render json: json
    elsif value.nil? || value.to_s.length < 10
      json = Category.mapCategories(Category.availableCategories, current_user)
      Redisaux::Aux.set(key, json)
      render json: json
    else
      value = JSON.parse(value)
      categories = []
      current_user&.categories&.each do |c|
        categories << c.id.to_s
      end
      value.each do |json|
        json['selected'] = current_user.nil? ? false : categories.include?(json['id'].to_s)
      end
      render json: value
    end
  end

  def getCities
    key = 'tap_cities'
    value = Redisaux::Aux.checkKey(key)
    if value.nil? || value.to_s.length < 10
      json = City.mapCities(City.availableCities, current_user)
      Redisaux::Aux.set(key, json)
      render json: json
    else
      value = JSON.parse(value)
      value.each do |json|
        json['selected'] = !current_user.nil? && !current_user.city.nil? && current_user.city.id.to_s == json['id'].to_s
      end
      render json: value
    end
  end

  def getOffers
    # ddd
    params[:city_id] = current_user.city_id if params[:city_id].nil?

    categories = [params[:category_id]] if params[:category_id].nil?

    categories = if !params[:categories].nil?
                   params[:categories]
                 else
                   Category.availableCategories.distinct(:id)
                 end

    if categories.nil? || categories.count == 0
      categories = Category.availableCategories.distinct(:id)
     end
    render json: Offer.mapOffers(Offer.availableOffers(params[:city_id], categories), current_user)
  end

  def getFavorites
    ids = current_user.favorites.distinct(:offer_id)
    render json: Offer.mapOffers(Offer.where(:id.in => ids, :enabled => true), current_user)
  end

  def findOffer
    render json: Offer.mapOffers(Offer.where(id: params[:id]), current_user).first
  end

  def getDescriptions
    key = 'tap_descriptions' + params[:offer_id]
    value = Redisaux::Aux.checkKey(key)
    if value.nil? || value.to_s.length < 10
      json = Description.mapDescriptions(Description.availableDescriptions(params[:offer_id]), Offer.find(params[:offer_id]).policy)
      Redisaux::Aux.set(key, json)
      render json: json
    else
      render json: value
    end
  end

  def getPackages
    raw = []
    @packages = Package.availablePackages(params[:offer_id])
    @dates = @packages.asc(:date).group_by(&:date)
    @dates.keys.sort.each do |key|
      raw << {
        id: 'fake',
        offer_id: params[:offer_id],
        price: 0,
        date: I18n.l(key, format: '%a-%d %b').gsub('á', 'a'),
        hours: Package.mapPackages(@dates[key]).reject { |i| i[:quantity].blank? || i[:quantity].to_i < 0 }.sort_by { |hsh| hsh[:hour] }
      }
    end
    render json: raw.reject { |i| i[:hours].blank? || i[:hours].count <= 0 }
  end

  def like
    store = Offer.find(params[:offer_id].to_s)
    if store.nil?
      render nothing: true, status: 340
    else
      current_user.favorites.where(offer_id: params[:offer_id].to_s).destroy_all
      f = Favorite.new
      f.user = current_user
      f.offer = store
      f.save
      render json: {}
    end
  end

  def unlike
    store = Offer.find(params[:offer_id].to_s)
    if store.nil?
      render nothing: true, status: 340
    else
      current_user.favorites.where(offer_id: params[:offer_id].to_s).destroy_all
      render json: {}
    end
  end
end
