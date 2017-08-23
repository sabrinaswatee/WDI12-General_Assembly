
var stuff = 'no one else can see except for this file';
var url = 'www.github.com/epoch';
var _ = require('lodash');

module.exports = {
  doSomething: function() {
    console.log(_.sample([1, 2, 3, 4]));
    console.log('doing something else');
  }
}
