
const languages = ['ruby', 'php', 'javascript'];

// new array of languages upcased
var uparray = [];

function upcase (languages) {
  for (var i = 0; i < languages.length; i++) {
    uparray.push(languages[i].toUpperCase());
  }
};

var newarray = upcase(languages);
console.log(newarray);


// another way

var newLanguages = [];
var newLanguages = languages.map(function(lang) {
  return lang.toUpperCase();
});
console.log(newLanguages);


// using arrow

var sayHi = function(name) {
  console.log(name);
};

var sayHi = name => console.log(name);


var newLanguages = languages.map(lang => lang.toUpperCase());
console.log(newLanguages);
