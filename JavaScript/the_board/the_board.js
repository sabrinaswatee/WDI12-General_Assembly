
var height = prompt ('Height?');
var width = prompt ('Width?');
var symbol = [];

for (var i = 1; i <= height; i++) {
  for (var j = 1; j <= width * 2; j++) {
    if ((i + j) % 2 == 0) {
      symbol.push('#');
    }
    else {
      symbol.push(' ');
    }
  }
  console.log(symbol.join('') + '\n');
  symbol = [];
}
