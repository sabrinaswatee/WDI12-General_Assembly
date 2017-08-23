
function countdown(num) {
  if (num <= 0) {
    console.log('Blast off!');
  }
  else {
    console.log(num);
    countdown(num -= 1);
  };
};

countdown(10);

// problem

// sub problem

// constant base case
