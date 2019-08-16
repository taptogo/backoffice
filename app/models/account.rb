class Account
  include Mongoid::Document
  include Mongoid::Timestamps

  before_save :create_recipient_pagarme

  #bank_account
  field :enabled, type: Boolean, default: false
  field :bank_code, type: String
  field :agencia, type: String
  field :agencia_dv, type: String 
  field :conta, type: String
  field :conta_dv, type: String 
  field :cnpj, type: String
  field :name, type: String
  field :recipient_id, type: String

  validates :agencia, :presence => {:message => "Digite uma Agência"}
  validates :conta, :presence => {:message => "Digite uma Conta"}
  validates :cnpj , :presence => {:message => "Digite um CNPJ ou CPF"}

  #relations
  belongs_to :sale_channel, optional: true
  belongs_to :partner, optional: true
  has_and_belongs_to_many :offers

  private
    def create_recipient_pagarme
      begin
        recipient =  PagarMe::Recipient.new({
          :bank_account => {
            :bank_code        =>  self.bank_code,
            :agencia          =>  self.agencia,
            :agencia_dv       =>  self.agencia_dv.length == 0 ? nil : self.agencia_dv,
            :conta            =>  self.conta,
            :conta_dv         =>  self.conta_dv.length == 0 ? nil : self.conta_dv,
            :legal_name       =>  self.name.gsub(".", "").gsub("/", "").gsub("-", ""),
            :document_number  =>  self.cnpj.gsub(".", "").gsub("/", "").gsub("-", "")
          },
          :transfer_enabled   => true,
          :transfer_interval  => "weekly",
          :transfer_day       => 5
        })

        recipient.create
        self.recipient_id = recipient.id
      rescue
        throw :abort
      end
    end

end
