
var grannyTalk = function (question) {
  if (question == question.toUpperCase()) {
    if (question == "BYE?") {
      var grannyResponse = "What's that honey, I didn't hear you..";
    }
    else {
      var year = (Math.floor(Math.random() * 21)) + 1930;
      var grannyResponse = "NO, NOT SINCE " + year;
    }
  }
  else {
    var grannyResponse = "SPEAK UP SONNY JIM";
  }
  return grannyResponse;
}

var grandpaTalk = function (response) {
    if (response == "What's that honey, I didn't hear you..") {
      var grandpaResponse = "What's that sunny, I didn't hear you.."
    }
    else if (response == "SPEAK UP SONNY JIM") {
      var grandpaResponse = "SPEAK UP HONEY JIM";
    }
    else {
      var incorrectYear = (Math.floor(Math.random() * 21)) + 1950;
      var grandpaResponse = "NO, NOT SINCE " + incorrectYear;
      }
  return grandpaResponse;
}


do {
  var question = prompt ("Ask Granny");
} while (question.charAt(question.length - 1) != "?");
var response = grannyTalk (question);
console.log(response);

var grandpa = prompt ("Want to hear grandpas translation?");
if (grandpa == "YES" || grandpa == "yes" || grandpa == "Yes") {
  console.log (grandpaTalk (response));
}
else {
  console.log ("Bye!");
}

