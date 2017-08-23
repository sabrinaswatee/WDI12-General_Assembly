
const hackers = [{
  name: 'Kit',
  dangerous: false,
  bankBalance: 2000
}, {
  name: 'Javed',
  dangerous: false,
  bankBalance: 3200
}, {
  name: 'Sam',
  dangerous: true,
  bankBalance: 7900
}, {
  name: 'Adrian',
  dangerous: true,
  bankBalance: 9500
}];

// write some code to get total amount dngerous hackers make
// including GST 10% of bankBalance
// var dangerousHackers = [];
// var total = 0;
//
// hackers.forEach ( function (hacker) {
//   if (hacker.dangerous === true) {
//     total += (hacker.bankBalance * 1.1);
//   };
// });
//
// dangerousHackers.forEach (function (hacker) {
//   total += (hacker.bankBalance * 1.1);
// });
//
// console.log(total);
//
// // another version
// hackers.forEach ( function (hacker) {
//   if (hacker.dangerous === true) {
//     total += (hacker.bankBalance * 1.1);
//   };
// });
//
// console.log(total);


// Higher level instructions
// select dangerous hackers
// sum to get total

// var total = hackers
// .filter(function(hacker) {
//   return hacker.dangerous === true;
// }) // dangerous hackers as an array
// .map(function(hacker) {
//   return hacker.bankBalance * 1.1;
// }) // balance with GST as an array
// .reduce(function(total, value) {
//   return total + value;
// })
//
// console.log(total);


//

var total = hackers
.filter(hacker => hacker.dangerous === true) // dangerous hackers as an array
.map(hacker => hacker.bankBalance * 1.1) // balance with GST as an array
.reduce((total, value) => total + value)

console.log(total);
