/*! ********************************************************************************
Reference:
- https://medium.com/learning-new-stuff/javascript-closures-explained-in-3-minutes-5aae8dce2014
- https://www.codeguage.com/courses/js/functions-closures
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Closures *
//
// A closure occurs when a function "closes over" its environment, meaning it retains access to the
// variables from the outer function where it was defined, even after the outer function has returned.
//
// In simpler terms:
// - A closure allows a function to access variables from an outer scope, even after the outer
//   function has finished executing.
//
// Key Points about Closures:
// - Functions remember their lexical scope: When a function is defined inside another function,
//   it has access to the variables of the outer function (and the global scope).
// - Closure keeps variables alive: Even when the outer function completes, the inner function
//   retains access to the outer function's variables through closure.
//
// Example to Understand Closures

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable:", outerVariable);
    console.log("Inner Variable:", innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// How it works:
// 1. outerFunction takes one argument outerVariable. It returns the innerFunction, which takes
//    its own argument innerVariable.
// 2. The innerFunction can access both innerVariable and outerVariable from the outer function's
//    scope.
// 3. When newFunction is called, it still has access to outerVariable even though outerFunction
//    has finished executing.
//
// Output:

// Outer Variable: outside
// Inner Variable: inside

// * -------------------------------------------------------------------------------------------- *
// * Practical Example with Closures *
//
// Closures are often used in real-world scenarios like function factories or private variables.
// Let's look at a common use case:
//
// Example: Function Factory

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2

// Explanation:
// - createCounter is a factory function that returns another function (the closure). The inner
//   function increments the count variable.
// - Even though createCounter finishes execution, the inner function retains access to the count
//   variable.
// - Each time counter1 or counter2 is called, it "remembers" the count variable unique to that
//   instance.
