var http = require('http');
var url = require('url');
var fs = require('fs');

// debugger
var app = function (request, response) {

  var path = url.parse(request.url).pathname;
  if (path === '/about') {
    var file = fs.readFileSync('about.html').toString();      //synchronous request
    response.writeHead(200, { 'content-Type': 'text/html' });
    response.write(file);
    // response.end();
  }
  else {
    response.writeHead(404);
    response.write('Not found');
    // response.end();
  }
response.end();
  // if (request.method === 'GET' && request.url === '/about') {
  //   fs.readFile('./about.html', 'utf-8', function(err, data) { //asynchronous request
  //     response.write(data);
  //     response.end();
  //   });
  // };
};

var server = http.createServer ( app );
server.listen(9000);
