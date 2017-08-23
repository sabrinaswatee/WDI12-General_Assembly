=begin
Stock App
Build a Sinatra App that will take a stock symbol and display the stock price
The stock symbol e.g. APPL should be inputted via the url as query string
The result should be rendered in the browswer with ERB.
The background colour should be mistyrose.
Suggested Approach

Build a Sinatra application
Include:
app.rb
views/index.erb
public/styles.css

Define a method that makes a request to the YahooFinance api via the YahooFinance gem.
This method should take, as paramater, a stock ticker
This method should return data about the stock
Test this method manually in pry
Display, for example, google's stock price when there is GET request to /?stock=APPL

The file should be index.erb
All the above should work without the need of any form input.

Example yahoofinance library usage:
require 'yahoofinance'
result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
=end

require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'
require 'pry'

get '/' do
  @languages = ['javascript', 'python', 'php']
  erb :index
end

get '/stock' do
  symbol = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])
  quote = symbol[params[:stock]].lastTrade
  # "last quote: #{quote}"

  erb(:result, locals: {
    price: quote,
    cool_name: 'bitsPlease'
  })
end

# binding.pry
