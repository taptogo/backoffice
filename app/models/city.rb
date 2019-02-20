class City
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps

  field :enabled, type: Boolean, default: true  
  field :soon, type: Boolean, default: false  
  field :name, type: String
  field :state, type: String
  field :country, type: String, :default => "Brasil"

  has_mongoid_attached_file :picture,
    :storage        => :s3,
    :s3_protocol => :https,
    :preserve_files => true,
    :bucket_name    => 'tap2gom2y',
    :bucket    => 'tap2gom2y',
    :path           => ':attachment/:id/:style.:extension',
    :s3_credentials => File.join(Rails.root, 'config', 's3.yml')
   
  has_and_belongs_to_many :offers
  validates :name, :presence => {:message => "Digite um Nome"}, :uniqueness => {:message => "Nome já utilizado"}
  validates_attachment_content_type :picture, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  # scope :availableCategories, ->(swX,swY,neX,neY) { where(:latitude.lte => neX, :latitude.gte => swX, :longitude.lte => neY, :longitude.gte => swY, :enabled => true) }
  scope :availableCities, ->  { where(:enabled => true).asc(:name) }

  has_many :users
  
  before_save :clearCache
  after_destroy :clearCache

  def clearCache
    key = "tap_cities"
    Redisaux::Aux.set(key, nil)
  end

  def self.mapCities (array, user)
    array.map { |u| {
     :id => u.id.to_s,
     :name => u.name,
     :soon => u.soon,
     :picture => u.picture.url,
     :selected => !user.nil? && u.users.include?(user),
     }}
  end

   
    

end

