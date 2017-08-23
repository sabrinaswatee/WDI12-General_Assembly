
class User < ActiveRecord::Base
  has_secure_password # this gives you 2 methods .password and .authenticate
end
