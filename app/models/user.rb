class User
  include Mongoid::Document
  include Mongoid::Paperclip
  include Mongoid::Timestamps

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  ## Database authenticatable
  field :email,              type: String, default: ""
  field :encrypted_password, type: String, default: ""

  ## Recoverable
  field :reset_password_token,   type: String
  field :reset_password_sent_at, type: Time

  ## Rememberable
  field :remember_created_at, type: Time


  ## Fields
  field :name, type: String, default: ""
  field :device, :type => String
  field :token, :type => String
  field :cpf, :type => String
  field :cpf_plain, :type => String
  field :phone, :type => String
  field :step, :type => String
  field :os, :type => String
  field :login_tries, type: Integer, :default => 0
  field :invoice_count, type: Integer, :default => 10
  field :temp_pass, type: Boolean, :default => false
  field :activated, type: Boolean, :default => true
  field :enabled, type: Boolean, :default => true
  field :blocked, type: Boolean, :default => false

  field :account_id, type: String, default: "39"
  field :person_id, type: String, default: ""
  field :card_id, type: String, default: ""
  field :newCode, type: String, default: ""
  field :temp_phone, type: String, default: ""
  field :temp_email, type: String, default: ""
  field :document, type: String, default: ""
  field :birth_date, type: String, default: ""
  field :token, type: String, default: ""

  has_many :addresses, :dependent => :destroy 
  has_and_belongs_to_many :notifications
  has_and_belongs_to_many :categories
  has_many :orders, :dependent => :destroy 

  has_mongoid_attached_file :picture,
    :storage => :s3, 
    :s3_host_name => "s3-sa-east-1.amazonaws.com",
    :s3_region => "sa-east-1",
    :bucket_name    => 'carteiradigitalcdt',
    :bucket    => 'carteiradigitalcdt',
    :path           => ':attachment/:id/:style.:extension',
    :s3_credentials => File.join(Rails.root, 'config', 's3.yml')

  has_mongoid_attached_file :document_front,
    :storage => :s3, 
    :s3_host_name => "s3-sa-east-1.amazonaws.com",
    :s3_region => "sa-east-1",
    :bucket_name    => 'carteiradigitalcdt',
    :bucket    => 'carteiradigitalcdt',
    :path           => ':attachment/:id/:style.:extension',
    :s3_credentials => File.join(Rails.root, 'config', 's3.yml')

  has_mongoid_attached_file :document_back,
    :storage => :s3, 
    :s3_host_name => "s3-sa-east-1.amazonaws.com",
    :s3_region => "sa-east-1",
    :bucket_name    => 'carteiradigitalcdt',
    :bucket    => 'carteiradigitalcdt',
    :path           => ':attachment/:id/:style.:extension',
    :s3_credentials => File.join(Rails.root, 'config', 's3.yml')

  validates_attachment_content_type :picture, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  before_save :checkCPF

  def checkCPF
    if !self.cpf.nil?
      self.cpf_plain = self.cpf.gsub("-", "").gsub(".", "")
    end
    if self.login_tries >= 3
      self.blocked = true
    end
  end

  def sendUpdateToken
    self.token = (6.times.map { rand(0..9) }.join).to_s
    if !self.temp_email.nil?
      ApplicationMailer.updateEmail(self.id.to_s, self.temp_email,self.token).deliver
    elsif !self.temp_phone.nil?
      Cdt::Api.sendSMS(self.temp_phone, self.token)
    end
  end

  def sendCheckToken
      self.token = (6.times.map { rand(0..9) }.join).to_s
      Cdt::Api.sendSMS(self.phone, self.token)
  end

  def self.mapAccount (u)
    {
      :id => u.id.to_s,
      :picture =>  u.picture.url(:original),
      :name => u.name,
      :cpf => u.cpf,
      :account_id => u.account_id,
      :person_id => u.person_id
    }
  end

  def self.mapUser (u)
    {
      :id => u.id.to_s,
      :created_at => u.created_at.nil? ? nil : u.created_at.strftime("%d/%m/%Y %H:%M"),
      :picture =>  u.picture.url.include?("miss") ? nil : ("https:" + u.picture.url(:original)),
      :name => u.name,
      :blocked => false,
      :cpf => u.cpf,
      :temp_pass => u.temp_pass,
      :account_id => u.account_id,
      :saudation => u.getSaudation,
      :person_id => u.person_id,
      :birth_date => u.birth_date,
      :card_id => u.card_id,
      :step => u.step,
      :document => u.document,
      :activated => u.activated
    }
  end


  def self.mapUserFull (u)
    {
      :id => u.id.to_s,
      :created_at => u.created_at.nil? ? nil : u.created_at.strftime("%d/%m/%Y %H:%M"),
      :picture =>  u.picture.url.include?("miss") ? nil : ("https:" + u.picture.url(:original)),
      :name => u.name,
      :cpf => u.cpf,
      :email => u.email,
      :phone => u.phone,
      :address => Address.mapAddresses(u.addresses.where(:is_main => true)).first,
      :mailing_address => Address.mapAddresses(u.addresses.where(:is_mailing => true, :is_main => false)).first
    }
  end

   def isSuperAdmin?
    self.class == SuperAdmin
  end

  def isManager?
    self.class == Manager
  end



  private
  def check_cpf
    if !CPF.valid?(self.cpf)
     errors.add(:cnpj, "CPF inválido") 
    end
  end


end
