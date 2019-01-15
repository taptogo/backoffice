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
  scope :availablePackages, -> (offer)  { where(:enabled.ne => false, :offer_id => offer, :date.gt => Time.now, :date.lte => (Time.now + 2.months)).asc(:date) }


  def checkName
      self.name = self.offer.name
      self.name += " " + (self.date.nil? ? "" : self.date.strftime("%d/%m/%Y %H:%M"))
      self.total = self.capacity
  end

  def self.mapPackages (array)
    array.map { |u| {
     :id => u.id.to_s,
     :price => u.price,
     :hour => u.hour,
     :quantity => u.capacity,
     :date => I18n.l(u.date, :format => "%a %d %b").gsub("á", "a")
     }}
  end

  def getDate
    self.date.strftime("%A") + " - " + self.date.strftime("%d/%m/%Y")
  end

  def getDateFull
    self.date.strftime("%d/%m/%Y") + " " + self.hour
  end

  def getCalendarDateFull
    begin
      (self.date.strftime("%d/%m/%Y") + " " + self.hour).to_time
    rescue
      (self.date.strftime("%d/%m/%Y") + " 00:00").to_time
    end
  end

  def getFullName
    if self.offer.nil?
      ""
    else
      self.offer.getFullName
    end
  end

end
