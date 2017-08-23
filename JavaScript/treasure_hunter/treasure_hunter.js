
var treasureFinder = function (bigArray) {
  for (var i = 0; i < bigArray.length; i++) {
    var smallArray = bigArray[i];
    for (var j = 0; j < smallArray.length; j++) {
      if (bigArray[i][j] == 'X') {
        console.log ('[' + i + ', ' + j + ']');
      }
    }
  }
};

var bigArray = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

treasureFinder (bigArray);

/* Bonus */

var counter = 0;

var treasureFinder = function (bigArray, letter) {
  for (var i = 0; i < bigArray.length; i++) {
    var smallArray = bigArray[i];
    for (var j = 0; j < smallArray.length; j++) {
      if (bigArray[i][j] == letter) {
        console.log ('[' + i + ', ' + j + ']');
      }
    }
    if (smallArray.indexOf (letter) == -1) {
      counter++;
    }
  }
  if (counter == bigArray.length) {
    console.log ("that doesn't belong in a museum!");
  }
  counter = 0;
};

var bigArray = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

treasureFinder (bigArray, 'G');
treasureFinder (bigArray, 'H');
treasureFinder (bigArray, 'B');
