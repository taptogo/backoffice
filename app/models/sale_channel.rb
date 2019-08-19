class SaleChannel
    include Mongoid::Document
    include Mongoid::Paperclip
    include Mongoid::Timestamps

    before_create :create_bank_account
    before_update :update_bank_account

    field :enabled, type: Boolean, default: true  
    field :full_name, type: String
    field :name_establishment, type: String
    field :email, type: String
    field :phone, type: String
    field :cpf_cnpj, type: String
  
    #address
    field :street, type: String
    field :zip, type: String
    field :number, type: String
    field :complement, type: String
    field :neighborhood, type: String
    field :city, type: String
    field :state, type: String
  
    #bank_account
    field :bank_code, type: String
    field :agencia, type: String
    field :agencia_dv, type: String 
    field :conta, type: String
    field :conta_dv, type: String 
    field :recipient_id, type: String
  
    has_many :orders, dependent: :destroy
    has_many :accounts, dependent: :destroy
    scope :availableConcierges, ->  { where(:enabled => true).asc(:full_name) }
  
    validates :full_name, :presence => {:message => "Digite um Nome Completo"}
    validates :email, :presence => {:message => "Digite um E-mail"}
    validates :phone, :presence => {:message => "Digite um Telefone"}
    validates :cpf_cnpj, :presence => {:message => "Digite um CPF ou CNPJ"}

    def getAddress
      [self.street, self.number, self.neighborhood, self.city].join(" ")
    end

    private
      def create_bank_account
        begin
          a = Account.new
          a.sale_channel = self
          a.bank_code = self.bank_code
          a.agencia = self.agencia.gsub("_", "")
          a.agencia_dv = self.agencia_dv.gsub("_", "")
          a.conta = self.conta.gsub("_", "")
          a.conta_dv = self.conta_dv.gsub("_", "")
          a.cnpj = self.cpf_cnpj
          a.name = self.full_name
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
        rescue
          throw :abort
        end
      end

      def update_bank_account
        account = Account.where(recipient_id: self.recipient_id).first
        if !account.nil?
          self.bank_code = account.bank_code
          self.agencia = account.agencia
          self.agencia_dv = account.agencia_dv
          self.conta = account.conta
          self.conta_dv = account.conta_dv
        end
      end
  end