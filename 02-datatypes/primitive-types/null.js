/*! *********************************************************
Reference:
- https://www.altcademy.com/blog/what-is-null-in-javascript/
- https://masteringjs.io/tutorials/fundamentals/null
************************************************************* */

// Here's how you can declare a variable with a null value:

let variable = null;

// * -------------------------------------------------------------------------------------------- *
// * Null is not Undefined *
//
// In JavaScript, when a variable is declared but not assigned a value, it's undefined.

let variable1;
console.log(variable1); // undefined

// But when a variable is declared and explicitly assigned null, it's null.

let variable3 = null;
console.log(variable3); // null

// * -------------------------------------------------------------------------------------------- *
// * Null in Real-World Scenarios *
//
// You might be wondering, "When would I use null?". Let's take a look at a real-world scenario.
//
// Imagine you're creating a web application where users can create a profile. When a new user
// signs up, they might not provide all their information immediately. In your JavaScript code,
// you would initialize all the profile fields as null.

let userProfile = {
  name: null,
  age: null,
  email: null,
};

// Later, when the user fills out their profile, you can replace null with actual values.

// * -------------------------------------------------------------------------------------------- *
// * The typeof Null Quirk *

console.log(typeof null); // object

// * -------------------------------------------------------------------------------------------- *
// * How to Check for Null *

// To check if a variable is null, use the strict equality (===) or inequality (!==) operator.

let variable4 = null;

if (variable4 === null) {
  console.log("variable is null");
}
// variable is null
