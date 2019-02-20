class Category 
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps

  field :enabled, type: Boolean, default: true  
  field :name, type: String
  field :position, type: Integer
  field :name_en, type: String
  field :name_es, type: String

  has_mongoid_attached_file :picture,
    :storage        => :s3,
    :s3_protocol => :https,
    :preserve_files => true,
    :bucket_name    => 'tap2gom2y',
    :bucket    => 'tap2gom2y',
    :path           => ':attachment/:id/:style.:extension',
    :s3_credentials => File.join(Rails.root, 'config', 's3.yml')
   
  has_and_belongs_to_many :users 
  has_and_belongs_to_many :offers
  validates :name, :presence => {:message => "Digite um Nome"}, :uniqueness => {:message => "Nome já utilizado"}
  validates_attachment_content_type :picture, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  # scope :availableCategories, ->(swX,swY,neX,neY) { where(:latitude.lte => neX, :latitude.gte => swX, :longitude.lte => neY, :longitude.gte => swY, :enabled => true) }
  scope :availableCategories, ->  { where(:enabled => true).asc(:position) }

  before_save :clearCache
  after_destroy :clearCache

  def clearCache
    key = "tap_categories"
    Redisaux::Aux.set(key, nil)
  end


  def self.mapCategories (array, user)
    array.map { |u| {
     :id => u.id.to_s,
     :name => u.name,
     :selected => !user.nil? && u.users.include?(user),
     :picture => u.picture.url,
     }}
  end

   
end

