
var firstMethod = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
        if (timer1) {
          resolve(console.log('first method completed'));
        }
        else {
          reject(console.log('first method rejected'))
        }
      }, 2000);
   });
   return promise;
};


var secondMethod = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
        if (timer2) {
          resolve(console.log('second method completed'));
        }
        else {
          reject(console.log('second method rejected'))
        }
      }, 2000);
   });
   return promise;
};

var thirdMethod = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
        if (timer3) {
          resolve(console.log('third method completed'));
        }
        else {
          reject(console.log('third method rejected'))
        }
      }, 3000);
   });
   return promise;
};

var timer1 = true;
var timer2 = true;
var timer3 = true;

firstMethod()
  .then(secondMethod)
  .then(thirdMethod)
  .catch(err=>console.log(err));

// firstMethod()
//   .then(secondMethod)
//   .catch(err=>console.log(err));
//   .done(thirdMethod)

// firstMethod()
//   .then(secondMethod)
//   .finally(thirdMethod);


// Promise.all([
//   firstMethod(),
//   secondMethod(),
//   thirdMethod()
// ])
// .then(([result1, result2, result3]) => {
//   console.log(result1, result2, result3)
// })
// .catch(err => {
//   console.log(err)
// });


// Promise.race([
//   firstMethod(),
//   secondMethod(),
//   thirdMethod()
// ])
// .then(([result1, result2, result3]) => {
//   console.log(result1, result2, result3)
// })
// .catch(err => {
//   console.log(err)
// });
