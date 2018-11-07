      # data = { :alert => "\uD83C\uDF55 Tudo certo com o seu pedido? Não esqueça de nos deixar uma avaliação", sound:  "default", badge: 1, order_id: order.id, :customer_id => order.user.id}
      # pushQ = Parse::Push.new(data)
      # query = Parse::Query.new(Parse::Protocol::CLASS_INSTALLATION).eq("customer_id", user.id)
      # pushQ.where = query.where
      # n.fireDate = DateTime.now + 2.hours
      # #pushQ.save
desc "Send push rake"
task send_push: :environment do
	Notification.where(:seen => false, :fireDate.lte => DateTime.now).each do |n|
		begin
			n.sendPush
			n.save
		rescue
		end
	end

end