class Favorite
  include Mongoid::Document

  belongs_to :user
  belongs_to :offer

  def self.mapFavorites (array)
    array.map { |u| {
     :id => u.id.to_s,
     :user_id => u.user.id.to_s,
     :name => u.user.name,
	   :picture => (u.user.facebook.nil? || u.user.changedPhoto) ?  u.user.picture.url(:original) : "http://graph.facebook.com/#{u.user.facebook}/picture?type=large"
	 }}
  end

end
