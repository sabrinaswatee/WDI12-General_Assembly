
require 'pry'

class Robot

  def initialize
    @counter = 0
    @creation = Time.now
    @boot = Time.now
    random_name = [('AA'..'ZZ').to_a.sample, ('000'..'999').to_a.sample]
    @name = random_name.join('')
  end

  def name
    @counter += 1
    return @name
  end

  def reset
    random_name = []
    random_name.push Random.rand(65..90).chr
    random_name.push Random.rand(65..90).chr
    random_name.push Random.rand(100..999).to_s
    @name = random_name.join('')
    @counter += 1
    @boot = Time.now
  end

  def instruction_count
    return @counter
  end

  def timers
    @counter += 1
    creation_time = (Time.now - @creation).round
    boot_time = (Time.now - @boot).round
    print "#{boot_time} seconds since last boot, #{creation_time} seconds since creation"
  end

end

# puts "Robot 1: "
# robot1 = Robot.new
# puts robot1.name
# puts robot1.name
# puts robot1.name
#
# puts "Robot 2: "
# robot2 = Robot.new
# puts robot2.name
# puts robot2.name
# puts robot2.name
#
# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# puts robot3.instruction_count
#
# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.timers
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.timers
# puts robot3.name

binding.pry
