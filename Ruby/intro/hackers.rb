# create directories for each first name only lowercased
# for each directory inside create a new file named README.md

# intro
# |
# |--- john
#        |--- README.md
# |--- mary
#        |--- README.md
# |--- bits
#        |--- README.md

# making directories
# changing directories
# making files
# paths
# working arrays (index, iterating)
# working with string methods (lowercase)

require 'pry'
require 'fileutils' # look up fnctions in this library

puts 'hello world'

# .each that you can call on an array
# between do and end it is called a block
hackers = ['John Smith', 'Mary Jane', 'Bits Please']

hackers.each do |hacker|
  dir_name = hacker.split(' ').first.downcase
  FileUtils.mkdir (dir_name)
  FileUtils.cd (dir_name) do
    FileUtils.touch ('README.md')
  end
end

# binding.pry
