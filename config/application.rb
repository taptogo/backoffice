# frozen_string_literal: true

require_relative 'boot'

require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'rails/test_unit/railtie'
require 'sprockets/railtie' # Uncomment this line for Rails 3.1+
require 'rack'
require 'raven'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Minhacarteiradigital
  class Application < Rails::Application
    Raven.configure do |config|
      config.dsn = ENV["SENTRY_DSN"]
    end

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource(
          '*',
          headers: :any,
          methods: %i[get patch put delete post options]
        )
      end
    end

    config.to_prepare do
      Devise::SessionsController.layout 'login'
      Devise::RegistrationsController.layout proc { |_controller| usuario_signed_in? ? 'application' : 'login' }
      Devise::ConfirmationsController.layout 'login'
      Devise::UnlocksController.layout 'login'
      Devise::PasswordsController.layout 'login'
    end
    config.paths.add Rails.root.join('lib').to_s, eager_load: true
    # config.time_zone = 'Brasilia'
    config.time_zone = 'Brasilia'
    # config.time_zone = :local

    PagarMe.api_key = ENV['PAGARME_API_KEY']
    PagarMe.encryption_key = ENV['PAGARME_ENCRYPTION_KEY']

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    config.i18n.default_locale = 'pt-BR'

    # Configure the default encoding used in templates for Ruby 1.9.
    config.encoding = 'utf-8'

    config.filter_parameters << :password
    config.excluded_exceptions = []

    Raven.configure do |config|
      config.sanitize_fields = Rails.application.config.filter_parameters.map(&:to_s)
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
