
require 'pry'

class Player

  def initialize

  end

end

print "Welcome to Texas Hold'em Poker Game\nHow many players (2-8) ? "
noOfPlayers = gets.chomp.to_i
players = []

for i in 0..noOfPlayers
  players[i] = Player.new
end

binding.pry
