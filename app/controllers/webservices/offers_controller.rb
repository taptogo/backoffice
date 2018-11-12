class Webservices::OffersController <  WebservicesController 



  def getCategories
    key = "tap_categories"
    value = Redisaux::Aux.checkKey(key)
    if value.nil? || value.to_s.length < 10
      json = Category.mapCategories(Category.availableCategories, current_user)
      Redisaux::Aux.set(key, json)
      render :json => json
    else
      value = JSON.parse(value)
      value.each do |json|
        json["selected"] = current_user.categories.distinct(:id).include?(json["id"].to_s)
      end
      render :json => value
    end
  end


   def getCities
    key = "tap_cities"
    value = Redisaux::Aux.checkKey(key)
    if value.nil? || value.to_s.length < 10
      json = City.mapCities(City.availableCities, current_user)
      Redisaux::Aux.set(key, json)
      render :json => json
    else
      value = JSON.parse(value)
      value.each do |json|
        json["selected"] = !current_user.city.nil? && current_user.city.id.to_s == json["id"].to_s
      end            
      render :json => value
    end
  end


  def getOffers
     # ddd
     if params[:city_id].nil?
        params[:city_id] = current_user.city_id
     end
     
     if params[:category_id].nil?
        categories = [params[:category_id]]
     end

     puts params


     if !params[:categories].nil?
        categories = params[:categories]
     else
        categories = Category.availableCategories.distinct(:id)
     end

     if categories.nil? || categories.count == 0
        categories = Category.availableCategories.distinct(:id)
      end
     render :json => Offer.mapOffers(Offer.availableOffers(params[:city_id], categories), current_user)
  end


  def getDescriptions
    key = "tap_descriptions" + params[:offer_id]
    value = Redisaux::Aux.checkKey(key)
    if value.nil? || value.to_s.length < 10
      json = Description.mapDescriptions(Description.availableDescriptions(params[:offer_id]))
      Redisaux::Aux.set(key, json)
      render :json => json
    else
      render :json => value
    end
  end


  def getPackages
     render :json => Package.mapPackages(Package.availablePackages(params[:offer_id]))
  end



  def like
    store = Offer.find(params[:offer_id].to_s)
    if store.nil?
      render :nothing => true, status: 340
    else
      current_user.favorites.where(:offer_id => params[:offer_id].to_s).destroy_all
      f = Favorite.new
      f.user = current_user
      f.offer = store
      f.save
      render :json => {}
    end  

  end

  def unlike
    store = Offer.find(params[:offer_id].to_s)
    if store.nil?
      render :nothing => true, status: 340
    else
      current_user.favorites.where(:offer_id => params[:offer_id].to_s).destroy_all
      render :json => {}
    end  

  end

end