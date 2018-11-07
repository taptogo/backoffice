class Webservices::OrdersController <  WebservicesController 

  api :GET, '/orders/getPendingOrders'
  formats ['json']
  error 401, "Usuário não logado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      [{
        "id": "599732bf3b8f5dfe64000003",
        "name": "Oferta De Happy Hour",
        "status": "Pendente",
        "date": "11/11/1990 10:00",
        "quantity": 10,
        "amount": 100.0
      }]
    EOS

  def getPendingOrders
     render :json => Order.mapOrders(Order.pending(current_user.id))
  end

  api :GET, '/orders/passbook'
  formats ['json']
  param :order_id, String, :required => false
  error 401, "Usuário não logado"
  error 500, "Erro desconhecido"

  def passbook

    @order = Order.find(params[:order_id])


    passJson = '{
    "formatVersion": 1,
    "passTypeIdentifier": "pass.com.Mobile2you.TapToGo",
    "serialNumber": "1",
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
          "label": "' + @order.package.offer.name + '",
          "value": "TapToGo"
        }
      ],
      "secondaryFields": [
        {
          "label": "Data de Utilização",
          "value": "' + @order.package.name + '",
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
    send_data pkpass.string, type: 'application/vnd.apple.pkpass', disposition: 'attachment', filename: "pass.pkpass"


    # send_file(
    #   "#{Rails.root}/veio.pkpass",
    #   filename: "veio.pkpass",
    #   type: "application/vnd.apple.pkpass"
    # )
  end

  api :GET, '/orders/getOrders'
  formats ['json']
  error 401, "Usuário não logado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      [{
        "id": "599732bf3b8f5dfe64000003",
        "name": "Oferta De Happy Hour",
        "status": "Pendente",
        "date": "11/11/1990 10:00",
        "quantity": 10,
        "amount": 100.0
      }]
    EOS

  def getOrders
     render :json => Order.mapOrders(current_user.orders.des(:createOrder))
  end

  api :GET, '/orders/getFinishedOrders'
  formats ['json']
  error 401, "Usuário não logado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      [{
        "id": "599732bf3b8f5dfe64000003",
        "name": "Oferta De Happy Hour",
        "status": "Pendente",
        "date": "11/11/1990 10:00",
        "quantity": 10,
        "amount": 100.0
      }]
    EOS

  def getFinishedOrders
     render :json => Order.mapOrders(Order.finished(current_user.id))
  end

  api :GET, '/orders/checkCoupon'
  param :coupon, String, :required => false
  formats ['json']
  error 401, "Usuário não logado"
  error 404, "Cupom não encontrado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      {
        "id": "599732bf3b8f5dfe64000003",
        "name": "CAIO1234",
        "discount": 0.10

      }
    EOS

  def checkCoupon
     render :json => {:id => "323232", :name => params[:coupon], :discount => 0.1}
  end


  api :POST, '/orders/createOrder'
  param :package_id, String, required: true
  param :card_id, String, required: true
  param :coupon_id, String, :required => false
  param :quantity, :number, required: true
  formats ['json']
  error 401, "Usuário não logado"
  error 340, "Pedido não pode ser cancelado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      {
        "id": "599732bf3b8f5dfe64000003",
        "name": "Oferta De Happy Hour",
        "status": "Pendente",
        "date": "11/11/1990 10:00",
        "quantity": 10,
        "amount": 100.0
        "card" = {"id" : "3232", "brand" : "visa", "number" : "4141 **** **** 2121"}
      }
    EOS

  def createOrder
    o = Order.new
    o.package_id = params[:package_id]
    o.user = current_user
    o.card_id = params[:card_id]
    o.quantity = params[:quantity]
    o.coupon_id = params[:coupon_id]
    
    offer = o.package.offer
    partner = offer.partner
    percent = offer.percent

    o = chargePagarme(o,partner,percent)
    if o.transaction_id.nil?
      render :nothing => true, status: 340
    else
      i = Invite.where(:tap_id => current_user.id).first 
      credits = 0
      #usando o crédito de 20 reais
      if !i.nil?
        credits = i.credit
        if i.credit > 0 && !i.user.nil?
          sendPushCredit(i)
        end
        i.credit = 0
        i.save
      end
      o.credit = credits
      o.save
      render :json => Order.mapOrder(o)
    end
  end


  def sendPushCredit(invite)
    i =  Invite.new
    i.tap_id = invite.user.id
    i.save
  end

  api :DELETE, '/orders/cancel'
  param :order_id, String
  formats ['json']
  error 401, "Usuário não logado"
  error 340, "Pedido não pode ser cancelado"
  error 500, "Erro desconhecido"
  description <<-EOS
    == Response
      {}
    EOS

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
    phone = order.card.phone.gsub("(", "").gsub(")", "").gsub("-", "").gsub(" ", "")


    if partner.nil? || partner.recipient_id.nil?
      transaction = PagarMe::Transaction.new({
        :amount => ((order.package.price * order.quantity) * 100).to_i,
        :card => PagarMe::Card.find_by_id(order.card.token),
        customer: {
                    name: current_user.name,
                    email: current_user.email,
                    document_number: order.card.cpf.gsub(".", "").gsub("-", ""),
                    address: {
                      :street => order.card.street,
                      :street_number => "n/a",
                      :neighborhood => order.card.neighborhood,
                      :zipcode => order.card.zip 
                      },
                    phone: {
                      :ddd => phone[0,2],
                      :number => phone[3,phone.length - 1]
                    }

                  }
      })
      else
        transaction = PagarMe::Transaction.new({
            :amount => ((order.package.price * order.quantity) * 100).to_i,
            :card => PagarMe::Card.find_by_id(order.card.token),
            customer: {
                        name: current_user.name,
                        email: current_user.email,
                        document_number: order.card.cpf.gsub(".", "").gsub("-", ""),
                        address: {
                          :street => order.card.street,
                          :street_number => "n/a",
                          :neighborhood => order.card.neighborhood,
                          :zipcode => order.card.zip 
                          },
                        phone: {
                          :ddd => phone[0,2],
                          :number => phone[3,phone.length - 1]
                        }

                      },

            split_rules: [
                  { recipient_id: partner.recipient_id, percentage: (percent * 100).round(0)
        #            {recipient_id: p.recipient_id, percentage: (o.service.transfer_percent)
                   }]
          })
      end

      transaction.charge
      if transaction.status != "refused" && !transaction.id.to_s.nil?
          order.transaction_id = transaction.id.to_s
      end
      order

  end

end