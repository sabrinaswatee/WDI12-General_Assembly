
require 'pry'

def can_make_word (word)

  blocks = [['B','O'], ['X','K'], ['D','Q'], ['C','P'], ['N','A'], ['G','T'], ['R','E'],
  ['T','G'], ['Q','D'], ['F','S'], ['J','W'], ['H','U'], ['V','I'], ['A','N'],
  ['E','R'], ['F','S'], ['L','Y'], ['P','C'], ['Z','M']]
  response = []

  word.split('').each do |letter|
    for i in 0..(blocks.length - 1)
      if blocks[i].include? letter
        blocks.slice!(i)
        response.push '1'
        # binding.pry
        break
      elsif !blocks[i].include? letter && i == (blocks.length - 1)
        response.push '0'
        # binding.pry
      else
        binding.pry
        next
      end
    end
  end

  if response.include? '0'
    false
  else
    true
  end

end

binding.pry
