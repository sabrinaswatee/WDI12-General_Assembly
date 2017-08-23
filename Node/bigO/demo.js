// a list of items

var list = [2, 4, 5, 1, 8, 5, 3];

// function findFirstRepeatedItem(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return arr[i];
//       };
//     };
//   };
//   console.log('No repetition found');
//
// };

function findFirstRepeatedItem(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      // obj[arr[i]] = 1;
      obj[arr[i]] = true;
    }
    else {
      // obj[arr[i]] += 1;
      return arr[i];
    }
  }
  console.log('No repetition found');
}

console.log( findFirstRepeatedItem(list) );
