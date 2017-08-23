
var fs = require('fs');
var file = fs.readFileSync('cybersec.txt').toString();

var output = {};
var linearray = file.split('\n');

for (var i = 1; i < linearray.length - 1; i++) {
  var wordarray = linearray[i].split(',');
  if (!output[wordarray[0]]) {
    output[wordarray[0]] = [{
      'product': wordarray[1],
      'unitPrice': Number(wordarray[2]).toFixed(2),
      'units': wordarray[3],
      'totalPrice': Number(wordarray[2] * wordarray[3]).toFixed(2)
    }];
  }
  else {
    output[wordarray[0]].push({
      'product': wordarray[1],
      'unitPrice': Number(wordarray[2]).toFixed(2),
      'units': wordarray[3],
      'totalPrice': Number(wordarray[2] * wordarray[3]).toFixed(2)
    });
  }
};

console.log(output);
