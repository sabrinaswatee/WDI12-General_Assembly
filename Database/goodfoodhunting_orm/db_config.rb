
require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting',
  username: 'sabrina'
}

ActiveRecord::Base.establish_connection(options)
