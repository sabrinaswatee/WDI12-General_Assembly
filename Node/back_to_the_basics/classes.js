
// make objects
// point object
// {x: 3, y: 4}

function createPoint(x, y) {
  return { x: x, y: y};
};

console.log(createPoint(3, 4));
console.log(createPoint(2, 2));


// constructor functions
// use with new keyword
// caps to denote its a constructor function

function Point1(x, y) {
  this.x = x;
  this.y = y;
  return this;
};

var newPoint = new Point1(2, 2); // looks like {x: 3, y: 4}
console.log(newPoint);


// classes in javascript

class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  };

};

var newSecondPoint = new Point(2, 3);
console.log(newSecondPoint);
