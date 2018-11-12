class HomeController < ApplicationController

	 
    def index
		@date  =   Time.now.in_time_zone("Brasilia").beginning_of_day - 10.days
		@dateEnd = Time.now.in_time_zone("Brasilia").end_of_day

		if params[:from]
			@date = params[:from].to_time.in_time_zone("Brasilia").beginning_of_day + 1.days
		end

		if params[:to]
			@dateEnd = params[:to].to_time.in_time_zone("Brasilia").end_of_day + 1.days
		end

		if current_user.isSuperAdmin?
			@users = User.where(:created_at => @date..@dateEnd, :_type.nin => ["SuperAdmin", "Manager", "Seller"]).count
			orders = Order.where(:created_at => @date..@dateEnd).distinct(:id)
		else
			offers = Package.where(:offer_id.in => current_user.partner.offers.distinct(:id)).distinct(:id)
			orders = Order.where(:created_at => @date..@dateEnd, :package_id.in => offers).distinct(:id)
		end
		@orders = orders.count
		@finished = Order.where(:id.in => orders, :status => "Finalizada").count
		@canceled = Order.where(:id.in => orders, :status => "Cancelada").count

	end



	def calendar_home
	    arr = []
	    if current_user.isSuperAdmin?
	    	@orders = Order.all
		else
			offers = Package.where(:offer_id.in => current_user.partner.offers.distinct(:id)).distinct(:id)
			@orders = Order.where(:package_id.in => offers)
		end

	    arr += Order.mapOrdersCalendar(@orders)

	    render :json => arr

	end

end