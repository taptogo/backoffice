class Offer
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps
  # include Geocoder::Model::Mongoid

  field :enabled, type: Boolean, default: true  
  field :position, type: Integer, :default => 1
  field :capacity, type: Integer, :default => 1
  field :date_from, type: Time
  field :date_to, type: Time
  field :name, type: String
  field :code, type: String
  field :date_from_plain, type: String
  field :date_to_plain, type: String
  field :description, type: String
  field :url, type: String
  field :price, type: Float
  field :price_plain, type: String
  field :packages_plain, type: String
  field :percent, type: Float, default: 0.8  

  has_mongoid_attached_file :picture,
    :storage        => :s3,
    :bucket_name    => 'tap2gom2y',
    :bucket    => 'tap2gom2y',
    :path           => ':attachment/:id/:style.:extension',
    :s3_credentials => File.join(Rails.root, 'config', 's3.yml')

  has_mongoid_attached_file :picture2,
    :storage        => :s3,
    :bucket_name    => 'tap2gom2y',
    :bucket    => 'tap2gom2y',
    :path           => ':attachment/:id/:style.:extension',
    :s3_credentials => File.join(Rails.root, 'config', 's3.yml')

  has_mongoid_attached_file :picture3,
    :storage        => :s3,
    :bucket_name    => 'tap2gom2y',
    :bucket    => 'tap2gom2y',
    :path           => ':attachment/:id/:style.:extension',
    :s3_credentials => File.join(Rails.root, 'config', 's3.yml')
   
  has_and_belongs_to_many :cities
  has_and_belongs_to_many :categories
  has_and_belongs_to_many :accounts
  has_many :descriptions, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :packages, dependent: :destroy
  belongs_to :partner
  belongs_to :policy
  has_many :orders, dependent: :destroy
  has_and_belongs_to_many :coupons 

 

  validates :name, :presence => {:message => "Digite um Nome"}
  validates :date_from_plain, :presence => {:message => "Digite uma Data"}
  validates :date_to_plain, :presence => {:message => "Digite uma Data"}
  validates :price, :presence => {:message => "Digite um Preço"}


  # scope :availableCategories, ->(swX,swY,neX,neY) { where(:latitude.lte => neX, :latitude.gte => swX, :longitude.lte => neY, :longitude.gte => swY, :enabled => true) }
  scope :availableOffers, -> (city,category)  { where(:enabled => true, :city_ids.in => [city], :category_ids.in => category).asc(:position) }

  before_save :checkPackages

  def checkPackages
    if !self.price_plain.nil?
      self.price = self.price_plain.gsub(",", ".").to_f
    end
    self.date_from = self.date_from_plain
    self.date_to = self.date_to_plain
    
    if !self.percent.nil? && self.percent > 1
      self.percent = self.percent/100.0
    end

    not_found = self.packages.distinct(:id)
    self.packages_plain.gsub(",", ";").split(";").each do |pack|
      begin
        p = pack.to_datetime + 2.hours
        package = self.packages.where(:date => p).first
        if package.nil?
          package = Package.new
        end
        package.date = p
        package.capacity = self.capacity
        package.offer  = self
        package.price = self.price
        package.save
        not_found -= [package.id]
      rescue
      end
    end
    self.packages.where(:id.in => not_found).destroy_all

    if self.packages.count > 0
      self.date_from = self.packages.asc(:date).first.date
      self.date_to = self.packages.desc(:date).first.date
    elsif self.enabled
      self.enabled = false
    end

  end

  
  def self.mapOffers (array, user)
    array.map { |u| {
     :id => u.id.to_s,
     :name => u.partner.nil? ? u.name : (u.partner.name.capitalize + " - " +  u.name),
     :description => u.description,
     :price => u.price,
     :url => u.url,
     :liked => user.favorites.where(:offer_id => u.id.to_s).count > 0,
     :categories => Category.mapCategories(u.categories, user),
     :hashtag => u.categories.count == 0 ? "" : ("#" + u.categories.first.name.downcase),
     :likes => Favorite.mapFavorites(u.favorites),
     :picture => u.picture.url,
     }}
  end



  def self.mapOfferID (array)
        arr = []
        array.each do |u|
         arr << [u.name, u.id.to_s]
        end
        arr
    end

end