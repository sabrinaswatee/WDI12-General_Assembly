require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  # erb (:index, layout: true) turning on the layout
  # erb (:index, layout: false) turning off layout
  erb :index #default layout on
end

get '/result' do
  first_num = params[:first_num].to_f
  second_num = params[:second_num].to_f
  total = first_num + second_num
  "the sum in #{total}"
end

# only displays the latest line
#get http://localhost:4567/calc?num1=7&num2=3
get '/calc' do
  # binding.pry
  "the number you passed in are #{params['num1']} and #{params[:num2]} \n" +
  "the sum of them is #{params[:num1].to_i + params[:num2].to_i}"
  # 'should return sum of 2 numbers'
end
