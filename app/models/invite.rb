class Invite
  include Mongoid::Document
  include Mongoid::Timestamps

  field :phone, type: String
  field :email, type: String
  field :name, type: String
  field :tap_id, type: String
  field :facebook, type: String
  field :used, type: Boolean, :default => false
  field :expiration, type: Date
  field :credit, type: Float, :default => 20.0

  validates_uniqueness_of :email,:case_sensitive => true, :message => "e-mail ja cadastrado", :allow_blank => true
  validates_uniqueness_of :phone,:case_sensitive => true, :message => "telefone ja cadastrado", :allow_blank => true
  validates_uniqueness_of :facebook,:case_sensitive => true, :message => "facebook ja cadastrado", :allow_blank => true

  belongs_to :user

  before_create :setExpiration

  def setExpiration
    if self.credit > 20
      self.expiration = Time.now + 30.days
    end
  end

  def self.mapInvites (array)
    array.map { |u| {
     :id => u.id.to_s,
     :name => u.name,
     :message => "Cadastro realizado em #{u.getDate}",
     :valid => true
   }}
  end

  def getDate
    self.created_at.strftime("%d/%m/%Y")
  end

end
