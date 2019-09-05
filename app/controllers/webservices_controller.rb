require 'open-uri'
class WebservicesController <  ActionController::Base 
  before_action :check_user, :except => [:signin, :signup, :forgotPass, :signinFacebook, :signinGoogle, :getCategories, :getCities, :updateInterests, :updateCity, :getOffers, :getDescriptions, :findOffer, :getPackages, :getReceipt, :getSaleChannel]

  def check_user
    if current_user.nil?
      render :json => {}, status: 401
      return
    end
  end



end
