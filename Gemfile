source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.4'
gem 'puma', '~> 3.12'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'turbolinks', '~> 5'
gem 'mongoid', '~> 7.0'
gem "mongoid-paperclip"
gem 'devise'
gem 'fcm'
gem 'redis'
gem 'will_paginate_mongoid'
gem 'aws-sdk-s3'
gem "cpf_cnpj"
gem "chartkick"
gem "pagarme"
gem 'credit_card_validations', :git => "https://github.com/caiotuxo/credit_card_validations", :ref => 'a97d13b3995de6440ae2d3a65e618b47a420ab29'
gem 'passbook'
gem 'icalendar'
gem 'rack-cors'
gem 'wicked_pdf'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :production do
  gem 'wkhtmltopdf-heroku', '2.12.5.0'
  gem 'sentry-raven'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'wkhtmltopdf-binary-edge'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'figaro'
  gem 'ruby-debug-ide'
  gem 'debase'
  gem 'rubocop', require: false
  gem 'htmlbeautifier'
  gem 'rcodetools'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
