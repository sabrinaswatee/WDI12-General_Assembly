
var spiner = function (input) {
  var regexp = /[\W_0-9]/g;
  return input.split(regexp).join('-').toLowerCase();
};

var input = prompt('Enter: ');
console.log (spiner(input));
