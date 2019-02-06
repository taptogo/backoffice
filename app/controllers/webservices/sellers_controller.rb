class Webservices::SellersController <  WebservicesController 

  def getHistory
    offers = current_user.isSuperAdmin? ? Offer.all.distinct(:id) : current_user.partner.offers.distinct(:id)
    packages = Package.where(:offer_id.in => offers).distinct(:id)
    render :json => Order.mapOrdersSeller(Order.where(:package_id.in => packages, :status => 4))
  end



  def getPending
    offers = current_user.isSuperAdmin? ? Offer.all.distinct(:id) : current_user.partner.offers.distinct(:id)
    packages = Package.where(:offer_id.in => offers).distinct(:id)
    render :json => Order.mapOrdersSeller(Order.where(:package_id.in => packages, :status => 1))
  end


  def getUser
      o = Order.find(params[:order_id])
      render :json => User.mapUserSeller(o.user)
  end


  # api :POST, '/sellers/scan'
  # formats ['json']
  # param :qrcode, String
  # error 401, "Usuário não logado"
  # error 500, "Erro desconhecido"
  # description <<-EOS
  #   == Status
  #   1 - valid (testCase: 599732bf3b8f5dfe64000003)
  #   2 - expired (testCase: 699732bf3b8f5dfe64000003)
  #   3 - invalid (testCase: 799732bf3b8f5dfe64000003)
  #   4 - validated (testCase: 899732bf3b8f5dfe64000003)
  #   == Response
  #     {
  #       "status": 1,
  #       "order" : {
  #         "id": "599732bf3b8f5dfe64000003",
  #         "name": "Oferta De Happy Hour",
  #         "customer": "Caio Lopes",
  #         "date": "11/11/1990 10:00",
  #         "quantity": 10
  #       }
  #     }
  #   EOS

  def scan
    offers = current_user.isSuperAdmin? ? Offer.all.distinct(:id) : current_user.partner.offers.distinct(:id)
    packages = Package.where(:offer_id.in => offers).distinct(:id)
    @order = Order.where(:id => params[:qrcode], :package_id.in => packages).first

    status = 3

    if !@order.nil? 
      status = 3
    elsif !@order.nil? && (@order.read || @order.package.date > Time.now.beginning_of_day)
      status = 4
    elsif !@order.nil?
      @order.status = 4
      @order.read
      @order.save
      status = 1
    end
    render :json => {:status => status, :order => (status == 1 ? Order.mapOrdersSeller([@order]).first : nil) }
  end



end