 
require 'pry'

class Dice

  def self.roll num=nil
    return puts display_face rand(1..6) if num == nil

    results = []
    num.times do
      roll = rand(1..6)
      results.push roll
      puts display_face roll
    end
    new results
  end

  def self.display_face num
    face = [" ----- "]
    if num == 1
      face.push "|     |", "|  *  |", "|     |"
    elsif num == 2
      face.push "|  *  |", "|     |", "|  *  |"
    elsif num == 3
      face.push "| *   |", "|  *  |", "|   * |"
    elsif num == 4
      face.push "| * * |", "|     |", "| * * |"
    elsif num == 5
      face.push "| * * |", "|  *  |", "| * * |"
    elsif num == 6
      face.push "| * * |", "| * * |", "| * * |"
    end
    face.push " ----- "
  end

  def initialize values
    @values = values
  end

  def sum 
    output = [@values]
    sum = 0
    @values.each { |v| sum += v }
    output.push sum
  end

end

binding.pry
