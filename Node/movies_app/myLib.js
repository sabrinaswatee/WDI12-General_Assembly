
(function() {              // function with no name getting called straight away

  var private = 'apple';

  return function () {
    console.log(private);
  }
})()
