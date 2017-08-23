var secretColor = 'mistyrose';

var myFavColor = function () {
  return secretColor;
};

// module.exports = myFavColor;

var secondFavColor = function () {
  return 'pink';
};

module.exports = {
  myFavColor: myFavColor,
  secondFavColor: secondFavColor
};
