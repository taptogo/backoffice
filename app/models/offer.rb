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
    :storage => :s3, 
    :preserve_files => true,
    :s3_protocol => :https,
    :s3_region => 'us-east-1',
    :s3_host_name => 's3.amazonaws.com',
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
  belongs_to :policy, required: false
  has_many :orders, dependent: :destroy
  has_and_belongs_to_many :coupons 
  has_and_belongs_to_many :codes

 
  validates_attachment_content_type :picture, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  validates :name, :presence => {:message => "Digite um Nome"}
  validates :date_from_plain, :presence => {:message => "Digite uma Data"}
  validates :date_to_plain, :presence => {:message => "Digite uma Data"}
  # validates :price, :presence => {:message => "Digite um Preço"}


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

    key = "tap_descriptions" + self.id.to_s
    Redisaux::Aux.set(key, nil)
  end

  
  def self.mapOffers (array, user)
    array.map { |u| {
     :id => u.id.to_s,
     # :name => u.partner.nil? ? u.name : (u.partner.name.capitalize + " - " +  u.name),
     :name => u.name,
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

  def getFullName
    if self.partner.nil?
      self.name
    else
      self.partner.name + " - " + self.name
    end
  end

  def getTapPercent
    percent =  self.percent
    if !percent
      percent = self.partner.percent
    end
    percent ? (100 * percent).to_i : 10
  end



  def self.mapOfferID (array)
        arr = []
        array.each do |u|
         arr << [u.name, u.id.to_s]
        end
        arr
    end

end