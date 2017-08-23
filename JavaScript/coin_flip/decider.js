
var coinFlip = function () {
  var counter = [0, 0];
  var randomGenerator = Math.floor (Math.random () * 2);

  if (randomGenerator == 0) {
    console.log ('Head');
    counter[0]++;
  }
  else {
    console.log ('Tail');
    counter[1]++;
  }

  if (counter[0] > counter[1]) {
    console.log ('Head is winner!');
  }
  else {
    console.log ('Tail is winner!');
  }
}

