
var golfScores = [
  {
    name: 'Bob',
    scores: [3, 2, 6, 11, 9, 2, 6, 9, 10]
  },
  {
    name: 'Jimbo',
    scores: [5, 12, 9, 22, 13, 7, 16, 10, 11]
  },
  {
    name: 'Fish',
    scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
  }
];
var total = 0;
var par = [3, 4, 5, 5, 3, 3, 4, 3, 5];
var diff = [];

var getIndex = function (name) {
  for (var num = 0; num < golfScores.length; num++) {
    if (golfScores[num].name == name) {
      return num;
    }
  }
}

var totalScores = function (name) {
  var index = getIndex (name);
  for (var count = 0; count < golfScores[index].scores.length; count++) {
    total += golfScores[index].scores[count];
  }
  console.log (name + ': ' + total);
}

var checkPar = function (name) {
  var index = getIndex (name);
  for (var number = 0; number < golfScores[index].scores.length; number++) {
    diff.push(golfScores[index].scores[number] - par[number]);
  }
  console.log (diff);
}

var name = prompt ('Name?');
totalScores (name);
checkPar (name);

