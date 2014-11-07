source 'https://rubygems.org'

#
# Frameworks
#
gem 'rails', '~> 4.2.0.beta2' # Bundle edge Rails instead: gem 'rails', github: 'rails/rails'

#
# Database
#
gem 'sqlite3' # Use sqlite3 as the database for Active Record

#
# Models
#
# gem 'bcrypt', '~> 3.1.7' # Use ActiveModel has_secure_password

#
# Views
#
gem 'haml-rails'

#
# Styles
#
gem 'sass-rails', '~> 5.0.0.beta1' # Use SCSS for stylesheets

#
# Assets
#
# gem 'therubyracer', platforms: :ruby # See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'coffee-rails', '~> 4.0.0' # Use CoffeeScript for .js.coffee assets and views
gem 'sprockets_uglifier_with_source_maps' # Generate source maps for JavaScripts

#
# API
#
gem 'grape'
gem 'grape-swagger'
gem 'jbuilder', '~> 2.0' # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder


group :development do
  # gem 'fakes3', github: 'jubos/fake-s3' # Mock S3 file storage
end

group :development, :test do
  gem 'byebug' # Call 'debugger' anywhere in the code to stop execution and get a debugger console
  gem 'i18n-tasks' # Manage locales
  gem 'quiet_assets' # Hide useless assets requests log entries
  gem 'rspec-rails' # Test all the things
  gem 'spring' # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'web-console', '~> 2.0.0.beta4' # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'whiny_validation' # Log ActiveModel validation errors

  gem 'capybara', require: false # Write integration tests scenarios
  gem 'database_cleaner', require: false # Wipe database during testing
  gem 'guard', require: false # Monitor files for changes
  gem 'guard-rspec', require: false # Autorun rspec tests
  gem 'guard-spork', require: false # Manage spork processes
  gem 'rr', require: false # DoubleRuby mocking framework
  gem 'selenium-webdriver', require: false # Run integration tests in real browser
  gem 'simplecov', require: false # Detailed tests coverage
  gem 'simplecov-summary', require: false # Tests coverage summary
  gem 'spork', '~> 1.0.0.rc4', require: false # Start rspec tests faster with forking
  gem 'timecop', require: false # Fake Time.now
  gem 'vcr', require: false # Record network requests
  gem 'webmock', require: false # Mock network requests
end
