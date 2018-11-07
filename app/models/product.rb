class Product
  include Mongoid::Document

  field :name, type: String
  field :sku, type: String
  field :price, type: Float
  field :enabled, :type => Boolean, :default => false

  has_many :items, :dependent => :destroy
  belongs_to :subcategory

   def self.mapProducts (array)
    array.map { |u| {
     :id => u.id.to_s,
     :name => u.name,
     :sku => u.sku,
     :subcategory => u.subcategory.nil? ? "" : u.subcategory.name,
     :price => u.price,
     :final_price => u.price,
     :enabled => u.enabled,
     :qr_code => u.id.to_s,
     }}
  end

   def self.mapProduct (u)
     {
     :id => u.id.to_s,
     :name => u.name,
     :sku => u.sku,
     :subcategory => u.subcategory.nil? ? "" : u.subcategory.name,
     :price => u.price,
     :final_price => u.price,
     :enabled => u.enabled,
     :qr_code => u.id.to_s,
     }
  end

end
