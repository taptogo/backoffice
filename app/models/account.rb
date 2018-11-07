class Account
  include Mongoid::Document
  include Mongoid::Timestamps

  #bank_account
  field :bank_code, type: String
  field :agencia, type: String
  field :agencia_dv, type: String 
  field :conta, type: String
  field :conta_dv, type: String 
  field :cnpj, type: String
  field :recipient_id, type: String
  field :name, type: String


  validates :agencia, :presence => {:message => "Digite uma Agência"}
  validates :conta, :presence => {:message => "Digite uma Conta"}
  validates :cnpj, :presence => {:message => "Digite um CNPJ"}

  #relations
  belongs_to :partner
  has_and_belongs_to_many :offers

  before_save :check_recipient


  def check_recipient
        
      begin
        recipient =  PagarMe::Recipient.create(
          bank_account: {
            bank_code:       self.bank_code,
            agencia:         self.agencia,
            agencia_dv:      self.agencia_dv.length == 0 ? nil : self.agencia_dv,
            conta:           self.conta,
            conta_dv:        self.conta_dv.length == 0 ? nil : self.conta_dv,
            legal_name:      self.name.gsub(".", "").gsub("/", "").gsub("-", ""),
            document_number: self.cnpj.gsub(".", "").gsub("/", "").gsub("-", "")
            },
            transfer_enabled: true,
            transfer_interval: "weekly",
            transfer_day: 5
        )
        self.recipient_id = recipient.id
      rescue
      end
  end



end
