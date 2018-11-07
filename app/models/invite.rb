class Invite
  include Mongoid::Document
  include Mongoid::Timestamps
  field :phone, type: String
  field :email, type: String
  field :name, type: String
  field :tap_id, type: String
  field :facebook, type: String
  field :credit, type: Float, :default => 20.0

  validates_uniqueness_of :email,:case_sensitive => true, :message => "e-mail ja cadastrado", :allow_blank => true
  validates_uniqueness_of :phone,:case_sensitive => true, :message => "telefone ja cadastrado", :allow_blank => true
  validates_uniqueness_of :facebook,:case_sensitive => true, :message => "facebook ja cadastrado", :allow_blank => true

  belongs_to :user
end
