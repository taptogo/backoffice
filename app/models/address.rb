class Address
  include Mongoid::Document
  include Mongoid::Timestamps

  field :street, type: String, :default => "Rua Cardeal Arcoverde"
  field :neighborhood, type: String, :default => "Pinheiros"
  field :number, type: String, :default => "359"
  field :zip, type: String, :default => "01410-000"
  field :city, type: String, :default => "São Paulo"
  field :state, type: String, :default => "SP"
  field :complement, type: String, :default => "10 Andar"
  field :country, type: String, :default => "Brasil"
  field :ref, type: String
  field :is_mailing, type: Boolean
  field :is_main, type: Boolean, :default => false

  #relations
  belongs_to :user

  def self.mapAddresses (array)
     array.map { |u| {
     :id => u.id.to_s,
     :street => u.street,
     :neighborhood => u.neighborhood,
     :number => u.number,
     :zip => u.zip,
     :city => u.city,
     :state => u.state,
     :country => u.country,
     :ref => u.ref,
     :complement => u.complement,
     :is_mailing => u.is_mailing
   }}
  end



end
