
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
require 'pry'
require 'pg'

require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/comment'
require_relative 'models/user'
require_relative 'models/dish_type'

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

helpers do
  def logged_in?
    current_user ? true : false
    # !!current_user
  end

  def current_user
    User.find_by(id: session[:user_id])
  end
end

enable :sessions

get '/dishes' do
  # # connect to database
  # conn = PG.connect(dbname: 'goodfoodhunting')
  # # execute a sql statement to get all records back as arrays of hashes
  # @dishes = run_sql('SELECT * FROM dishes ORDER BY name;')
  @dishes = Dish.all
  erb :index
end

get '/dishes/new' do
  @dish_types = DishType.all
  erb :new
end

post '/dishes' do
  # sql = "INSERT INTO dishes(name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"
  # run_sql(sql)
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.dish_type_id = params[:dish_type_id]

  if dish.save
    redirect '/dishes'
  else
    erb :new
  end
end

get '/dishes/:id/edit' do
  # sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
  # @dish = run_sql(sql)
  @dish_types = DishType.all
  @dish = Dish.find(params[:id])
  erb :edit
end

patch '/dishes/:id' do
  # run_sql("UPDATE dishes SET name = '#{ params[:name] }', image_url = '#{ params[:image_url] }' WHERE id = #{ params[:id]};")
  dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.imge_url = params[:image_url]
  dish.save
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

  @dish = Dish.find(params[:id])
  @comments = Comment.where(dish_id: params[:id])
  erb :dish_details
end

delete '/dishes/:id' do
  # run_sql("DELETE FROM dishes WHERE id = #{ params[:id]};")
  dish = Dish.find(params[:id])
  dish.destroy
  redirect '/dishes'
end

post '/comments' do
  # are you logged in?
  redirect '/login' if !logged_in?
    sql = "INSERT INTO comments (body, dish_id) VALUES ('#{ params[:body] }', #{ params[:dish_id] });"
    run_sql(sql)
    redirect "/dishes/#{ params[:dish_id] }"
end

get '/login' do
  erb :login
end

post '/session' do
  # search for the user in db
  user = User.find_by(email: params[:email])
  # authenticate the user with password they gave
  if user && user.authenticate(params[:password])
    #create a session
    session[:user_id] = user.id
    #redirect to protected page
    redirect '/dishes'
  else
    erb :login
  end
end

delete '/session' do
  session[:user_id] = nil
  redirect '/dishes'
end
