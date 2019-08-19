class Partner
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps

  before_create :create_bank_account

  field :enabled, type: Boolean, default: true
  field :name, type: String
  field :social, type: String
  field :facebook, type: String
  field :instagram, type: String
  field :email, type: String
  field :phone, type: String
  field :address, type: String
  field :url, type: String
  field :tax, type: Float, :default => 0.20


  #address
  field :street, type: String
  field :neighborhood, type: String
  field :number, type: String
  field :zip, type: String
  field :city, type: String
  field :state, type: String
  field :complement, type: String
  field :country, type: String


  #bank_account
  field :bank_code, type: String
  field :agencia, type: String
  field :agencia_dv, type: String 
  field :conta, type: String
  field :conta_dv, type: String 
  field :cnpj, type: String
  field :recipient_id, type: String

  has_many :offers, dependent: :destroy
  has_many :managers, dependent: :destroy
  has_many :accounts, dependent: :destroy
  has_many :sellers, dependent: :destroy
  scope :availablePartners, ->  { where(:enabled => true).asc(:name) }


  validates :name, :presence => {:message => "Digite um Nome"}
  validates :email, :presence => {:message => "Digite um E-mail"}
  validates :phone, :presence => {:message => "Digite um Telefone"}
  validates :cnpj, :presence => {:message => "Digite um CNPJ"}

  def getAddress
    [self.street, self.number, self.neighborhood, self.city].join(" ")
  end

  private
    def create_bank_account
      a = Account.new
      a.partner = self
      a.bank_code = self.bank_code
      a.agencia = self.agencia.gsub("_", "")
      a.agencia_dv = self.agencia_dv.gsub("_", "")
      a.conta = self.conta.gsub("_", "")
      a.conta_dv = self.conta_dv.gsub("_", "")
      a.cnpj = self.cnpj
      a.name = self.name
      a.enabled = true
      if a.save
        self.agencia = a.agencia
        self.agencia_dv = a.agencia_dv
        self.conta = a.conta
        self.conta_dv = a.conta_dv
        self.recipient_id = a.recipient_id
      else
        throw :abort
      end
    end
end
