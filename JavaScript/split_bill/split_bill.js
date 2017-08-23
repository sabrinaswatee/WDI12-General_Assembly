
var group = {
  A: 20,
  B: 15,
  C: 10
};
var result = {};

var split_bill = function (group) {
  var average = 0;
  Object.values(group).forEach (function (value) {
    average += value;
  });
  average = average / Object.values(group).length;

  for (var person in group) {
    result[person] = group[person] - average;
  }
};

split_bill(group);
console.log(result);
