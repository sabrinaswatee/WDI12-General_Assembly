var request = require('request');
var express = require('express');
var app = express();
const PORT = 5000;

app.set('views', './views');
app.set('view engine', 'ejs');

// request for style.css
app.use(express.static(__dirname + 'public'));    // to read static file like style.css
app.use(function(req, res, next) {
  console.log(`${req.method} request ${req.path} at ${new Date()}`);
  next();
});

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/details', function(res, req) {
  res.send(req.query.movie);
  // request({
  //   uri: 'http://www.omdbapi.com/',
  //   qs: { t: req.query.movie,
  //         apiKey: '2f6435d9'}
  // }, function(err, apiResponse, body) {
  //   var movie = JSON.parse(body);
  //   res.render('details', {title: movie.Title})
  // });
});

app.get('/about', function(req, res) {
  // res.send(req.query.movie);
  request({
    uri: 'http://www.omdbapi.com/',
    qs: { t: req.query.movie,
          apiKey: '2f6435d9'}
  }, function(err, apiResponse, body) {
    var movie = JSON.parse(body);
    res.render('about', {title: movie.Year})
  });
  // res.render('about');
});

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
