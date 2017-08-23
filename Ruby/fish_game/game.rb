require 'pry'

class Fish

  def initialize(starting_name)# this is a method, it can take arguments
    @name = starting_name # scope of this variable?? local
    @health = 100
  end

  def sleep
    @health = @health + 10
  end

  def get_name
    return @name #can get name without calling intialization because it is alive
  end

  def get_health
    return @health
  end

  def health=(new_health)
    @health = new_health
  end

end

binding.pry
