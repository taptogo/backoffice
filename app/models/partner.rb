class Partner
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps

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

  before_save :check_recipient

  def check_recipient
    if self.accounts.count == 0
      a = Account.new
      a.partner = self
      a.bank_code = self.bank_code
      a.agencia = self.agencia
      a.agencia_dv = self.agencia_dv
      a.conta = self.conta
      a.conta_dv = self.conta_dv
      a.cnpj = self.cnpj
      a.name = self.name
      a.save
    end
  end

end
