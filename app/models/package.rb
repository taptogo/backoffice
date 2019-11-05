# frozen_string_literal: true

class Package
  include Mongoid::Document

  field :enabled, type: Boolean, default: true
  field :capacity, type: Integer, default: 0
  field :wDay, type: Integer, default: 0
  field :total, type: Integer, default: 0
  field :price, type: Float, default: 0
  field :date, type: Time
  field :name, type: String
  field :hour, type: String
  field :price_change_factor, type: Float, default: 0

  belongs_to :offer
  before_save :checkName
  has_many :orders, dependent: :destroy
  scope :availablePackages, ->(offer) { where(:enabled.ne => false, :offer_id => offer, :date.gt => Time.now, :date.lte => (Time.now + 2.months)).asc(:date) }

  def checkName
    self.name = offer.name
    self.name += ' ' + (date.nil? ? '' : date.strftime('%d/%m/%Y %H:%M'))
    self.total = capacity
  end

  def self.mapPackages(array)
    array.map do |u|
      {
        id: u.id.to_s,
        price: u.price,
        hour: u.hour,
        quantity: u.capacity,
        date: I18n.l(u.date, format: '%a %d %b').gsub('á', 'a'),
        price_change_factor: u.price_change_factor > 0 ? u.price_change_factor : u.offer.price_change_factor
      }
    end
  end

  def getDate
    date.strftime('%A') + ' - ' + date.strftime('%d/%m/%Y')
  end

  def getDateFull
    date.strftime('%d/%m/%Y') + ' ' + hour
  end

  def getCalendarDateFull
    (date.strftime('%d/%m/%Y') + ' ' + hour).to_time
  rescue StandardError
    (date.strftime('%d/%m/%Y') + ' 00:00').to_time
  end

  def getFullName
    if offer.nil?
      ''
    else
      offer.getFullName
    end
  end
end
