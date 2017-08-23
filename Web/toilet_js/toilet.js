var doSomething = function () {
  console.log ('Oops');
}

console.log ('Hey');
console.log ('Now');
setTimeout(doSomething, 5000);
console.log ('You');

var poop = function () {
  document.body.style.backgroundColor = 'darkolivegreen';
}

var flush = function () {
  document.body.style.backgroundColor = 'mintcream';
}

var poopBtn = document.querySelector ('#poopBtn');
var flushBtn = document.querySelector ('#flushBtn');

poopBtn.addEventListener ('click', poop);
flushBtn.addEventListener ('click', flush);
