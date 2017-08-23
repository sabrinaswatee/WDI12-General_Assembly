var http = require('http');

//                 (request, response) callback signature
var app = function (request, response) {
  response.write('hello world');
  response.end();
};

var server = http.createServer( app );

server.listen(9000);
