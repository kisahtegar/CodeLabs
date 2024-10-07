/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Glossary/Scope
- https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Scope *
//
// A space or environment in which a particular variable or function can be accessed or used.
// Accessibility of this variable or function depends on where it is defined.
//
// JavaScript has the following kinds of scopes:
//
// - Global scope: The default scope for all code running in script mode.
// - Module scope: The scope for code running in module mode.
// - Function scope: The scope created with a function.
// - Block scope: The scope created with a pair of curly braces (a block).

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);

// Blocks only scope let and const declarations, but not var declarations.

{
  var a = 1;
  const b = 2;
}
console.log(a); // 1
console.log(b); // ReferenceError: x is not defined

// * -------------------------------------------------------------------------------------------- *
// * Function Stack (Call stack) *
//
// The function stack is how the interpreter keeps track of its place in a script that calls multiple
// functions, like which function is currently executing and which functions within that function are
// being called.

function greeting() {
  // [1] Some code here
  sayHi();
  // [2] Some code here
}
function sayHi() {
  return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some code here

// The call stack will be empty at the very beginning, and the code above would be executed like this:
//
// 1. Ignore all functions, until it reaches the greeting() function invocation.
// 2. Add the greeting() function to the call stack list, and we have:
//      - greeting
// 3. Execute all lines of code inside the greeting() function.
// 4. Get to the sayHi() function invocation.
// 5. Add the sayHi() function to the call stack list, like:
//      - sayHi
//      - greeting
// 6. Execute all lines of code inside the sayHi() function, until reaches its end.
// 7. Return execution to the line that invoked sayHi() and continue executing the rest of the greeting() function.
// 8. Delete the sayHi() function from our call stack list. Now the call stack looks like:
//      - greeting
// 9. When everything inside the greeting() function has been executed, return to its invoking line to continue executing the rest of the JS code.
// 10. Delete the greeting() function from the call stack list. Once again, the call stack become empty.
