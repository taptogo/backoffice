class Seller < User
  field :enabled, type: Boolean, default: true  
  belongs_to :partner
end
