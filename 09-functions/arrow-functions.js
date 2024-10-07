/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- https://www.w3schools.com/js/js_arrow_function.asp
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Arrow Functions *
//
// An arrow function expression is a compact alternative to a traditional function expression,
// with some semantic differences and deliberate limitations in usage:
//
// - Arrow functions don't have their own bindings to this, arguments, or super, and should not
//   be used as methods.
// - Arrow functions cannot be used as constructors. Calling them with new throws a TypeError.
//   They also don't have access to the new.target keyword.
// - Arrow functions cannot use yield within their body and cannot be created as generator functions.

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]

// Syntax:

// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

// Rest parameters, default parameters, and destructuring within params are supported, and always
// require parentheses:

// (a, b, ...r) => expression
// (a = 400, b = 20, c) => expression
// ([a, b] = [10, 20]) => expression
// ({ a, b } = { a: 10, b: 20 }) => expression

// Arrow functions can be async by prefixing the expression with the async keyword.

async (param) => expression;
async (param1, param2, ...paramN) => {
  statements;
};

// Let's decompose a traditional anonymous function down to the simplest arrow function step-by-step.
// Each step along the way is a valid arrow function.

// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
(a) => a + 100;

// In the example above, both the parentheses around the parameter and the braces around the function
// body may be omitted. However, they can only be omitted in certain cases.

// The parentheses can only be omitted if the function has a single simple parameter. If it has multiple
// parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the
// parameter list are required.

// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// Arrow function (no parameters)
() => a + b + 100;

// The braces can only be omitted if the function directly returns an expression. If the body has statements,
// the braces are required — and so is the return keyword. Arrow functions cannot guess what or when you want
// to return.

// Traditional anonymous function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};

// Arrow functions are not inherently associated with a name. If the arrow function needs to call itself, use
// a named function expression instead. You can also assign the arrow function to a variable, allowing you to
// refer to it through that variable.

// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;

// * -------------------------------------------------------------------------------------------- *
// * Function body *
//
// Arrow functions can have either an expression body or the usual block body.
//
// In an expression body, only a single expression is specified, which becomes the implicit return value. In a
// block body, you must use an explicit return statement.

const func = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed

// Returning object literals using the expression body syntax (params) => { object: literal } does not work
// as expected.

// const func3 = () => { foo: 1 };
// Calling func() returns undefined!

// const func4 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

// const func5 = () => { foo() {} };
// SyntaxError: Unexpected token '{'

// This is because JavaScript only sees the arrow function as having an expression body if the token following
// the arrow is not a left brace, so the code inside braces ({}) is parsed as a sequence of statements, where
// foo is a label, not a key in an object literal.
//
// To fix this, wrap the object literal in parentheses:

const func3 = () => ({ foo: 1 });
