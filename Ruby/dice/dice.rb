
require 'pry'

class Dice

  @@rolls = []
  @@dice_face = [
    ["|   |", "| * |", "|   |"],
    ["|   |", "|* *|", "|   |"],
    ["|   |", "|***|", "|   |"],
    ["|* *|", "|   |", "|* *|"],
    ["|* *|", "| * |", "|* *|"],
    ["|* *|", "|* *|", "|* *|"],
    ["|* *|", "|***|", "|* *|"],
    ["|***|", "|* *|", "|***|"],
    ["|***|", "|***|", "|***|"],
  ]

  def self.print_dice (count)
    counter = 0
    puts "_____"
    3.times do
      puts @@dice_face[count - 1][counter]
      counter += 1
    end
    puts "_____"
  end

  def self.roll(num = 1)
    @@rolls = []
    random_array = []
    if num == 1
      random_num = Random.rand(1..6)
      puts random_num
      print_dice(random_num)
    else
      num.times do
        randon_num = Random.rand(1..6)
        random_array.push random_num
      end
      @@rolls.push random_array
      puts "#{random_array} \n"
    end
    self
  end

  def self.sum
    total = @@rolls[0].sum
    @@rolls.push total
    print @@rolls
  end

end

binding.pry


