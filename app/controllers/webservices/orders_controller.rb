class Webservices::OrdersController <  WebservicesController 

  def getReceipt
    receiptData = JSON.parse(CGI::unescape(params[:receipt]))

    pdf_html = ActionController::Base.new.render_to_string(
      template: 'orders/pdf',
      layout: 'invoicePdf',
      :locals => { :@receipt =>  receiptData}
    )
    pdf = WickedPdf.new.pdf_from_string(
      pdf_html,
      :type => "application/pdf",
      encoding: 'utf8',
      layout: 'invoicePdf',
      orientation: "Landscape",
      page_size: 'A4',
      lowquality: true,
      zoom: 1,
      dpi: 75,
      )
    send_data(
      pdf,
      filename: 'recibo.pdf',
      type: 'application/pdf',
      disposition: 'attachment'
    )
  end


  def passbook

    @order = Order.find(params[:order_id])


    passJson = '{
    "formatVersion": 1,
    "passTypeIdentifier": "pass.com.Mobile2you.TapToGo",
    "serialNumber": "' + @order.id.to_s + '",
    "teamIdentifier" : "A639RLSZU5",
    "organizationName" : "Mobile2you Tecnologia Ltda - ME",
    "description": "TaptoGo app",
    "logoText": "",
    "foregroundColor": "rgb(255,255,255)",
    "backgroundColor": "rgb(255, 86, 19)",
    "labelColor": "rgb(0, 0, 0)",
    "stripColor": "rgb(0,0,0)",
    "associatedStoreIdentifiers": [
    ],
    "associatedApps": [
      {
        "title": "TaptoGo"
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
          "value": "TaptoGo"
        }
      ],
      "secondaryFields": [
        {
          "label": "Data de Utilização",
          "value": "' + @order.package.getDateFull + '",
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
    send_data pkpass.string, type: 'application/vnd.apple.pkpass', disposition: 'attachment', filename: "pb_#{@order.id.to_s}.pkpass"


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

  def createPurchaseOrder
    begin
      orderData = JSON.parse(CGI::unescape(params[:order]))
      amount = orderData["total_amount"].to_i

      errors = []
      success = []
      successfulOrders = []
      orderData["orders"].each do |order|
        item = {
          id:         order["package_id"],
          title:      order["title"],
          unit_price: order["price"],
          quantity:   order["quantity"],
          tangible:   false,
        }

        p = Package.where(:id => order["package_id"]).first
        if p.nil? || p.capacity <= 0 || p.capacity < order["quantity"].to_i
          error = {:item  => item, :message => "Atividade lotada"}
          errors.push(error)
        else
          feedbackOrder = createOrderV2(order, orderData["paymentType"], orderData["creditCard"], orderData["customer"], orderData["billing"], item, orderData["store"])
          if feedbackOrder.key?(:error)
            errors.push(feedbackOrder[:error])
          elsif feedbackOrder.key?(:success)
            success.push(feedbackOrder[:success])
            successfulOrders.push(order)
          end
        end
      end

      if successfulOrders.length > 0
        OrderNotifierMailer.send_order_email(
          orderData["email"],
          orderData["paymentType"],
          orderData["customer"]["name"],
          successfulOrders,
          amount,
          orderData["creditCard"]
        ).deliver_later
      end

      render :json => {
        :success => success,
        :errors => errors,
      }, status: 200
    rescue StandardError => error
      puts 'Create Purchase Order Error: ' + error.message
      Raven.capture_exception(error)
    end
  end

  def createOrder
    o = Order.new

    p = Package.where(:id => params[:package_id]).first
    if p.nil? || p.capacity <= 0 || p.capacity < params[:quantity].to_i
      render :json => {:message => "Atividade lotada"}, status: 400
      return
    end

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

  # partner, percent - inuteis
  def chargePagarme(order, partner, percent)
    if order.package.price <= 0
      order.transaction_id = "gratuito"
      return order
    elsif order.getAmount <= 0
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

  private
    def createOrderV2(order, paymentType, creditCard, customer, billing, item, store)
      begin
        o = Order.new
        o.package_id = order["package_id"]
        #o.user = nil
        #o.card_id = params[:card_id]
        o.quantity = order["quantity"]
        #o.code_id = params[:coupon_id]
        #code = nil
        #if !o.code_id.nil?
        #  code = Code.find(o.code_id)
        #  code.enabled = false
        #  o.discount = code.current_value
        #end


        o.user = createUser(customer)
        o.traveler_observations = order["travelerObservations"]

        o.sale_channel = SaleChannel.where(:store => store).first

        o = chargePagarmeMarketplace(o, paymentType, creditCard, customer, billing, item)

        if o.transaction_id.nil? || o.transaction_id.empty?
          item = {
            id:         order["package_id"],
            title:      order["title"],
            unit_price: order["price"],
            quantity:   order["quantity"],
            tangible:   false,
          }
          customerData = getCustomerData(customer)
          return {
            error: {:item  => item, :customer => customerData, :message => "Erro na transação"}
          }
        else
        #  if code
        #    code.save
        #  end
          if !o.save(validate: false)
            # Add sentry log
          end
          send_order_to_partner_email(o, customer, order, order["quantity"])
          if !o.sale_channel.nil?
            send_order_to_sale_channel_email(
              o.sale_channel.email,
              o,
              order
            )
          end
          return {success: Order.mapOrder(o)}
        end
      rescue StandardError => error
        puts 'Create Order Error: ' + error.message
        Raven.capture_exception(error)
      end
    end

    def send_order_to_partner_email(order, customer, orderRequestData, quantity)
      begin
        partner_name          = order.package.offer.partner.name
        buyer_name            = customer["name"]
        experience_title      = orderRequestData["title"]
        book_date             = orderRequestData["receiptDate"]
        book_hour             = orderRequestData["hour"]
        order_price           = orderRequestData["price"]
        order_amount          = orderRequestData["amount"].to_s.sub(/\.?0+$/, '')
        traveler_observations = orderRequestData["travelerObservations"]
        email_to              = order.package.offer.partner.email

        meeting_point = nil
        if orderRequestData["fixedMeetingPoint"] == false
          meeting_point = orderRequestData["flexMeetingPoint"]["value"]
        else
          meeting_point = "#{orderRequestData["meetingPoint"]["street"]}, #{orderRequestData["meetingPoint"]["number"]} - #{orderRequestData["meetingPoint"]["neighborhood"]}, #{orderRequestData["meetingPoint"]["city"]} - #{orderRequestData["meetingPoint"]["state"]}, #{orderRequestData["meetingPoint"]["zip"]}"
        end
        OrderNotifierMailer.send_order_to_partner_email(
          email_to,
          partner_name,
          buyer_name,
          experience_title,
          book_date,
          book_hour,
          order_price,
          order_amount,
          meeting_point,
          quantity,
          traveler_observations
        ).deliver_later
      rescue StandardError => error
        puts 'Partner Email Error: ' + error.message
        Raven.capture_exception(error)
      end
    end

    def send_order_to_sale_channel_email(
      sale_channel_email,
      order,
      orderRequestData
    )
      begin
        comission_fee       = order.package.offer.sale_channel_comission
        price               = order.package.price
        comission_amount    = (price * comission_fee).to_f.round(2).to_s.sub(/\.?0+$/, '')
        title               = orderRequestData["title"]

        OrderNotifierMailer.send_order_to_sale_channel_email(
          sale_channel_email,
          title,
          comission_amount
        ).deliver_later
      rescue StandardError => error
        puts 'Sale Channel Email Error: ' + error.message
        Raven.capture_exception(error)
      end
    end

    def chargePagarmeMarketplace(order, paymentType, creditCard, customer, billing, item)
      begin
        puts 'Valor: ' + ((order.getAmount) * 100).to_s
        puts 'Tipo de pagamento: ' + paymentType
        if order.package.price <= 0
          order.transaction_id = "gratuito"
          return order
        elsif order.getAmount <= 0
          order.transaction_id = "gratuito"
          return order
        elsif paymentType == "cash"
          order.transaction_id = "cash"
          return order
        end

        card_expiration_date = creditCard["expirationMonth"] + creditCard["expirationYear"].split(//).last(2).join

        transaction = PagarMe::Transaction.new({
          amount:               ((order.getAmount) * 100).to_i,
          payment_method:       "credit_card",
          card_number:          creditCard["number"].gsub(/\s+/,""),
          card_holder_name:     creditCard["name"],
          card_expiration_date: card_expiration_date,
          card_cvv:             creditCard["cvv"],
          customer:             getCustomerData(customer),
          billing:              getBillingData(billing),
          items:                [item],
          split_rules:          getSplitRules(order),
        })

        transaction.charge
        if transaction.status != "refused" && !transaction.id.to_s.nil?
            puts 'Transaction ID: ' + transaction.id.to_s
            order.transaction_id = transaction.id.to_s
        end

        puts 'Transactions status: ' + transaction.status

        return order
      rescue StandardError => error
        puts 'Error: ' + error.message
        Raven.capture_exception(error)
        return order
      end
    end

    def getSplitRules(order)
      split_rules = []

      taptogo_account = ENV["TAPTOGO_RECIPIENT_ID"]
      offer = order.package.offer
      partner_percent = offer.getTapPercent
      partner_accounts = offer.accounts.where(:recipient_id.ne => nil)

      sale_channel_percent = 0
      sale_channel_accounts = []
      if !order.sale_channel.nil?
        sale_channel_accounts = order.sale_channel.accounts.where(:recipient_id.ne => nil)
        sale_channel_percent = offer.getSaleChannelPercent()
      end

      if partner_accounts.count == 0
        split_rules = [{ recipient_id: taptogo_account, percentage: 100 }]
      else
        split_rules << { recipient_id: taptogo_account, percentage: 100 - (partner_percent + sale_channel_percent) }

        partner_accounts.each do |account|
          split_rules << { recipient_id: account.recipient_id, percentage: (partner_percent)/partner_accounts.count }
        end

        sale_channel_accounts.each do |account|
          split_rules << { recipient_id: account.recipient_id, percentage: (sale_channel_percent)/sale_channel_accounts.count }
        end
      end

      return split_rules
    end

    def getCustomerData(customer)
      document = {}
      if !customer["cpf"].nil? && !customer["cpf"].empty?
        document = {
          :type   => "cpf",
          :number => customer["cpf"]
        }
      elsif !customer["passport"].nil? && !customer["passport"].empty?
        document = {
          :type   => "passport",
          :number => customer["passport"]
        }
      end

      return {
        external_id: "no-id",
        name: customer["name"],
        type: "individual",
        country: customer["country"],
        email: customer["email"],
        documents: [
          document,
        ],
        phone_numbers: [
          "+#{customer["phone"].strip}",
        ],
      }
    end

    def getBillingData(billing)
      return {
        name: billing["name"],
        address: {
          country: billing["address"]["country"].downcase,
          state: billing["address"]["state"],
          city: billing["address"]["city"],
          neighborhood: billing["address"]["neighborhood"],
          street: billing["address"]["street"],
          street_number: billing["address"]["street_number"],
          zipcode: billing["address"]["zipcode"]
        }
      }
    end

    def createUser(customer)
      begin
        user = User.new
        user.email    = customer["email"]
        user.name     = customer["name"]
        user.cpf      = customer["cpf"]
        user.passport = customer["passport"]
        user.country  = customer["country"]
        user.phone    = "+#{customer["phone"].strip}"
        user.password = ENV["DEFAULT_PASSWORD"]
        user.fast_buy = true

        if user.save(validate: false)
          return user
        else
          return nil
        end
      rescue StandardError => error
        puts 'Create User Error: ' + error.message
        return nil
      end
    end
end