
var wordArray = [];

var palindromeSearch = function (word) {
  var lowerCase = word.toLowerCase().split("");
  for (var counter = 0; counter < lowerCase.length; counter++) {
    if (lowerCase[counter].match(/[a-z]/)) {
      wordArray.push (lowerCase[counter]);
    }
    else {
      continue;
    }
  }
  var wordString = wordArray.join("");
  var wordReversed = wordArray.reverse().join("");
  return wordString == wordReversed;
}

var word = prompt ('Is it a palindrome?');
var boolean = palindromeSearch (word);
console.log (boolean);

