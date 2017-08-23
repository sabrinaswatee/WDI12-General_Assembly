var div1 = document.getElementsByTagName('div')[0];
var div2 = document.getElementsByTagName('div')[1];

/* this is dry code and repetitive
var logText = function () {
  console.log (div1.textContent);
};

var logText2 = function () {
  console.log (div2.textContent);
};

div1.addEventListener ('click', logText);
div2.addEventListener ('click', logText2);
*/

/* shorter but runs the code right away
div1.addEventListener ('click', logText(div1));
div2.addEventListener ('click', logText(div2));
*/

/* another method which works but not so reliable
div1.addEventListener ('click', function () { logText(div1) });
div2.addEventListener ('click', function () { logText(div2) });
*/

/* if you amount to pass in other arguments into the function
var logText = function (event, amount) {
console.log (container.textContent);
};

div1.addEventListener ('click', function () { logText(event, amount) });
div2.addEventListener ('click', function () { logText(event, amount) });
*/

/* need to call event listener for every div separatelt
var logText = function (event) {
  // debugger
  console.log (event.target.textContent);
};

div1.addEventListener ('click', logText);
div2.addEventListener ('click', logText);
*/

/* Still having to call add event listener several times with for loop
var div = document.getElementsByTagName ('div');

for (var i = 0; i < div.legnth; i++) {
  div[i].addEventListener ('click', logText);
}
*/

// event bubbling
var parent = document.getElementsByClassName ('parent')[0]; //grabs the first element
// var input = document.getElementsByTagName ('input')[0];

var logParent = function (event) {
  console.log (event.target.textContent);
  // console.log ('parent target: ' + event.target.tagName);
  // console.log ('parent current target: ' + event.currentTarget.tagName);
};

// var childFunc = function (event) {
//   console.log ('target: ' + event.target.tagName);
//   console.log ('current target: ' + event.currentTarget.tagName);
// };

parent.addEventListener ('click', logParent);
// input.addEventListener ('keydown', childFunc);
