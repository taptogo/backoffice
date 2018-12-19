class ChartsController < ApplicationController

     


  def points_pie
    user = current_user
    if user.isSuperAdmin?
      @source = Offer.all 
    else
      @source = user.partner.offers
      # @source = Order.where(:schedule_id.in => Schedule.where(:experience_id.in => user.company.experiences.distinct(:id)).distinct(:id))
    end

    if !params[:from].nil?
      from = params[:from].to_time.in_time_zone("Brasilia").beginning_of_day 
    else
      from = DateTime.now
    end

    if !params[:to].nil?
      to = params[:to].to_time.in_time_zone("Brasilia").end_of_day 
    else
      to = DateTime.now
    end

  raw = {}
  @source.each do |source|

   name = source.name
   @orders = Order.where(:created_at => from..to, :package_id.in => source.packages.distinct(:id))
    if @orders.count == 0
      next
    end
    if !raw.keys.include?(name)
     raw[name] = 0
    end
    raw[name] += @orders.count
  end

    render json: raw
  end


  def points_bar

    user = current_user
    if user.isSuperAdmin?
      @source = Offer.all 
    else
      @source = user.partner.offers
      # @source = Order.where(:schedule_id.in => Schedule.where(:experience_id.in => user.company.experiences.distinct(:id)).distinct(:id))
    end
    if !params[:from].nil?
      from = params[:from].to_time.in_time_zone("Brasilia").beginning_of_day 
    else
      from = DateTime.now
    end

    if !params[:to].nil?
      to = params[:to].to_time.in_time_zone("Brasilia").end_of_day 
    else
      to = DateTime.now
    end



   @orders = Order.where(:created_at => from..to, :package_id.in => Package.where(:offer_id.in => @source.distinct(:id)).distinct(:id))


    raw = []

    total = {}
    @dates = @orders.asc(:created_at).group_by{|x| x.created_at.strftime("%d/%m")}
    @dates.keys.sort.each do |key|
      ekkos = 0
      ekkos_plus = 0
      amount = 0

      @dates[key].each do |c|
          amount += (c.quantity * c.amount.round(2))
      end
      total[key] = amount
    end
    raw << {name: "Total", data: total}

    render json: raw
  end

end
