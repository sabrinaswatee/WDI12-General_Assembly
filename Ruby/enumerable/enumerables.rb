require 'pry'

# in js we call it higher order functions

languages = ['js', 'ruby', 'php']

languages.each do |lang|
  puts lang
end

languages.find do |lang|
  if lang == 'ruby'
    lang
  end
end

# map as transform
# ['js', 'ruby', 'php']
#
# ['JS', 'RUBY', 'PHP']
upcased_languages = languages.map { |lang| lang.upcase }


lucky_numbers = [1, 7, 21]

total = 0
lucky_numbers.each do |num|
  total += num
  puts total
end


song = {
  title: 'call me maybe',
  artist: 'jackson'
}

song.each do |key_value_pair|
  puts key_value_pair
end

# binding.pry
