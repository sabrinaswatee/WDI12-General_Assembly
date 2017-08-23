/*
Requirements

Just take it step by step and try to meet the benchmarks below in order.

Create Javascript selectors that target each of the timer buttons.
Create click handlers (empty, for now) for each of the timer buttons.
Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
Inside your click handler for the start button...
Replace "Stop Watch" in the HTML with the content of the seconds variable.
Use setInterval() to increment the timer by 1 every second.
Inside your click handler for the pause button...
Stop -- but do not reset! -- the timer using clearInterval().
Once again, inside your click handler for the start button...
Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
Inside your click handler for the reset button...
Stop the timer using clearInterval().
Reset the timer.
Replace the time in your HTML with the original "Stop Watch" text.
*/

var resetBtn = document.querySelector ('#reset');
var startBtn = document.querySelector ('#start');
var pauseBtn = document.querySelector ('#pause');
var timerMessage = document.querySelector ('#timer');

var timer = 0;
var timerId = 0;

var updateTime = function () {
  timer += 1;
  timerMessage.textContent = 'Time elapsed: ' + timer;
}

var reset = function () {
  clearInterval (timerId);
  timer = 0;
  timerMessage.textContent = 'Stop Watch';
}

var start = function () {
  timerMessage.textContent = 'Time elapsed: ' + timer;
  timerId = setInterval (updateTime, 1000);
}

var pause = function () {
  clearInterval (timerId);
  timerMessage.textContent = 'Time elapsed: ' + timer;
}

resetBtn.addEventListener ('click', reset);
startBtn.addEventListener ('click', start);
pauseBtn.addEventListener ('click', pause);

//

/* Bonus section
Reformat your timer so that everything in your timers.js file -- variables and functions -- are part of a global object. It would look something like...

// Start of .js file

var timer = {
  // All your code goes in here...
}
*/

var resetBtn = document.querySelector ('#reset');
var startBtn = document.querySelector ('#start');
var pauseBtn = document.querySelector ('#pause');
var timerMessage = document.querySelector ('#timer');

var timer = {
  timerNum: 0,
  timerId: 0,
  updateTime: function () {
                timer.timerNum++;
                timerMessage.textContent = 'Time elapsed: ' + timer.timerNum;
              },
  reset: function () {
            clearInterval (timer.timerId);
            timer.timerNum = 0;
            timerMessage.textContent = 'Stop Watch';
         },
  start: function () {
            timerMessage.textContent = 'Time elapsed: ' + timer.timerNum;
            timer.timerId = setInterval (timer.updateTime, 1000);
         },
  pause: function () {
            clearInterval (timer.timerId);
            timerMessage.textContent = 'Time elapsed: ' + timer.timerNum;
         }
};

resetBtn.addEventListener ('click', timer.reset);
startBtn.addEventListener ('click', timer.start);
pauseBtn.addEventListener ('click', timer.pause);
