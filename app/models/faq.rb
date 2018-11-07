class Faq
  include Mongoid::Document

  field :enabled, type: Boolean, :default => false
  field :position, type: Integer
  field :title, type: String
  field :message, type: String

  scope :enabled, -> ()  { where(:enabled => true ) }
  validates :title, :presence => {:message => "Digite um Título"}
  validates :message, :presence => {:message => "Digite uma Resposta"}

  before_save :clearCache
  after_destroy :clearCache

  def clearCache
    if !self.offer.nil?
      key = "tap_faq" + self.offer.id.to_s
      Redisaux::Aux.set(key, nil)
    end
  end

  def self.mapFaqs(array)
	 array.map { |u| {
	     :id => u.id.to_s,
	     :title => u.title,
	     :message => u.message,
	     }
	 }
	end

end
