
require 'pry'

counter = 1

class Coffee

  attr_accessor :type, :sugar, :size, :name

  def initialize (input_type, input_sugar, input_size, input_name)
    @type = input_type
    @sugar = input_sugar
    @size = input_size
    @name = input_name.capitalize
  end

  def to_s
    print "#{name}'s #{type}, #{size}, #{sugar} sugars \n"
  end

end

order_list = []

puts "Welcome to Starbucks Self-order App"
print "Would you like to place an order? (y/n): "
selection = gets.chomp

while selection == 'y'
  print "Type of coffee: "
  input_type = gets.chomp
  print "No of Spoons of sugar: "
  input_sugar = gets.chomp.to_i
  print "Size of coffee: "
  input_size = gets.chomp
  print "Name of customer: "
  input_name = gets.chomp

  # coffee_name = 'c' + counter.to_s;
  # counter += 1
  #
  # coffee_name = []
  c1 = Coffee.new(input_type, input_sugar, input_size, input_name)
  order_list.push(c1)

  print "Would you like to place another order? (y/n): "
  selection = gets.chomp
end

binding.pry

