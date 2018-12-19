class HomeController < ApplicationController

	 
    def index
		@date  =   Time.now.in_time_zone("Brasilia").beginning_of_day - 10.days
		@dateEnd = Time.now.in_time_zone("Brasilia").end_of_day

		if params[:from]
			@date = params[:from].to_time.beginning_of_day 
		end

		if params[:to]
			@dateEnd = params[:to].to_time.end_of_day 
		end

		if current_user.isSuperAdmin?
			@users = User.where(:created_at => @date.in_time_zone("Brasilia")..@dateEnd.in_time_zone("Brasilia"), :_type.nin => ["SuperAdmin", "Manager", "Seller"]).count
			orders = Order.where(:created_at => @date.in_time_zone("Brasilia")..@dateEnd.in_time_zone("Brasilia")).distinct(:id)
		else
			offers = Package.where(:offer_id.in => current_user.partner.offers.distinct(:id)).distinct(:id)
			orders = Order.where(:created_at => @date.in_time_zone("Brasilia")..@dateEnd.in_time_zone("Brasilia"), :package_id.in => offers).distinct(:id)
		end
		@orders = orders.count
		@finished = Order.where(:id.in => orders, :status => "Confirmado").count
		@canceled = Order.where(:id.in => orders, :status => "Cancelado").count

	end



	def calendar_home
	    arr = []
	    if current_user.isSuperAdmin?
	    	@orders = Order.all
		else
			offers = Package.where(:offer_id.in => current_user.partner.offers.distinct(:id)).distinct(:id)
			@orders = Order.where(:package_id.in => offers)
		end
		@orders = @orders.where(:created_at.gte => Time.now - 5.months)
	    arr += Order.mapOrdersCalendar(@orders)

	    render :json => arr

	end

end