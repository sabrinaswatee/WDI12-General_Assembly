
// write a function that takes 3 parameters
// greeting, firstname, lastname
// set the default values to 'hello', your first and last name
// if no input is provided

// Order of parameters important
function greeting (greeting="Hello", firstname="Sabrina", lastname="Swatee") {
  // if (greeting === undefined) {
  //   greeting = "Hello";
  // }
  // if (firstname === undefined) {
  //   firstname = "Sabrina";
  // }
  // if (lastname === undefined) {
  //   lastname = "Swatee";
  // }
  return (greeting + ' ' + firstname + ' ' + lastname);
};
var greeting = greeting('hi', 'bits', 'please'); // 'hi bits please'
console.log(greeting);


// order of parameters not important
function greeting(options = { greeting: 'Hello', firstname: 'D', lastname: 'T'}) {
  return (options.greeting + ' ' + options.firstname + ' ' + options.lastname);
}

greeting({firstname: 'Bits'});
