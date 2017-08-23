
# reading
# get '/dishes'
# get '/dishes/:id'
# get '/dishes/new'  # optional - getting a new empty form
# get '/dishes/:id/edit'  # optional

# create
# post '/dishes'

# delete
# delete '/dishes/:id'

# update
# patch '/dishes/:id'

require 'sinatra'
require 'sinatra/reloader'
# require 'active_record'
require 'pry'
require 'pg'

# require_relative 'models/dish'

# $dishes = [
#   {
#     name: 'pudding',
#     image_url: 'http://img.sndimg.com/food/image/upload/v1/img/recipes/42/71/vtKZLiMzRnyiHRS1GmZ6_Vanilla-Pudding-7.jpg'
#   },
#   {
#     name: 'cake',
#     image_url: 'http://img.taste.com.au/ua3rYMoq/taste/2016/11/sticky-date-pudding-with-caramel-sauce-39519-1.jpeg'
#   }]

def run_sql(sql)
  conn = PG.connect(dbname: 'goodfoodhunting')
  result = conn.exec(sql)
  conn.close
  result
end

get '/dishes' do
  # # connect to database
  # conn = PG.connect(dbname: 'goodfoodhunting')
  # # execute a sql statement to get all records back as arrays of hashes
  # @dishes = run_sql('SELECT * FROM dishes ORDER BY name;')
  @dishes = Dish.all
  erb :index
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  sql = "INSERT INTO dishes(name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"
  run_sql(sql)
  redirect '/dishes'
end

get '/dishes/:id/edit' do
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id]};"
  @dish = run_sql(sql)[0]
  binding.pry
  erb :edit
end

patch '/dishes/:id' do
  run_sql("UPDATE dishes SET name = '#{ params[:name] }', image_url = '#{ params[:image_url] }' WHERE id = #{ params[:id]};")
  redirect '/dishes'
end

# http://localhost:4567/dish_details/cake
get '/dishes/:id' do
  # lines = File.readlines('dishes.csv')
  #
  # @dishes = lines.map do |line|
  #   hash = {}
  #   name, image_url = line.split(', ')
  #   hash[:name] = name
  #   hash[:image_url] = image_url
  #   hash
  # end
  #
  # @dish = @dishes.find do |dish|
  #   params[:dish_name] == dish[:name]
  # end
  sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
  @dish = run_sql(sql)[0] #{params[:id]};")
  @comments = run_sql("SELECT * FROM comments WHERE dish_id = #{params[:id]};")
  erb :dish_details
end

delete '/dishes/:id' do
  run_sql("DELETE FROM dishes WHERE id = #{ params[:id]};")
  redirect '/dishes'
end

post '/comments' do
  sql = "INSERT INTO comments (body, dish_id) VALUES ('#{ params[:body] }', #{ params[:dish_id] });"
  run_sql(sql)
  redirect "/dishes/#{ params[:dish_id] }"
end
