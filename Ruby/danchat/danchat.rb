
require 'pry'

loop do
  print "Chat with Danny: "
  my_chat = gets.chomp
  puts my_chat
  if my_chat.split('').last == '?'
    puts "Sure."
  elsif my_chat == my_chat.upcase
    puts "Woah, chill out!"
  elsif my_chat == 'Daniel' || my_chat == 'daniel'
    puts "Fine. Be that way!"
  elsif my_chat == 'bye'
    break
  elsif my_chat.split(' ').first == 'Bro,' || my_chat.split(' ').first == 'bro,'
    counter = 1
    my_chat.split('').each_index do |index|
      # print "#{my_chat} \n"
      # print "#{my_chat[index + 5]} \n"
      if my_chat[index + 5].scan(/[aeiou ]/) == []
        print "#{my_chat[index + 5]} \n"
        my_chat[index + 5] = my_chat[index + 5].upcase
      #   if my_chat[index + 5] == my_chat[index + 5].upcase && counter % 2 == 0
      #     my_chat[index + 5] = my_chat[index + 5].downcase
      #     counter += 1
      #   else
      #     my_chat[index + 5] = my_chat[index + 5].upcase
      #     counter += 1
      #   end
      # else
      #   my_chat[index + 5] = my_chat[index + 5]
      end
    end
    my_chat.gsub(/[aeio]/, 'a' => 4, 'e' => 3, 'i' => 1, 'o' => 0)
    if counter % 2 == 0

    puts my_chat.split(' ').slice(1, my_chat.length - 1).join(' ').capitalize
  else
    puts "Whatever."
  end
end
