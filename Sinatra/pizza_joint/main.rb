=begin
Movies I

Specification
Build a search form that lets the user enter a movie name.
The Sinatra app will use HTTParty to fetch the data for the chosen
movie from OMDB and display it on the page.

Build a Sinatra application
Include:
app.rb
views/layout.erb
views/index.erb
views/about.erb
public/css/style.css
example httparty usage

requrie 'httparty'
result = HTTParty.get('http://omdbapi.com/?t=once')
=end
require 'sinatra'
require 'httparty'

get '/' do
  erb :index
end

get '/rate' do
  name = params[:currency]
  symbol = HTTParty.get("http://api.fixer.io/latest?base=#{name}")
  @rates = symbol["rates"]
  # "last quote: #{rates}"

  erb :results
end
