class Description
  include Mongoid::Document
  
  field :enabled, type: Boolean, default: true  
  field :position, type: Integer, default: 0  
  field :title, type: String
  field :message, type: String

  belongs_to :offer
  # scope :availableCategories, ->(swX,swY,neX,neY) { where(:latitude.lte => neX, :latitude.gte => swX, :longitude.lte => neY, :longitude.gte => swY, :enabled => true) }
  scope :availableDescriptions, -> (offer)  { where(:enabled => true, :offer_id => offer).asc(:position) }

  validates :title, :presence => {:message => "Digite um Título"}
  validates :message, :presence => {:message => "Digite uma Descrição"}

  before_save :clearCache
  after_destroy :clearCache

  def clearCache
    if !self.offer.nil?
      key = "tap_descriptions" + self.offer.id.to_s
      Redisaux::Aux.set(key, nil)
    end
  end


  def self.mapDescriptions (array)
    array.map { |u| {
     :id => u.id.to_s,
     :title => u.title,
     :message => u.message
     }}
  end

end
