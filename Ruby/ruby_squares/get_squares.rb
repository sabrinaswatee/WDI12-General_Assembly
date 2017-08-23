
require 'pry'

def get_squares (array)
  squareArray = []
  array.each_index  do |index|
    if array[index] ** 0.5 == (array[index] ** 0.5).round
      squareArray.push array[index]
    end
  end
  squareArray.sort.uniq
end

# get_squares([4, 1, 16, 1, 10, 35, 22])

binding.pry
