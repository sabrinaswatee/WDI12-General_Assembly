
var number = process.argv[2];
// var romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
var normalToRoman = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};

var convertToRoman = function (number) {
  var numArray = number.split('');
  var romanArray = [];
  numArray.forEach(function(num) {


    romanArray.push(normalToRoman[num]);
    console.log(romanArray.join(''));
  })
};

convertToRoman(number);
