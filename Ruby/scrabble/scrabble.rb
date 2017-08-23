
require 'pry'

class Scrabble

  def self.score(word)
    print "None, double letter, triple letter, double word or triple word: "
    play = gets.chomp.downcase
    @board = [1, 2, 3, 4, 5, 8, 10]
    @letter = ['[AEIOULNRST]', '[DG]', '[BCMP]', '[FHVWY]', '[K]', '[JX]', '[QZ]']

    if (play == 'double letter' || play == 'triple letter')
      print "Letter: "
      play_letter = gets.chomp.upcase
    end

    score = 0
    boolean = false

    word.split('').each_index do |index|
      counter = 0
      loop do
        if word[index].upcase.scan(Regexp.new(@letter[counter])) != []
          if (play == 'double letter' && play_letter == word[index].upcase)
            score += @board[counter] * 2
          elsif (play == 'triple letter' && play_letter == word[index].upcase)
            score += @board[counter] * 3
          else
            score += @board[counter]
          end
          boolean = true
        else
          counter += 1
          boolean = false
        end
        break if (boolean == true)
      end
    end

    if (play == 'double word')
      puts score * 2
    elsif (play == 'triple word')
      puts score * 3
    else
      puts score
    end
  end

end

binding.pry

