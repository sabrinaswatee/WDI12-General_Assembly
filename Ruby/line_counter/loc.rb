# read a file I pass in
# use some progamming magic to work how many lines

# a function to read a file
# what format does it come back as?

# print it out as
# 17 lines

require 'pry'

# binding.pry

counter = 0

file = File.open(ARGV[0], "r")
file.each_line do |line|
  counter += 1
end

puts "#{counter} lines"
file.close

# file.split("\n").length + 1
# file.count("\n")
# File.readLines(file) <- returns an array
# File.read(file) <- returns a string
