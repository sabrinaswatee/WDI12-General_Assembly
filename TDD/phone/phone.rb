# require 'pry'

class Phone
  def initialize (number)
    @number = number
  end

  def number
    if @number.length == 9
      @number = "0000000000"
      @number
    elsif @number.length == 11
      if @number[0] == '1'
        @number = @number[1..10]
        @number
      else
        @number = "0000000000"
        @number
      end
    else
      unwanted = /\W/
      @number = @number.gsub!(unwanted, "")
      if @number.length == 10
        @number
      end
    end

  end

  def area_code
    @number = @number[0..2]
    @number
  end

  def to_s
    @number = "(#{@number[0..2]}) #{@number[3..5]}-#{@number[6..10]}"
  end

end

# binding.pry
