class Webservices::OffersController <  WebservicesController 

  api :GET, '/offers/getCategories'
  formats ['json']
  param :is_home, :bool, :desc => "pick_in_store", :required => false
  error 401, "Usuário não logado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      [{
        "id": "599732bf3b8f5dfe64000003",
        "name": "Aventura",
        "picture": "/pictures/original/missing.png"
      }]
    EOS


  def getCategories
    key = "tap_categories"
    value = Redisaux::Aux.checkKey(key)
    if value.nil? || value.to_s.length < 10
      json = Category.mapCategories(Category.availableCategories, current_user)
      Redisaux::Aux.set(key, json)
      render :json => json
    else
      render :json => value
    end
  end



  api :GET, '/offers/getCities'
  formats ['json']
  error 401, "Usuário não logado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      [{
        "id": "599732bf3b8f5dfe64000003",
        "name": "Osasco",
        "picture": "/pictures/original/missing.png"
      }]
    EOS


   def getCities
    key = "tap_cities"
    value = Redisaux::Aux.checkKey(key)
    if value.nil? || value.to_s.length < 10
      json = City.mapCities(City.availableCities, current_user)
      Redisaux::Aux.set(key, json)
      render :json => json
    else
      render :json => value
    end
  end

  api :GET, '/offers/getOffers'
  formats ['json']
  param :city_id, String, :required => false
  # param :category_id, String, :required => false
  error 401, "Usuário não logado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
    [{
      "id": "599b2b7c3b8f5d8dd1000010",
      "name": "kjdalkjda",
      "description": "",
      "price": 10.0,
      "url": "21",
      "liked": false,
      "categories": [{
        "id": "599732bf3b8f5dfe64000002",
        "name": "Gastronomia",
        "picture": "/pictures/original/missing.png"
      }, {
        "id": "599732bf3b8f5dfe64000004",
        "name": "Esportes",
        "picture": "/pictures/original/missing.png"
      }],
      "likes": [{
        "name": "Caio",
        "picture": "http://",
        "id": "32323"
      }],
      "picture": "/pictures/original/missing.png"
    }]
    EOS

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

  api :GET, '/offers/getDescriptions'
  formats ['json']
  param :offer_id, String, :required => true
  error 401, "Usuário não logado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
    [{
      "id": "599b30c73b8f5d8dd1000014",
      "title": "dadsadas",
      "message": "dsadsadsadasdsamdnsa nd andl kas"
    }]
    EOS

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

  api :GET, '/offers/getPackages'
  formats ['json']
  param :offer_id, String, :required => true
  error 401, "Usuário não logado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      [{
        "id": "599732bf3b8f5dfe64000003",
        "date": "18/01/1990 10:00"
      }]
    EOS

  def getPackages
     render :json => Package.mapPackages(Package.availablePackages(params[:offer_id]))
  end


  api :POST, '/offers/like'
  formats ['json']
  param :offer_id, String, :desc => "offer id", :required => true
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      {}
    EOS

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

  api :POST, '/offers/unlike'
  formats ['json']
  param :offer_id, String, :desc => "offer id", :required => true
  error 401, "Usuário não autenticado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      {}
    EOS

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