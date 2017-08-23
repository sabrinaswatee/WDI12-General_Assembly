
order = []

print "Name for order: "
name = gets.chomp

loop do
  print "#{name.capitalize} wants to order: "
  item = gets.chomp
  order.push item
  print "Add another item to the order? (y/n)"
  yes_no = gets.chomp
  break if yes_no == 'n'
end

print "#{name.capitalize} ordered "
if order[0].split('').first.scan(/[aeiou]/) == []
  print "a "
else
  print "an "
end
order.each_index do |index|
  if index == order.length - 2
    print "#{order[index]} & "
  elsif index == order.length - 1
    print "#{order[index]} \n"
  else
    print "#{order[index]}, "
  end
end
