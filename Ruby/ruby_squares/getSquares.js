
var getSquares = function (array) {
  var squareArray = [];
  for (var index = 0; index < array.length; index++) {
    if (Math.sqrt(array[index]) == Math.round(Math.sqrt(array[index])))
      squareArray.push(array[index]);
  }
  console.log (squareArray);


  squareArray.sort(function(a, b) {
    return a - b;
  });
  //
  // squareArray.map ()
};
