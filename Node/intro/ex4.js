// fs stands for file system module/standard library/api

var fs = require('fs'); // fs is an object

var buffer = fs.readFileSync('ex1.js'); // this function will block everything because of the word Sync

console.log( buffer.toString() ); // buffer is in low level format, change to string to read it
