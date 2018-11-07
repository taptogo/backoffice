class Notification
  include Mongoid::Document
  include Mongoid::Timestamps::Created

  field :title, type: String
  field :message, type: String
  field :seen, type: Boolean, :default => false
  field :fireDate, type: DateTime
  has_and_belongs_to_many :users
  
  def self.mapNotifications (array)
    array.map { |u| {
     :id => u.id.to_s,
     :message => u.message,
     :read => u.seen,
     :title => u.title.blank? ? "Minha Carteira Digital" : u.title,
     :date => u.created_at.nil? ? "" : u.created_at.strftime("%d/%m/%Y %H:%M")
     }}
  end


  before_create :sendPush


  def sendPush
    tokens = self.users.distinct(:token)
    if tokens.count > 0 && !self.seen && (self.fireDate.nil? || self.fireDate < Time.now)
        self.seen = true
        fcm = FCM.new("AAAANxOci1k:APA91bEmtG1BPlEzjvHFvtqO1SH4-E0X5M3-SiPzbHF5O25mIVNLWlA7O__5E183YCgDo9DBzjnXv1J1zUr1INEOCGXV8Uiwk4zcZ4dmeOexoSNU1x7DPHouaVvIzi4eomfQWg4TFuqJ")
        options_ios = {}
        options_ios[:notification] = {}
        options_ios[:notification][:title] = self.title
        options_ios[:notification][:body] = self.message
        options_ios[:content_available] = true
        options_ios[:data] = {}
        options_ios[:data][:priority] = 'high'
        options_ios[:data][:message] = self.message
        response = fcm.send(tokens, options_ios)
    end

  end



end
