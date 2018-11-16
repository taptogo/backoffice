class Order
  include Mongoid::Document
  include Mongoid::Timestamps

  field :status, type: String, :default => "Confirmada"
  field :quantity, type: Integer, :default => 0
  field :amount, type: Float, :default => 0
  field :discount, type: Float, :default => 0
  field :credit, type: Float, :default => 0
  field :tax, type: Float, :default => 0
  field :transaction_id, type: String
  field :order_number, :default => 0
  field :picked, type: Boolean, :default => false

  belongs_to :user
  belongs_to :package
  belongs_to :card
  belongs_to :coupon

  before_save :setAmount

  scope :pending, -> (user)  { where(:user_id.in => [user], :picked.ne => true).desc(:created_at) }
  scope :getFinishedOrders, -> (user)  { where(:user_id.in => [user], :picked => true).desc(:created_at) }
  scope :finished, -> (user)  { where(:user_id.in => [user], :picked => true).desc(:created_at) }

  def setAmount
    self.amount = self.package.total * self.quantity
  end


  def self.mapOrders (array)
    array.map { |u| {
      :date => u.created_at.strftime("%d/%m/%Y %H:%M"),
      # :name => u.package.offer.name + " - " + (u.package.date.nil? ? "" : u.package.date.strftime("%d/%m/%Y %H:%M")),
      :name => u.package.nil? ? "" : u.package.getFullName,
      :id => u.id.to_s,
      :status => getStatus(u.status),
      :quantity => u.quantity,
      :amount => u.amount
      }}
  end

  def self.getStatus(status)
    status
  end


  def self.mapOrder (u)
      {:id => u.id.to_s, 
      :card => u.card.nil? ? nil : {:number => u.card.name, :name => u.card.name, :brand => u.card.brand},
      :name => u.package.nil? ? "" : u.package.getFullName,
      :date => u.created_at.nil? ? "" : u.created_at.strftime("%d/%m/%Y %H:%M"),
      :quantity => u.quantity,
      :amount => u.amount,
      :status => getStatus(u.status)
    }
  end

  def self.mapOrdersSeller (array)
    array.map { |u| {
      :date => u.created_at.strftime("%d/%m/%Y %H:%M"),
      # :name => u.package.offer.name + " - " + (u.package.date.nil? ? "" : u.package.date.strftime("%d/%m/%Y %H:%M")),
      :name => u.package.nil? ? "" : u.package.getFullName,
      :id => u.id.to_s,
      :status => getStatus(u.status),
      :quantity => u.quantity,
      :customer => u.user.name
      }}
  end

  def getCalendar
    cal = Icalendar::Calendar.new
    cal.event do |e|
      e.dtstart     = Icalendar::Values::DateTime.new(self.package.date, tzid: "Brasilia")
      e.dtend       = Icalendar::Values::DateTime.new(self.package.date + 1.hour, tzid: "Brasilia")
      e.summary     = "#{self.package.name} -  #{self.user.name}"
      e.description = "#{self.package.name} -  #{self.user.name}"
      e.location    = self.package.offer.partner.name
    end
    cal
  end


  def self.mapOrdersCalendar(array)
    array.map { |u| {
     :start => (u.package.date.nil? ? Time.now : u.package.date).strftime("%Y-%m-%d"),
     :title => getLink(u),
     :url =>  "orders/#{u.id.to_s}",
     :color => "#ff7675"
     }}

  end


  def self.getLink(u)
    name = (u.package.name + " - " + u.user.name)
    # ActionController::Base.helpers.link_to name, "orders/#{u.id.to_s}"
  end

  def getDate
    self.created_at.strftime("%d/%m/%Y")
  end


  def cancel(user)
    if user.isSuperAdmin?
      n = Notification.new
      n.title = "Tap2Go"
      n.message = "Seu pedido em #{self.package.offer.name} foi cancelado com sucesso"
      n.user_ids = [self.user_id]
      n.save
    end
  end

  def confirm
    n = Notification.new
    n.title = "Tap2Go"
    n.message = "Obrigado por utilizar o Tap2Go! Tenha uma experiência incrível em #{self.package.offer.name}"
    n.user_ids = [self.user_id]
    n.save
  end


end
