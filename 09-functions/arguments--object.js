/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Arguments Object *
//
// arguments is an array-like object accessible inside functions that contains the values of the
// arguments passed to that function.

function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

func1(1, 2, 3);

arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument

// The arguments object is useful for functions called with more arguments than they are formally
// declared to accept, called variadic functions, such as Math.min(). This example function accepts
// any number of string arguments and returns the longest one:

function longestString() {
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

// You can use arguments.length to count how many arguments the function was called with. If you
// instead want to count how many parameters a function is declared to accept, inspect that function's
// length property.

// * -------------------------------------------------------------------------------------------- *
// * Assigning to indices *
//
// Each argument index can also be set or reassigned:

arguments[1] = "new value";

// Non-strict functions that only have simple parameters (that is, no rest, default, or destructured
// parameters) will sync the new value of parameters with the arguments object, and vice versa:

function func(a) {
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func(10); // 99

function func2(a) {
  a = 99; // updating a also updates arguments[0]
  console.log(arguments[0]);
}
func2(10); // 99

// Non-strict functions that are passed rest, default, or destructured parameters will not sync new
// values assigned to parameters in the function body with the arguments object. Instead, the arguments
// object in non-strict functions with complex parameters will always reflect the values passed to the
// function when the function was called.

function funcWithDefault(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
funcWithDefault(10); // 10

function funcWithDefault2(a = 55) {
  a = 99; // updating a does not also update arguments[0]
  console.log(arguments[0]);
}
funcWithDefault2(10); // 10

// An untracked default parameter
function funcWithDefault3(a = 55) {
  console.log(arguments[0]);
  console.log(arguments.length);
}
funcWithDefault3(); // undefined; 0
