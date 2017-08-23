// var express = require('express');
// var app = express();

var app = require('express')();     // same as lines above
const PORT = 5000;                  // someone not meant to be changed is const in all caps

app.get('/', function(req, res) {

  // res.write('hello world');
  // res.end();
  res.send('hello world');          // same as two lines abpve

});

app.listen(PORT);
