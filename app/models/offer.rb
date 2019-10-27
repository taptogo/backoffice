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
  field :sale_channel_comission, type: Float
  field :accepts_cash_transactions, type: Boolean, default: false

  field :street, type: String
  field :neighborhood, type: String
  field :number, type: String
  field :zip, type: String
  field :city, type: String
  field :state, type: String
  field :complement, type: String
  field :country, type: String
  field :latitude, :type => Float
  field :longitude, :type => Float

  field :meetingPointStreet, type: String
  field :meetingPointNeighborhood, type: String
  field :meetingPointNumber, type: String
  field :meetingPointZip, type: String
  field :meetingPointCity, type: String
  field :meetingPointState, type: String
  field :meetingPointComplement, type: String
  field :meetingPointCountry, type: String
  field :meetingPointLatitude, :type => Float
  field :meetingPointLongitude, :type => Float
  field :fixedMeetingPoint, :type => Boolean, default: false

  field :notes, :type => String

  has_mongoid_attached_file :picture,
    :storage => :s3, 
    :preserve_files => true,
    :s3_protocol => :https,
    :s3_region => 'us-east-1',
    :s3_host_name => 's3.amazonaws.com',
    :bucket_name    => 'taptogo-images',
    :bucket    => 'taptogo-images',
    :path           => ':attachment/:id/:style.:extension',
    :s3_credentials => File.join(Rails.root, 'config', 's3.yml')

  has_and_belongs_to_many :cities, index: true
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
  validates :sale_channel_comission, :presence => {:message => "Informe a comissão do canal de venda"}
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

    if !self.sale_channel_comission.nil? && self.sale_channel_comission > 1
      self.sale_channel_comission = self.sale_channel_comission/100.0
    end

    not_found = self.packages.distinct(:id)

    key = "tap_descriptions" + self.id.to_s
    Redisaux::Aux.set(key, nil)
  end

  def self.mapOffers (array, user)
    array.map { |u|
      rawPackage = []
      packages = Package.availablePackages(u.id.to_s)
      packages = packages.asc(:date).group_by{|x| x.date}
      packages.keys.sort.each do |key|
        rawPackage << {:date => I18n.l(key, :format => "%a-%d %b").gsub("á", "a"), :hours => Package.mapPackages(packages[key]).reject { |i| i[:quantity].blank? || i[:quantity].to_i < 0  }.sort_by { |hsh| hsh[:hour] } }
      end
      rawPackage = rawPackage.reject { |i| i[:hours].blank? || i[:hours].count <= 0  }

      {
      :id             => u.id.to_s,
      :name           => u.name,
      :description    => u.description,
      :price          => u.price,
      :url            => u.url,
      :liked          => user.nil? ? false : user.favorites.where(:offer_id => u.id.to_s).count > 0,
      :categories     => Category.mapCategories(u.categories, user),
      :hashtag        => u.categories.count == 0 ? "" : ("#" + u.categories.first.name.downcase),
      :likes          => user.nil? ? [] : Favorite.mapFavorites(u.favorites),
      :picture        => u.picture.url,
      :policy         => Description.mapDescriptions(Description.availableDescriptions(u.id.to_s), Offer.find(u.id.to_s).policy),
      :packages       => rawPackage,
      :accepts_cash   => u.accepts_cash_transactions,
      :location       => {
        :longitude      => u.longitude,
        :latitude       => u.latitude,
        :street         => u.street,
        :neighborhood   => u.neighborhood,
        :number         => u.number,
        :zip            => u.zip,
        :city           => u.city,
        :state          => u.state,
        :complement     => u.complement,
        :country        => u.country,
      },
      :fixedMeetingPoint => u.fixedMeetingPoint,
      :meetingPoint   => {
        :street       => u.meetingPointStreet,
        :neighborhood => u.meetingPointNeighborhood,
        :number       => u.meetingPointNumber,
        :zip          => u.meetingPointZip,
        :city         => u.meetingPointCity,
        :state        => u.meetingPointState,
        :complement   => u.meetingPointComplement,
        :country      => u.meetingPointCountry,
        :latitude     => u.meetingPointLatitude,
        :longitude    => u.meetingPointLongitude,
      },
      :notes  => u.notes,
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

  def getSaleChannelPercent
    percent =  self.sale_channel_comission
    if !percent.nil?
      percent = percent ? (100 * percent).to_i : 10
    end
    return percent
  end

  def self.mapOfferID (array)
        arr = []
        array.each do |u|
         arr << [u.name, u.id.to_s]
        end
        arr
    end
end