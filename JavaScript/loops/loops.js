console.log('ready loopy');

var count = 1;
while (count <= 20) {
  console.log(count);
  count++;
}

for (var num = 1; num <=20; num++) {
  console.log(num);
}

for (var no = 1; no <= 100; no++) {
  if (no % 3 === 0) {
    console.log("Cake");
  }
  else if (no % 5 === 0) {
    console.log("Pudding");
  }
  else if (no % 3 === 0 && no % 5 === 0) {
    console.log("Cake Pudding");
  }
  else {
    console.log(no);
  }
}

var secretNumber = 42;
var guess = prompt('Enter a number between 30 to 50');
while (guess != secretNumber) {
  if (guess >= 30 && guess < 42) {
    var guess = prompt('Too low! Try again');
  }
  else if (guess > 42 && guess <= 50) {
    var guess = prompt('Too high! Try again');
  }
  else if (guess != secretNumber){
    var guess = prompt('Enter a number between 30 to 50');
  }
}
alert('Good job!');

// for (var j = 1; j <= 4; j++) {
//   var space = 4 - j;
//   var dollar = (2 * j) - 1;
//   for (var k = 1; k <= 7; k++) {
//     console.log('' +)
//
//   }
//
// }
