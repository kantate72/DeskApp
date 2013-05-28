source 'https://rubygems.org'

gem 'rails', '3.2.8'
gem "bootstrap-sass", "~> 2.3.1.2"
gem 'bcrypt-ruby'
gem 'jquery-rails'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'compass-rails'

  gem 'uglifier', '>= 1.0.3'
end

#Sqlite for development db
group :development do
  gem 'sqlite3', '1.3.5'
  gem 'annotate', '2.5.0'
end

#Postgres for Heroku production
group :production do
  gem 'pg', '0.12.2'
end
