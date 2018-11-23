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
  field :promocode, :type => String
  field :os, :type => String
  field :login_tries, type: Integer, :default => 0
  field :invoice_count, type: Integer, :default => 10
  field :temp_pass, type: Boolean, :default => false
  field :activated, type: Boolean, :default => true
  field :enabled, type: Boolean, :default => true
  field :blocked, type: Boolean, :default => false
  field :facebook, :type => String
  field :google, :type => String
  field :provider, :type => String
  field :account_id, type: String, default: "39"
  field :person_id, type: String, default: ""
  field :card_id, type: String, default: ""
  field :newCode, type: String, default: ""
  field :temp_phone, type: String, default: ""
  field :temp_email, type: String, default: ""
  field :document, type: String, default: ""
  field :birth_date, type: String, default: ""
  field :token, type: String, default: ""
  field :zip, :type => String, :default => ""
  field :complement, :type => String, :default => ""
  field :number, :type => String, :default => ""
  field :street, :type => String, :default => ""
  field :city_address, :type => String, :default => ""
  field :state, :type => String, :default => ""
  field :birthDate, :type => String, :default => ""
  field :gender, :type => String, :default => ""

  has_many :addresses, :dependent => :destroy 
  has_many :favorites, :dependent => :destroy 
  has_many :cards, :dependent => :destroy
  has_and_belongs_to_many :notifications
  has_and_belongs_to_many :categories
  has_many :orders, :dependent => :destroy 
  has_many :invites, :dependent => :destroy 
  has_many :codes, :dependent => :destroy 
  belongs_to :city

  has_mongoid_attached_file :picture,
    :storage => :s3, 
    :s3_protocol => :https,
    :bucket_name    => 'tap2gom2y',
    :bucket    => 'tap2gom2y',
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

 def isAttendant?
    self.class == Attendant
  end

  def isStore?
    self.class == Store
  end

  def isAdmin?
    self.class == Admin
  end

  def isSuperAdmin?
    self.class == SuperAdmin
  end

  def isProvider?
    self.class == Provider
  end

  def self.mapUsersEvent(array)
    array.map { |u| {
      :id => u.id, 
      :picture => (u.facebook.nil? || u.changedPhoto) ?  u.picture.url(:original) : "http://graph.facebook.com/#{u.facebook}/picture?type=large" ,
      :name => u.name 
    }}
  end

  def self.mapUserSeller(u)
   {
      :id => u.id, 
      :picture => (u.facebook.nil? || u.changedPhoto) ?  u.picture.url(:original) : "http://graph.facebook.com/#{u.facebook}/picture?type=large" ,
      :name => u.name,
      :phone => u.phone,
      :email => u.email
    }
  end


  def self.mapUser (u)
    { :zip => u.zip, :street => u.street,:complement => u.complement, :number => u.number, :city => u.city_address, :state => u.state, :cpf => u.cpf, :birth_date => u.birth_date , :created_at => u.created_at.nil? ? "" : u.created_at, :phone => u.phone, :email => u.email, :error_code => "0", :status => u.id.to_s, :picture => (u.facebook.nil? || u.changedPhoto) ?  u.picture.url(:original) : "http://graph.facebook.com/#{u.facebook}/picture?type=large" , :name => u.name, :gender => u.gender }
  end
  def self.mapUser2 (u)
    {:phone => u.phone, :email => u.email, :id => u.id.to_s,  :picture => (u.facebook.nil? || u.changedPhoto) ?  u.picture.url(:original) : "http://graph.facebook.com/#{u.facebook}/picture?type=large" , :name => u.name }
  end



  def getCredits(pack, quantity)
    if pack.nil?
      nil
    else
      candidates = self.codes.where(:enabled => true, :from.lte => Time.now, :to.gte => Time.now).distinct(:id)
      package = Package.find(pack)
      offer = package.offer
      candidates = self.codes.where(:enabled => true, :from.lte => Time.now, :to.gte => Time.now, :offer_ids.in => [offer.id.to_s]).desc(:discount)
      if candidates.count == 0
        candidates = self.codes.where(:enabled => true, :from.lte => Time.now, :to.gte => Time.now, :offer_ids.in => [[], nil]).desc(:discount)
      end

      candidates = candidates.first
      if candidates.nil?
        nil
      else
        candidates.current_value = candidates.getDiscount(package.price * quantity.to_i)
        candidates.save(validate: false)
        candidates
      end

    end


  end

  private
  def check_cpf
    if !CPF.valid?(self.cpf)
     errors.add(:cnpj, "CPF inválido") 
    end
  end


end
