console.log("Hello wdi12");

if (5 > 4) {
  console.log("Math is easy");
}

var wdi12 = true; // global variable

// scope

if (wdi12) {
  console.log("wdi12 rocks!");
}

// truthy and falsey
// values that are falsey - false, empty string, the number 0, undefined, null, NaN

var name = '';
if (name) {
  console.log("Hello " + name);
}

var points = 0;
if (points) {
  console.log("You have " + points + "points");
}

var firstName;
if (firstName) {
  console.log("Your name is " + firstName);
}
