
function greeting (greeting="Hello", firstname="Sabrina", lastname="Swatee") {
  // return (greeting + ' ' + firstname + ', how are you?');
  return `${ greeting } ${ firstname }, how are you?`;
};

// 'hello d, how are you'
var greeting = greeting();
console.log(greeting);
