// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var today = new Date ();
var year = today.getFullYear();

var calculateAge = function (birthYear, currentYear) {
  var age = currentYear - birthYear;
  console.log('You are either ' + age + ' or ' + (age - 1));
}

calculateAge (1988, year);
calculateAge (2012, year);
calculateAge (1976, year);

//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

var lengths = function (strings) {
  var stringLength = strings.map (function (variables) {
    return variables.length;
  });
  return stringLength;
}

var arrayOfString = ['number', 'string', 'boolean', 'undefined', 'null', 'NaN'];
console.log (lengths (arrayOfString));

// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function (numOne, numTwo, power) {
  var base = numOne * numTwo;
  return Math.pow(base, power);
}

console.log (transmogrifier (1, 2, 3));

// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

var wordReverse = function (word) {
  return word.split("").reverse().join("");
}

console.log (wordReverse (prompt ('Type a word')));
