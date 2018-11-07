class Card
  include Mongoid::Document
  include Mongoid::Timestamps

  #fields
  field :name, type: String
  field :number, type: String
  field :month, type: String
  field :holder, type: String
  field :year, type: String
  field :cvv, type: String
  field :token, type: String
  field :cpf, type: String
  field :zip, type: String
  field :brand, type: String
  field :deleted, type: Boolean, default: false
 

  field :street, type: String
  field :neighborhood, type: String
  field :number, type: String
  field :city, type: String
  field :state, type: String
  field :phone, type: String

  #relationships
  belongs_to :user
  has_many :orders

  #validations
  validates_presence_of :name, :message => "digite um nome"
  validates_presence_of :token, :message => "digite um token"

  before_save :check_recipient

  def check_recipient
    if self.token.nil?
         recipient = PagarMe::Card.new({
            :card_number => self.number,
            :card_holder_name => self.holder,
            :card_expiration_month => self.month,
            :card_expiration_year => self.year,
            :card_cvv => self.cvv
          }).create
        self.token = recipient.id
        self.cvv = nil
        self.number = nil
    end
    if self.street.nil? && !self.zip.nil?
      zip = self.zip.gsub("-", "")
      url = "https://viacep.com.br/ws/#{zip}/json/"
      response = HTTParty.get("#{url}", :headers => { 'Content-Type' => 'application/json' } )
      parsed_response = response.parsed_response
      self.street = parsed_response["logradouro"]
      self.neighborhood = parsed_response["bairro"]
      self.city = parsed_response["localidade"]
      self.state = parsed_response["uf"]
    end
  end



  def self.mapCards (array)
    array.map { |card| {:id => card.id, 
      :name => card.name, 
      :brand => card.brand 
      }}
  end


  def self.mapCard (card)
    if card.nil?
      {}
    else
      {:id => card.id, :name => card.name, :number => card.name, :brand => card.brand }
    end
  end

end
