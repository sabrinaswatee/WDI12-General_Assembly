
var changeColor = function () {
  var background = document.body.style.backgroundColor;
  if (background === 'black') {
    document.body.style.backgroundColor = 'mistyrose';
  }
  else {
    document.body.style.backgroundColor = 'black';
  }
}

// find the button
var btn = document.getElementsByTagName('button')[0];

// find the body (entire page)
var body = document;

// hey btn, listn to the click event

// addEventListener in a function that takes 2 arguments.
// first one is the event
// second argument is a function

body.addEventListener('click', changeColor);
