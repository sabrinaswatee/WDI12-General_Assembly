// function expression
var doubleMe = function (number) {
  return number * 2;
}

/* function declaration
1. This function has a name
2. Good for debugging
function doubleMe (number) {
  return number + number;
} */

doubleMe(5); // wont appear on screen
console.log(doubleMe(5)); // prints on to screen
console.log(doubleMe(5, 6)); // ignores second value

var calmYourself = function (stuff) {
  return stuff.toLowerCase();
}

var word = calmYourself('NOOOOO!'); // returns noooo!
var wordOne = word.split('!'); // ["noooo", ""]
var wordTwo = wordOne[0]; // "nooooo"


var launchMissile = function () {
  var numberOfMissile = 3;
  console.log(numberOfMissile + ' missilies launched');
  console.log('missed all targets');
}
