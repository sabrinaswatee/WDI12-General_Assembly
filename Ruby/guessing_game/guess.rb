=begin
Title: Guess The Number

Activity:
You are to generate a basic "guess my number" game. The computer will pick a random
number between 0 and 10. The user will guess the number until they guess correctly.
Specification:

The user should be asked to guess a number
If the user's guess is correct, the user should see a congratulatory message
If the user's guess is not correct, the user should be asked to guess the number again.
=end

puts "Guess a number between 1-10"
guessed_number = gets.chomp.to_i

random_number = rand(0..10)
# puts random_number

while guessed_number != random_number
  puts "Keep guessing"
  guessed_number = gets.chomp.to_i
end

puts 'Congrats'

=begin
Extensions:
Let the user choose the maximum value (so they can play a long game with a random
value between 0 and 10000, for example).
Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"
=end

puts "What's your maximum value?"
max_value = gets.chomp.to_i
puts "Guess a number between 1-#{max_value}"
guessed_number = gets.chomp.to_i

random_number = rand(0..max_value)
puts random_number

while guessed_number != random_number
  if guessed_number < random_number
    puts "Wrong, guess higher!"
    guessed_number = gets.chomp.to_i
  elsif guessed_number > random_number
    puts "Wrong, guess lower!"
    guessed_number = gets.chomp.to_i
  end
end

puts 'Congrats'
