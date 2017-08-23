
# def countdown(num)
#   while num > 0
#     puts num
#     num -= 1
#   end
# end
#
# countdown(10)

total = 0

def countdown(num)
  if num <= 0
    puts 'blast off'
  else
    puts num
    countdown(num - 1)
  end
end

countdown(10)
