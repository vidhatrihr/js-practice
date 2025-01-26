// callback should be a function
function sayHello(callback) {
  console.log('Saying hello');
  callback(); // callback is called
}
sayHello(function () {
  // this line will run future when callback is called
  console.log('I did hello');
});
