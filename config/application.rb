require_relative 'boot'

require "action_controller/railtie"
require "action_mailer/railtie"
require "rails/test_unit/railtie"
require "sprockets/railtie" # Uncomment this line for Rails 3.1+

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Minhacarteiradigital
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.to_prepare do
        Devise::SessionsController.layout "login"
        Devise::RegistrationsController.layout proc{ |controller| usuario_signed_in? ? "application"   : "login" }
        Devise::ConfirmationsController.layout "login"
        Devise::UnlocksController.layout "login"            
        Devise::PasswordsController.layout "login"        
    end
    config.paths.add Rails.root.join('lib').to_s, eager_load: true
    # config.time_zone = 'Brasilia'
    config.time_zone = 'Brasilia'
    # config.time_zone = :local

    PagarMe.api_key = "ak_live_S8URgvZkKAgWtL5a5aWnz0c2GmmaaE"

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    config.i18n.default_locale = "pt-BR"

    # Configure the default encoding used in templates for Ruby 1.9.
    config.encoding = "utf-8"


    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
