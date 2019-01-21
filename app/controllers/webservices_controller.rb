require 'open-uri'
class WebservicesController <  ActionController::Base 
  before_action :check_user, :except => [:signin, :signup, :forgotPass, :signinFacebook, :signinGoogle, :getCategories, :getCities, :updateInterests, :updateCity, :getOffers, :getDescriptions]

  def check_user
    if current_user.nil?
      render :nothing => true, status: 401
      return
    end
  end



end
