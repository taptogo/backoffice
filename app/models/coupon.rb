class Coupon
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :type, type: String
  field :description, type: String
  field :discount, type: Float
  field :max_quantity, type: Integer, :default => 999
  field :enabled, type: Boolean, :default => true
  field :from, type: Time
  field :to, type: Time
  field :from_plain, type: String
  field :to_plain, type: String
  field :min_value, type: Float
  field :max_value, type: Float


  has_many :orders 
  has_and_belongs_to_many :offers 
  has_many :codes, :dependent => :destroy 

  before_save :checkParams

  validates :name, :presence => {:message => "Digite um Código"}, :uniqueness => {:message => "Código já utilizado"}
  validates :discount, :presence => {:message => "Digite um Desconto"}
  validates :from_plain, :presence => {:message => "Digite uma Data"}
  validates :to_plain, :presence => {:message => "Digite uma Data"}
  # validates :discount, :presence => true, :message => "Digite um desconto"


  def canAdd(params)
    can_add_from = true
    can_add_to = true
    can_add_offer = true
    can_add_quantity = true
    if !self.to.nil?
      can_add_to = Time.now < self.to
    end
    if !self.from.nil?
      can_add_from = Time.now > self.from
    end
    if !self.max_quantity.nil? && self.max_quantity > 0
      can_add_quantity = (self.orders.where(:temp.ne => true).count <= self.max_quantity)
    end
    if !params.nil? && !params[:offer].nil? && self.offers.count > 0
      offer_id = Package.where(:id => params[:offer]).distinct(:offer_id).first
      can_add_offer = !offer_id.blank?  && self.offer_ids.include?(offer_id)
    end


    can_add_from && can_add_quantity && can_add_to && can_add_offer
  end


  def checkParams
    self.name = self.name.upcase
    self.to = self.to_plain
    self.from = self.from_plain
    if self.type.to_i == 1
      if self.discount > 1
        self.discount = self.discount/100.0
      end
    end
  end


  def getDiscount(value)
    self.name = self.name.upcase
    if self.type.to_i == 1
      value * self.discount
      if self.discount > 1
        self.discount = self.discount/100.0
      end
    else
      self.discount
    end
  end



  def self.mapCoupon (u)
     {
       :id => u.id.to_s,
     :name => u.name,
     :discount => u.discount,
     :type => u.type
     }
  end


  def self.mapCoupons(array)
    array.map { |u| {
       :id => u.id.to_s,
       :name => u.name,
       :discount => u.discount,
       :desc => u.description,
       :type => u.type,
       :from => u.from.nil? ? "" : u.from.strftime("%d/%m/%Y %H:%M"),
       :to => u.to.nil? ? "" : u.to.strftime("%d/%m/%Y %H:%M")
       }}
  end


end
