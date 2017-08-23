
var dateArray1 = ["2016-07-01", "2016-07-04"];
var dateArray2 = ["2016-07-01", "2018-07-04"];
var dateArray3 = ["2017-07-01", "2017-07-04"];
var monthsArray = ["January", "February", "March", "April", "May", "June", "July",
                   "August", "September", "October", "November", "December"];


function getDay (dateArray) {
  if (dateArray[0][8] === '0' && dateArray[1][8] === '0') {
   return [dateArray[0].slice(9, 10), dateArray[1].slice(9, 10)];
  }
  else if (dateArray[0][8] === '0' && dateArray[1][8] !== '0') {
   return [dateArray[0].slice(9, 10), dateArray[1].slice(8, 10)];
  }
  else if (dateArray[0][8] !== '0' && dateArray[1][8] === '0') {
   return [dateArray[0].slice(8, 10), dateArray[1].slice(9, 10)];
  }
  else {
   return [dateArray[0].slice(8, 10), dateArray[1].slice(8, 10)];
  }
};

function getOrdinal (day) {
  if (["1", "21", "31"].includes(day)) {
    return 'st';
  }
  else if (["2", "22"].includes(day)) {
    return 'nd';
  }
  else if (["3", "23"].includes(day)) {
    return 'rd';
  }
  else {
    return 'th';
  }
}

function printDate (days, months, years, difference, startOrdinal, endOrdinal) {
  if (difference < 365) {
    if (years[0] === years[1] && Number(years[0]) === new Date().getFullYear()) {
      return ([monthsArray[months[0] - 1] + ' ' + days[0] + startOrdinal, days[1] + endOrdinal]);
    }
    else {
      return ([monthsArray[months[0] - 1] + ' ' + days[0] + startOrdinal + ', ' + years[0], days[1] + endOrdinal]);
    }
  }
  else {
    var startDate = monthsArray[months[0] - 1] + ' ' + days[0] + startOrdinal + ', ' + years[0];
    var endDate = monthsArray[months[1] - 1] + ' ' + days[1] + endOrdinal + ', ' + years[1];
    return ([startDate, endDate]);
  }
};

function makeFriendlyDates (dateArray) {
  var days = getDay(dateArray);
  var months = [dateArray[0].slice(5, 7), dateArray[1].slice(5, 7)];
  var years = [dateArray[0].slice(0, 4), dateArray[1].slice(0, 4)];

  var oneDay = 24 * 60 * 60 * 1000;
  var startDate = new Date(years[0], months[0], days[0]);
  var endDate = new Date(years[1], months[1], days[1]);
  var difference = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / (oneDay)));

  var startOrdinal = getOrdinal(days[0]);
  var endOrdinal = getOrdinal(days[1]);
  var output = printDate(days, months, years, difference, startOrdinal, endOrdinal);

  console.log(output);
}

makeFriendlyDates(dateArray1);
makeFriendlyDates(dateArray2);
makeFriendlyDates(dateArray3);
