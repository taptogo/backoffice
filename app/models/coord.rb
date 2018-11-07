class Coord
  include Mongoid::Document
  include Mongoid::Timestamps

  field :place_name
  field :place_address
  field :city
  field :place_category

  field :latitude, type: Float, :default => 0.0
  field :longitude, type: Float, :default => 0.0

  belongs_to :user

end
