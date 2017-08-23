var $input1 = $('#color-field');
var $input2 = $('#movie-name');
var $button1 = $('#set-color');
var $button2 = $('#set-movie');
var $brush = $('.brush');
var $body = $('body');

// commit 1 and 2
$button1.on('click', function(event) {
  event.preventDefault();
  $brush.css({ 'background-color': $input1.val() });
});

// commit 3
for (var i = 0; i < 500; i++) {
  var newItem = $('<div>');
  newItem.addClass('square');
  $body.append(newItem);
};

// commit 4
//$body.on('click', function(event) {
//  if (event.target.className == 'square') {
//    event.target.style.backgroundColor = 'green';
//  };
//});

// commit 5
//$body.on('click', function(event) {
//  if (event.target.className == 'square') {
//    event.target.style.backgroundColor = $brush.css('background-color');
//  };
//});

// commit 6
$body.on('mouseover', function(event) {
  if (event.target.className == 'square') {
    event.target.style.backgroundColor = $brush.css('background-color');
  };
});

// commit 7
$button2.on('click', function() {
  var settings = {
    url: 'http://omdbapi.com/',
    data: { t: $input2.val(), apiKey: '2f6435d9'}
  };


  $.ajax(settings).done(function(response) {
    var movie = response.Poster;
    $brush.css({ 'background-image': 'url(' + movie + ')' });
    $body.on('mouseover', function(event) {
      if (event.target.className == 'square') {
        event.target.style.backgroundImage = 'url(' + movie + ')';
      };
    });
  });
});
