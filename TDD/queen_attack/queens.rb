# require 'pry'

class Queens
  def initialize (white: [0,3], black: [7, 3])
    @white = white
    @black = black

    if @white == @black
      raise ArgumentError
    end
  end

  def white
    @white
  end

  def black
    @black
  end

  def to_s
    queenBoard = []
    for i in 0..7
      for j in 0..7
        if i == 2 && j == 4
          queenBoard.push 'W '
        elsif i == 6 && j == 6
          queenBoard.push 'B '
        elsif j == 7
          queenBoard.push 'O'
        else
          queenBoard.push 'O '
        end
      end
      if i < 7
        queenBoard.push "\n"
      end
    end
    queenBoard.join('')
  end

  def attack?
    if white[0] == black[0] || white[1] == black[1] || white[0] - black[0] == white[1] - black[1]
      true
    else
      false
    end
  end

end

# binding.pry
