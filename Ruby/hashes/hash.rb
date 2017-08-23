require 'pry'

# object in js - can put data and/or functions
# hash in ruby - cannot put function, purely data
# not objects, hence cant use object notation
# also known as dictionary (key, value) pairs in python
song = {
  title: 'call me maybe',
  artist: 'jackson'
}

# old ruby hash syntax
# song = {
#   :title => 'call me maybe',
#   :artist => 'jackson'
# }

class_size = 7

wdi_class = {
  'name' => 'bitsPlease',
  'size' => class_size,
  :students => ['a', 'b', 'c'],
  :fav_color => {
    name: 'mistyrose'
  }
}

# like an array so WHY??
list = {
  0 => 'thing'
}
# list = ['thing']

binding.pry


users["Anil"][:favorite_numbers].find do |num|
  if num % 2 == 0
    array.push num
  end
end
