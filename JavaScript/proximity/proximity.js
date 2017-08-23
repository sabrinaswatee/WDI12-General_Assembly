
var myResults = [
  {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
  {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
  {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
  {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
  {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
  {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}];

var currentLocation = prompt ('input latitute and longtidue: ');
var currentLat = Math.abs (currentLocation.split(',')[0]);
var currentLong = Math.abs (currentLocation.split(',')[1]);
var distances = [];

myResults.forEach (function(result) {
  var x = currentLat - Math.abs (result.location.lat);
  var y = currentLong - Math.abs (result.location.long);
  var distance = Math.sqrt ((Math.pow (x, 2)) + (Math.pow (y, 2)));
  var object = {name: result.name, distance: distance};
  distances.push (object);
});

console.log (distances);
console.log ("The closest object to you is " + _.sortBy (distances, 'distance')[0].name);
