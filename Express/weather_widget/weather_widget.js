
var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + process.argv[2] + '&APPID=f406c9845cd234b05b4a185645cad86a';

request(url, function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('city:', JSON.parse(body).name);
  console.log('temperature:', JSON.parse(body).main.temp);
});
