class Zombie

  attr_accessor :name, :brains_eaten

  def initialize(name='Frank', brains_eaten=0, is_hungry=true)
    @name = name
    @brains_eaten = brains_eaten
    @is_hungry = is_hungry
  end

  def hungry?
    @is_hungry
  end

  def eat
    @brains_eaten += 1
  end

end
