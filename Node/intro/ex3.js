// write a command line program that sums numbers

// $ node ex3.js 1 2 3
// $ 6

var total = 0;

for (var i = 2; i < process.argv.length; i++) {
  total += Number(process.argv[i]);
}

console.log(total);

// console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]));
