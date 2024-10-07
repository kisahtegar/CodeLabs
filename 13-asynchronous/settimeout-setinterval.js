/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
- https://www.w3schools.com/jsref/met_win_settimeout.asp
- https://www.youtube.com/watch?v=kOcFZV3c75I
- https://www.youtube.com/watch?v=shWr5DNVeCI
- https://javascript.info/settimeout-setinterval
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * setTimeout *
//
// The global setTimeout() method sets a timer which executes a function or specified piece of
// code once the timer expires.

// Syntax:
setTimeout(code);
setTimeout(code, delay);

setTimeout(functionRef);
setTimeout(functionRef, delay);
setTimeout(functionRef, delay, param1);
setTimeout(functionRef, delay, param1, param2);
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN);

// Therefore, don't use strings for the delay value but instead always use numbers:

setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);

// setTimeout() is an asynchronous function, meaning that the timer function will not pause execution
// of other functions in the functions stack. In other words, you cannot use setTimeout() to create a
// "pause" before the next function in the function stack fires.

setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message

// * -------------------------------------------------------------------------------------------- *
// * The "this" problem *
//
// When you pass a method to setTimeout(), it will be invoked with a this value that may differ from
// your expectation. The general issue is explained in detail in the JavaScript reference.
//
// Code executed by setTimeout() is called from an execution context separate from the function from
// which setTimeout was called. The usual rules for setting the this keyword for the called function
// apply, and if you have not set this in the call or with bind, it will default to the window (or
// global) object, even in strict mode. It will not be the same as the this value for the function
// that called setTimeout.

const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};
myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"

// The above works because when myMethod is called, its this is set to myArray by the call, so within
// the function, this[sProperty] is equivalent to myArray[sProperty]. However, in the following:

setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds

// The myArray.myMethod function is passed to setTimeout, then when it's called, its this is not set,
// so it defaults to the window object.

// There's also no option to pass a thisArg to setTimeout as there is in Array methods such as forEach()
// and reduce(). As shown below, using call to set this doesn't work either.

setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // same error

// * -------------------------------------------------------------------------------------------- *
// * Solutions *
//
// Use a wrapper function
// A common way to solve the problem is to use a wrapper function that sets this to the required value:

setTimeout(function () {
  myArray.myMethod();
}, 2.0 * 1000); // prints "zero,one,two" after 2 seconds
setTimeout(function () {
  myArray.myMethod("1");
}, 2.5 * 1000); // prints "one" after 2.5 seconds

// The wrapper function can be an arrow function:

setTimeout(() => {
  myArray.myMethod();
}, 2.0 * 1000); // prints "zero,one,two" after 2 seconds
setTimeout(() => {
  myArray.myMethod("1");
}, 2.5 * 1000); // prints "one" after 2.5 seconds

// * -------------------------------------------------------------------------------------------- *
// * setInterval *
//
// The setInterval method has the same syntax as setTimeout:
//
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
//
// All arguments have the same meaning. But unlike setTimeout it runs the function not only once,
// but regularly after the given interval of time.
//
// To stop further calls, we should call clearInterval(timerId).
//
// The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert("tick"), 2000);

// after 5 seconds stop
setTimeout(() => {
  clearInterval(timerId);
  alert("stop");
}, 5000);
