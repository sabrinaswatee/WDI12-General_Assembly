
var $hour = $('.hour');
var $minute = $('.minute');
var $second = $('.second');
var $hourHand = $('#hour');
var $minuteHand = $('#min');
var $secondHand = $('#sec');

setInterval (function () {
  if ($second.html() == '59') {
    $second.html('0');
  }
  else {
    $second.html(Number ($second.html()) + 1);
  }
  // $secondHand.style.transform = 'rotate';
}, 1000);

setInterval (function () {
  $minute.html(Number ($minute.html()) + 1);
  // $minuteHand.style.transform = 'rotate';
}, 60000);

setInterval (function () {
  $hour.html(Number ($hour.html()) + 1);
  // $hourHand.style.transform = 'rotate';
}, 360000);
