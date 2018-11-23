class Code
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :coupon_name, type: String
  field :type, type: String
  field :description, type: String
  field :discount, type: Float
  field :min_value, type: Float
  field :max_value, type: Float
  field :current_value, type: Float
  field :max_quantity, type: Integer, :default => 999
  field :enabled, type: Boolean, :default => true
  field :from, type: Time
  field :to, type: Time
  field :from_plain, type: String
  field :to_plain, type: String


  belongs_to :user 
  belongs_to :coupon 
  has_and_belongs_to_many :offers

  def self.mapCodes(array)
    array.map { |u| {
       :id => u.id.to_s,
       :name => u.name,
       :discount => u.discount,
       :desc => u.description,
       :enabled => u.enabled,
       :type => u.type,
       :from => u.from.nil? ? "" : u.from.strftime("%d/%m/%Y %H:%M"),
       :to => u.to.nil? ? "" : u.to.strftime("%d/%m/%Y %H:%M")
       }}
  end

  def getDiscount(price)
    min_value = self.min_value
    if self.min_value.nil?
      min_value = 0
    end

    if self.type.to_i == 0
      value = self.discount
      discount = [self.discount / price, 1].min.round(2)
    else
      discount = self.discount
      value = price * self.discount
    end
      [price, value].min
  end

end
