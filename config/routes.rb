Rails.application.routes.draw do

  resources :notifications
  resources :banners
  resources :faqs
  resources :cities
  resources :categories
  resources :policies
  resources :partners
  resources :accounts
  resources :packages
  resources :coupons

  resources :descriptions

  devise_for :users

  resources :app_users do
    collection do
      get :lock
      get :unlock
      get :reset_pass
    end
  end
  resources :super_admins do
      collection do
      get :reset_pass
    end
  end

  resources :orders do
      collection do
      get :confirm
      get :cancel
    end
  end

  resources :managers do
      collection do
      get :reset_pass
    end
  end
  resources :sellers do
      collection do
      get :reset_pass
    end
  end

  resources :offers do
    collection do
      get :calendar
      post :update_price
      post :update_price_mass
      post :create_mass
    end
  end

  resources :charts do
      collection do
      get :points_pie
      get :points_bar
    end
  end

  get "token" => "token#index"
  get "home" => "home#index"
  post "calendar_home" => "home#calendar_home"
  get "calendar_home" => "home#calendar_home"
  get "agenda" => "home#agenda"
  get "calendar" => "offers#calendar"
  post "create_mass" => "offers#create_mass"
  post "update_mass" => "offers#update_price_mass"

  root :to => "home#index"

  namespace :api do
    get "accounts"
  end

  namespace :webservices do
    post "login/signin"
    post "login/signinFacebook"
    post "login/signup"
    post "login/forgotPass"
    post "account/updatePassword"
    post "account/addCard"
    post "account/createAddress"
    get "account/cards"
    get "account/getAbout"
    get "account/getAddresses"
    get "account/getFaq"
    get "account/getNotifications"
    delete "account/deleteNotification"
    delete "account/removeCard"
    post "account/updatePhoto"
    put "account/updateAbout"
    delete "account/deleteCard"
    delete "account/deleteAddress"
    put "account/updateInterests"
    put "account/updateCity"
    post "account/registerToken"
    delete "account/removeToken"

    get "account/getCredits"
    post "account/inviteFriend"
    get "offers/getCategories"
    get "offers/getCities"
    get "offers/getOffers"
    post "offers/getOffers"
    get "offers/findOffer"
    get "offers/getDescriptions"
    get "offers/getPackages"
    post "offers/like"
    post "offers/unlike"

    get "sellers/getHistory"
    get "sellers/getPending"
    get "sellers/getUser"
    post "sellers/scan"

    get "orders/getPendingOrders"
    get "orders/getOrders"
    get "orders/passbook"
    get "orders/getFinishedOrders"
    post "orders/createOrder"
    delete "orders/cancel"
    get "orders/checkCoupon"
  end



end
