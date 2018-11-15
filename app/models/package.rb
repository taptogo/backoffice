class Package
  include Mongoid::Document

  field :enabled, type: Boolean, default: true  
  field :capacity, type: Integer, default: 0  
  field :wDay, type: Integer, default: 0  
  field :total, type: Integer, default: 0  
  field :price, type: Float, default: 0  
  field :date, type: Time  
  field :name, type: String  
  field :hour, type: String  

  belongs_to :offer
  before_save :checkName
  has_many :orders, dependent: :destroy
  scope :availablePackages, -> (offer)  { where(:enabled => true, :offer_id => offer, :date.gt => Time.now).asc(:date) }


  def checkName
      self.name = self.offer.name
      self.name += " " + (self.date.nil? ? "" : self.date.strftime("%d/%m/%Y %H:%M"))
      self.total = self.capacity
  end

  def self.mapPackages (array)
    array.map { |u| {
     :id => u.id.to_s,
     :price => u.price,
     :date => u.date.nil? ? "" : u.date.strftime("%d/%m/%Y %H:%M")
     }}
  end

  def getDate
    self.date.strftime("%A") + " - " + self.date.strftime("%d/%m/%Y")
  end


end
