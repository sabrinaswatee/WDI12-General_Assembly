require 'sinatra'

get '/' do
  erb :index
end


# user comes with a get request with the path /about
get '/about' do
  # my response
  # return 'about me'
  # return '<h1>about me</h1>'
  erb :about_me
end
