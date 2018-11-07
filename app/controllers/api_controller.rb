class ApiController <  ActionController::Base 
  before_action :check_user, :except => [:signin, :signup, :forgotPass, :signinFacebook, :checkAccount, :confirm, :cancel, :calculate, :coupons, :checkCoupon, :multiplus2, :multiplus3, :consultarlote3, :signinCPF, :checkEmail, :checkCPF, :getFaq]
 
  def check_user
    if current_user.nil?
      render :json => {:message => "Faça seu login antes de continuar"}, status: 401
      return
    end
  end

  def accounts
  	render :json => Offer.mapOfferID(Account.where(:partner_id => params[:id]).asc(:name))
  end
  
end
