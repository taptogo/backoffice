class Webservices::OrdersController <  WebservicesController 




  def passbook

    @order = Order.find(params[:order_id])


    passJson = '{
    "formatVersion": 1,
    "passTypeIdentifier": "pass.com.Mobile2you.TapToGo",
    "serialNumber": "' + @order.id.to_s + '",
    "teamIdentifier" : "A639RLSZU5",
    "organizationName" : "Mobile2you Tecnologia Ltda - ME",
    "description": "Tap2go app",
    "logoText": "",
    "foregroundColor": "rgb(255,255,255)",
    "backgroundColor": "rgb(255, 86, 19)",
    "labelColor": "rgb(0, 0, 0)",
    "stripColor": "rgb(0,0,0)",
    "associatedStoreIdentifiers": [
    ],
    "associatedApps": [
      {
        "title": "TapToGo"
      }
    ],

    "barcode": {
      "message": "' + @order.id.to_s + '",
      "format": "PKBarcodeFormatQR",
      "messageEncoding": "iso-8859-1"
    },
    "coupon": {
      "primaryFields": [
        {
          "key": "offer",
          "label": "' + @order.package.offer.getFullName + '",
          "value": "TapToGo"
        }
      ],
      "secondaryFields": [
        {
          "label": "Data de Utilização",
          "value": "' + @order.package.getDate + '",
          "key": "expires"
        }
      ],
      "backFields": [
        {
          "label": "Como Utilizar",
          "value": "Apresente esse cupom ao estabelecimento no dia escolhido.",
          "key": "terms"
        }
      ]
      }
    }'
    

    pass = Passbook::PKPass.new passJson
    pass.addFiles ['logo.png', 'logo@2x.png', 'icon.png', 'icon@2x.png']
    pkpass = pass.stream
    send_data pkpass.string, type: 'application/vnd.apple.pkpass', disposition: 'attachment', filename: "pass_#{@order.id.to_s}.pkpass"


    # send_file(
    #   "#{Rails.root}/veio.pkpass",
    #   filename: "veio.pkpass",
    #   type: "application/vnd.apple.pkpass"
    # )
  end


  def getOrders
     render :json => Order.mapOrders(current_user.orders.desc(:createOrder))
  end


  def getPendingOrders
     render :json => Order.mapOrders(Order.finished(current_user.id))
  end

  def getFinishedOrders
     render :json => Order.mapOrders(Order.pending(current_user.id))
  end


  def checkCoupon

    if !params[:coupon].nil?
      coupon = params[:coupon].upcase
    else
      coupon = params[:code].upcase
    end


    user = User.any_of({:promocode => coupon, :enabled => true, :id.ne => current_user.id.to_s}).last
    couponmodel = Coupon.where(:enabled => true, :name => coupon).first
    
    if user.nil? && couponmodel.nil?
      render :json => {message: "Código não encontrado"}, status: 200
    elsif current_user.codes.where(:coupon_name => coupon).count > 0
      render :json => {:message => "Você já utilizou este cupom"}, status: 200
    elsif !user.nil? && current_user.orders.count > 0
      render :json => {:message => "Você não pode utilizar um código promocional"}, status: 200
      return
    elsif !user.nil?
      c = Code.new
      c.name = coupon
      c.coupon_name = coupon
      c.type = "R$"
      c.description = "Código Promocional"
      c.discount = 20.0
      c.from = Time.now
      c.to = Time.now + 30.days
      c.enabled = true
      c.user = current_user
      c.save(validate: false)

      i = Invite.new
      i.user = user
      i.name = current_user.name
      i.tap_id = current_user.id.to_s
      i.save


      render :json => Code.mapCodes([c]).first
      return
    elsif couponmodel.canAdd(params)
      c = Code.new
      c.name = coupon
      c.coupon_name = coupon
      c.coupon = couponmodel
      c.type = couponmodel.type
      c.description = couponmodel.description
      c.discount = couponmodel.discount
      c.from = Time.now
      c.to = couponmodel.to
      c.offers = couponmodel.offers
      c.min_value = couponmodel.min_value
      c.max_value = couponmodel.max_value
      c.enabled = true
      c.user = current_user
      
      if !params[:offer].nil?
        package = Package.find(params[:offer])
        offer = package.offer
        c.current_value = c.getDiscount(package.price * params[:quantity].to_i)
      end

      c.save(validate: false)
      if !c.current_value.nil?
        c.discount = c.current_value
      end
      render :json => Code.mapCodes([c]).first
      return
    else
      render :json => {message: "Código expirado"}, status: 200
      return
    end



  end



  def createOrder
    o = Order.new
    o.package_id = params[:package_id]
    o.user = current_user
    o.card_id = params[:card_id]
    o.quantity = params[:quantity]
    o.code_id = params[:coupon_id]
    code = nil
    if !o.code_id.nil?
      code = Code.find(o.code_id)
      code.enabled = false
      o.discount = code.current_value
    end

    offer = o.package.offer
    partner = offer.partner
    percent = offer.percent
    o = chargePagarme(o,partner,percent)
    if o.transaction_id.nil?
      render :json => {}, status: 340
    else
      if code
        code.save
      end
      o.save(validate: false)
      render :json => Order.mapOrder(o)
    end
  end


  def sendPushCredit(invite)
    i =  Invite.new
    i.tap_id = invite.user.id
    i.save
  end


  def cancel
    o = Order.find(params[:order_id])
    if o.status == 0
      render :json => {:message => "Pedido não pode ser cancelado"}, status: 340
    else
      o.status = -1
      o.save
      render :json => {}
    end
  end

  def chargePagarme(order, partner, percent)
    if order.package.price <= 0
      order.transaction_id = "gratuito"
      return order
    end

    phone = order.card.phone.gsub("(", "").gsub(")", "").gsub("-", "").gsub(" ", "")
    split_rules = []

    default_account = "re_cjpvd9on705eccj64srunmfz2"
    offer = order.package.offer
    default_percent = offer.getTapPercent
    accounts = offer.accounts.where(:recipient_id.ne => nil)
    if accounts.count == 0
      split_rules = [{ recipient_id: default_account, percentage: 100 }]
    else
      split_rules << { recipient_id: default_account, percentage: 100 - default_percent }
      accounts.each do |account|
        split_rules << { recipient_id: account.recipient_id, percentage: (default_percent)/accounts.count }
      end

    end





      transaction = PagarMe::Transaction.new({
          :amount => ((order.getAmount) * 100).to_i,
          :card => PagarMe::Card.find_by_id(order.card.token),
          customer: {
                      name: current_user.name,
                      email: current_user.email,
                      document_number: order.card.cpf.gsub(".", "").gsub("-", ""),
                      address: {
                        :street => order.card.street,
                        :street_number => "10",
                        :neighborhood => order.card.neighborhood,
                        :zipcode => order.card.zip 
                        },
                      phone: {
                        :ddd => phone[0,2],
                        :number => phone[3,phone.length - 1]
                      }

                    },

          split_rules: split_rules
               })

      puts transaction.to_s

      transaction.charge
      if transaction.status != "refused" && !transaction.id.to_s.nil?
          order.transaction_id = transaction.id.to_s
      end
      order

  end

end