class Code
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :coupon_name, type: String
  field :type, type: String
  field :description, type: String
  field :discount, type: Float
  field :max_quantity, type: Integer, :default => 999
  field :enabled, type: Boolean, :default => true
  field :from, type: Time
  field :to, type: Time
  field :from_plain, type: String
  field :to_plain, type: String


  belongs_to :user 
  belongs_to :coupon 


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


end
