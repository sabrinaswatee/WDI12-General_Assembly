
require 'pry'

class Allergies

  @@list = {
    'eggs' => 1,
    'peanuts' => 2,
    'shellfish' => 4,
    'strawberries' => 8,
    'tomatoes' => 16,
    'chocolate' => 32,
    'pollen' => 64,
    'cats' => 128
  }

  def initialize(score)
    @score = score
    @contain = []
    calculate = 0

    reversed_list = Hash[@@list.to_a.reverse]
    reversed_list.each do |key, value|
      calculate = calculate + value
      if value < @score && calculate <= @score
        @contain.push(key)
      else
        calculate = calculate - value
      end
    end
  end

  def list
    @contain
  end

  def allergic_to?(item)
    if @contain.include? item
      return true
    else
      return false
    end
  end

end

binding.pry

allergies = Allergy.new(34)
