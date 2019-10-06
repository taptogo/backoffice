require 'open-uri'
class WebservicesController <  ActionController::Base 
  before_action :check_user, :except => [
    :signin,
    :saleChannelSignin,
    :signup, 
    :forgotPass,
    :signinFacebook,
    :signinGoogle,
    :getCategories,
    :getCities,
    :updateInterests,
    :updateCity,
    :getOffers,
    :getDescriptions,
    :findOffer,
    :getPackages,
    :getReceipt,
    :getSaleChannelByStore,
    :createPurchaseOrder,
    :getDashboardData,
  ]

  def check_user
    if current_user.nil?
      render :json => {}, status: 401
      return
    end
  end



end
