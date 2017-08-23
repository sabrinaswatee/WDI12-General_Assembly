function sum(arr) {
  //base case -> return a constant
  if (arr.length === 1) {
    return arr[0];
  }
  else {
    return arr.shift() + sum(arr);
  }

}

console.log(sum([1, 2, 3]));
