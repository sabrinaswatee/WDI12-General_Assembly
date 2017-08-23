var input = document.querySelector ('input');
var btn = document.querySelector ('button');
var list = document.querySelector ('ul');

var strike = function (event) {
  console.log (event.target);
  event.target.className = 'done';
}

//attach event handling when children is being pushed
list.addEventListener ('click', function(event) {
  console.log(event);
  if (event.target.tagName === 'LI') {
    strike(event);
  }
});

btn.addEventListener ('click', function (event) {
  console.log (event);
  var newListItem = document.createElement ('li');
  newListItem.textContent = input.value;
  // newListItem.addEventListener ('click', strike);
  list.appendChild (newListItem);
});

// for (var index = 0; index < listItems.length; index++) {
//   listItems[index].addEventListener ('click', strike);
// }


var ENTER_KEY = 13;

input.addEventListener ('keyup', function (event) {
  if (event.which === ENTER_KEY) {
    var newListItem = document.createElement ('li');
    newListItem.textContent = input.value;
    list.appendChild (newListItem);
  }
});
