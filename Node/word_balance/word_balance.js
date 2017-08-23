
var word = process.argv[2].toUpperCase();
var letter_value = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var word_balance = function (word) {
  var word_array = word.split('');
  for (var i = 1; i < word_array.length; i++) {
    var pivot = word_array[i];

    var left_array = word_array.slice(0, i);
    var left_value = 0;
    for (var j = 0; j < left_array.length; j++) {
      left_value += (i - j) * (letter_value.indexOf(left_array[j])+1);
    }

    var right_array = word_array.slice(i+1, word_array.length);
    var right_value = 0;
    for (var k = 0; k < right_array.length; k++) {
      right_value += (k + 1) * (letter_value.indexOf(right_array[k])+1);
    }

    if (left_value == right_value) {
      console.log (left_array.join('') + ' ' + pivot + ' ' + right_array.join('') + '-' + left_value);
      break;
    }
    else if (i + 1 == word_array.length && left_value != right_value) {
      console.log (word + ' Does not balance');
    }
    else {
      continue;
    };
  };
};

word_balance(word);
