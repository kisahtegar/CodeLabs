/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters
- https://www.amitmerchant.com/unlimited-function-parameters-with-using-rest-in-java-script/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
- https://www.sitepoint.com/when-to-use-a-function-expression-vs-function-declaration/#:~:text=Function%20declarations%20are%20hoisted%2C%20meaning,declarations%20must%20always%20be%20named.
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Functions Declaration *
//
// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is
// similar to a procedure—a set of statements that performs a task or calculates a value, but for
// a procedure to qualify as a function, it should take some input and return an output where there
// is some obvious relationship between the input and the output. To use a function, you must define
// it somewhere in the scope from which you wish to call it.

function square(number) {
  return number * number;
}

// The function square takes one parameter, called number. The function consists of one statement
// that says to return the parameter of the function (that is, number) multiplied by itself. The
// return statement specifies the value returned by the function, which is number * number.

// Another example:

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

// Another example:

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

// * -------------------------------------------------------------------------------------------- *
// * Rest parameters *
//
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an
// array, providing a way to represent variadic functions in JavaScript.

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

// * -------------------------------------------------------------------------------------------- *
// * Function expressions *
//
// While the function declaration above is syntactically a statement, functions can also be created
// by a function expression.
//
// Such a function can be anonymous; it does not have to have a name. For example, the function
// square could have been defined as:

const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16

// However, a name can be provided with a function expression. Providing a name allows the function
// to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6

// Function expressions are convenient when passing a function as an argument to another function.
// The following example shows a map function that should receive a function as first argument and
// an array as second argument
//
// In the following code, the function receives a function defined by a function expression and
// executes it for every element of the array received as a second argument:

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

// In JavaScript, a function can be defined based on a condition. For example, the following
// function definition defines myFunc only if num equals 0:

let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}

// A function can call itself. For example, here is a function that computes factorials recursively:

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// You could then compute the factorials of 1 through 5 as follows:

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// * -------------------------------------------------------------------------------------------- *
// * Function scope *
//
// Variables defined inside a function cannot be accessed from anywhere outside the function, because
// the variable is defined only in the scope of the function. However, a function can access all
// variables and functions defined inside the scope in which it is defined.
//
// In other words, a function defined in the global scope can access all variables defined in the global
// scope. A function defined inside another function can also access all variables defined in its parent
// function, and any other variables to which the parent function has access.

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
