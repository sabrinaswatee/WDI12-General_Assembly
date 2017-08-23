
require 'pry'

class Say


  @@num_words = {
    0 => 'zero',
    1 => 'one',
    2 => 'two',
    3 => 'three',
    4 => 'four',
    5 => 'five',
    6 => 'six',
    7 => 'seven',
    8 => 'eight',
    9 => 'nine',
    10 => 'ten',
    11 => 'eleven',
    12 => 'twelve',
    13 => 'thirteen',
    14 => 'fourteen',
    15 => 'fifteen',
    16 => 'sixteen',
    17 => 'seventeen',
    18 => 'eighteen',
    19 => 'nineteen',
    20 => 'twenty',
    30 => 'thirty',
    40 => 'fourty',
    50 => 'fifty',
    60 => 'sixty',
    70 => 'seventy',
    80 => 'eighty',
    90 => 'ninety'
  }

  def initialize (num)
    @num = num
    if num >= 0 && num <= 20
      @num
    elsif num > 20 && num < 100
      first_digit = num.to_s[0].to_i * 10
      remainder = num % first_digit
      @array = [first_digit, remainder]
    end
  end

  def in_english
    if @num < 0 || @num > 99
      raise "Out of range"
    elsif @@num_words[@num]
      @message = @@num_words[@num]
    else
      @message = @@num_words[@array[0]] + '-' + @@num_words[@array[1]]
    end
  end

  puts @message
  
end

binding.pry
