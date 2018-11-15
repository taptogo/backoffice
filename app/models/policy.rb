class Policy
  include Mongoid::Document
  include Mongoid::Paperclip

	field :name, :type => String, :default => ""
	field :description, :type => String, :default => ""

  	validates :name, :presence => {:message => "Digite um Título"}
  	validates :description, :presence => {:message => "Digite uma Descrição"}


  	scope :availablePolicy, -> (offer)  { where(:offer_ids.in => [offer.to_s]).asc(:position) }

  	has_and_belongs_to_many :offers

  	before_save :clearCache
    after_destroy :clearCache

	  def clearCache
	    key = "policies"
	    Redisaux::Aux.set(key, nil)
	  end

	  def self.from_cache
	    key =  "policies"
	    value = Redisaux::Aux.checkKey(key)
	    if value.nil? 
	      json = mapID(Policy.all.only(:name, :id).asc(:name))
	      Redisaux::Aux.set(key, json)
	      value = Redisaux::Aux.checkKey(key)
	      JSON.parse(value)
	    else
	      JSON.parse(value)
	    end
	  end
 	
 	def self.mapID (array)
        arr = []
        array.each do |u|
         arr << [u.name, u.id.to_s]
        end
        arr
    end 

	def self.mapPolicy(u)
		{
	     :id => u.id,
	     :name => u.name,
	     :description => u.description
	     }
	end

end