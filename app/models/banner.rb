class Banner
  include Mongoid::Document
    include Mongoid::Paperclip

  field :enabled, type: Boolean, :default => false
  field :from, type: Time
  field :to, type: Time
  field :fixed, type: Boolean, :default => false

  field :name, type: String
  field :url, type: String
  field :activity, type: String
  field :viewcontroller, type: String
  
  field :blacklist, type: Array, :default => []
  # field :name, type: String

  scope :enabled, -> (user_id)  { where(:enabled => true, :from.lte => Time.now, :to.gte => Time.now, :blacklist.nin => [user_id] ) }

  has_mongoid_attached_file :picture,
    :storage => :s3, 
    :s3_host_name => "s3-sa-east-1.amazonaws.com",
	:s3_region => "sa-east-1",
    :bucket_name    => 'carteiradigitalcdt',
    :bucket    => 'carteiradigitalcdt',
	:path           => ':attachment/:id/:style.:extension',
	:s3_credentials => File.join(Rails.root, 'config', 's3.yml')
  
  validates_attachment_content_type :picture, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

	def self.mapBanners(array)
	 array.map { |u| {
	     :id => u.id.to_s,
	     :name => u.name,
	     :fixed => u.fixed,
	     :picture => "https:" + u.picture.url,
	     :link => {
	     	:url => u.url,
	     	:activity => !u.url.nil? ? nil : u.activity,
	     	:viewcontroller => !u.url.nil? ? nil : u.viewcontroller,
	     }
	     }
	 }
	end

	def getPeriod
		from = ""
		to = ""
		if !self.from.nil?
			from = self.from.strftime("%d/%m/%Y %H:%M")
		end
		if !self.to.nil?
			to = self.to.strftime("%d/%m/%Y %H:%M")
		end

		from + " - " + to
	end

end
