source 'https://rubygems.org'

# Frameworks
gem 'devise' # Authenticate users
gem 'rails', '~> 4.2.0' # Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
# gem 'rails-disco', github: 'hicknhack-software/rails-disco' # distributed CQRS and Event Sourcing

# Server
gem 'puma'
gem 'rack-cors'

# Database
gem 'pg', platforms: :ruby # PostgreSQL adapter
# gem 'sqlite3' # Use sqlite3 as the database for Active Record

# Models
# gem 'activerecord-import' # Bulk inserts
# gem 'apartment' # Multi-tenancy
# gem 'awesome_nested_set', github: 'collectiveidea/awesome_nested_set' # Fast selects for trees
# gem 'bcrypt', '~> 3.1.7' # Use ActiveModel has_secure_password
# gem 'paper_trail' # Version and audit changes
# gem 'paranoia' # Hide records instead of deleting them
# gem 'protector', github: 'inossidabile/protector' # ACL
# gem 'sanitize' # Strip HTML
# gem 'state_machine' # may be broken
# gem 'validate_url' # URLs validator
gem 'kaminari' # Paginate query results

# API
gem 'grape'
gem 'grape-entity'
gem 'grape-swagger'
# gem 'json-jwt', github: 'nov/json-jwt'
gem 'rack-jwt-token-auth'

# Views
# gem 'browser-timezone-rails', github: 'Sjors/browser-timezone-rails' # Consider user browser timezone
gem 'haml-rails'

# Stylesheets
gem 'sass-rails' # Use SCSS for stylesheets

# JavaScript
# gem 'sprockets-preload', github: 'inossidabile/sprockets-preload' # Show progress of page loading
# gem 'therubyracer', platforms: :ruby # See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'coffee-rails' # Use CoffeeScript for .js.coffee assets and views
gem 'sprockets_uglifier_with_source_maps' # Generate source maps for JavaScripts

# EMails
# gem 'actionmailer_inline_css' # Fetch stylesheets from assets pipeline
# gem 'griddler', github: 'thoughtbot/griddler' # Receive emails
# gem 'premailer', '~> 1.8.2' # Compile email for better compatibility
# gem 'sendgrid' # Send emails
# gem 'sendgrid-parse' # Receive emails from sendgrid

# Tools
# gem 'hashie_rails' # Hash flavors
# gem 'mini_magick' # Transform images
gem 'addressable' # Better URL parser
gem 'dotenv', require: false # Load environment variables from files
gem 'envied' # Validate and type-cast environment variables
gem 'ice_nine', require: ['ice_nine', 'ice_nine/core_ext/object'] # Objects deep freeze

# Seeding
gem 'factory_girl', require: false
gem 'ffaker', require: false


group :development do
  # gem 'fakes3', github: 'jubos/fake-s3' # Mock S3 file storage
end

group :development, :test do
  gem 'jazz_fingers' # Pry and other whistles
  gem 'byebug' # Call 'debugger' anywhere in the code to stop execution and get a debugger console
  gem 'i18n-tasks' # Manage locales
  gem 'quiet_assets' # Hide useless assets requests log entries
  gem 'rspec-rails' # Test all the things
  gem 'spring' # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'web-console' # Access an IRB console on exception pages or by using <%= console %> in views
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
