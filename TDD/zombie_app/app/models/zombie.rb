class Zombie < ApplicationRecord

  has_secure_password

  validates :name, presence: true
  validates :password, length: { minimum: 8 }
end
