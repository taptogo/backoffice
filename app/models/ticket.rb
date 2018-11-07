class Ticket
  include Mongoid::Document

  field :name, :type => String
  field :price, :type => Float
  field :credit, :type => Float
  field :enabled, :type => Boolean, :default => false

  belongs_to :event

   def self.mapTickets (array)
    array.map { |u| {
     :id => u.id.to_s,
     :name => u.name,
     :price => u.price,
     :enabled => u.enabled,
     :credit => u.credit
     }}
  end

end
