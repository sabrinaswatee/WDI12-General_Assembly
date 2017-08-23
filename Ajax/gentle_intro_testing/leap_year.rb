def leap_year? (year)
  year = year.to_i
  
  if year % 4 != 0
    false
  elsif year % 100 != 0
    true
  elsif year % 400 != 0
    false
  else
    true
  end
end

# if leap_year?(2000) == true
#   puts 'yay'
# end
#
# def test (expected, actual)
#   if expected == actual
#     puts 'yay'
#   else
#     puts 'nay'
#   end
# end
#
# test true, leap_year?(2000)
# test false, leap_year?(2001)
