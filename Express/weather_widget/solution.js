
var request = require('request');
var geolocation = require('geolocation');
var _ = require('lodash');

var app = require('express')();
const PORT = 5000;

app.set('views', './views');
app.set('view engine', 'ejs');

var uri = 'http://api.openweathermap.org/data/2.5/weather';

app.get('/', function(req, res) {
  var latitude = 48.8698679;
  var longitude = 2.3072976;

  // geolocation.getCurrentPosition(function (err, position) {
  //   if (err) throw err
  //   console.log(position)
  // });

  request({
    uri: uri,
    qs: {
      lat: latitude,
      lon: longitude,
      // q: 'melbourne, au',
      units: 'metric',
      appid: process.env.OPEN_WEATHER_APP_KEY
    }
  }, function(error, response, body) {
    var body = JSON.parse(body);
    res.render('index', {temperature: body.main.temp, location: body.name});
  });

});

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
