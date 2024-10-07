/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
- https://dev.to/promisetochi/what-you-need-to-know-about-javascripts-implicit-coercion-e23
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Type coercion *
//
// Type coercion is the automatic or implicit conversion of values from one data type to another
// (such as strings to numbers). Type conversion is similar to type coercion because they both
// convert values from one data type to another with one key difference — type coercion is implicit
// whereas type conversion can be either implicit or explicit.

const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum); // 59

// In the above example, JavaScript has coerced the 9 from a number into a string and then concatenated
// the two values together, resulting in a string of 59. JavaScript had a choice between a string or a
// number and decided to use a string.
//
// The compiler could have coerced the 5 into a number and returned a sum of 14, but it did not. To
// return this result, you'd have to explicitly convert the 5 to a number using the Number() method:

sum = Number(value1) + value2;
console.log(sum); // 14

// * -------------------------------------------------------------------------------------------- *
// * Implicit Coercion *

// 3 * "3"; //9
// 1 + "2" + 1; //121

// true + true; //2
// 10 - true; //9

// const foo = {
//   valueOf: () => 2,
// };
// 3 + foo; // 5
// 4 * foo; // 8

// const bar = {
//   toString: () => " promise is a boy :)",
// };
// 1 + bar; // "1 promise is a boy :)"

// 4 * []; // 0
// 4 * [2]; // 8
// 4 + [2]; // "42"
// 4 + [1, 2]; // "41,2"
// 4 * [1, 2]; // NaN

// "string" ? 4 : 1; // 4
// undefined ? 4 : 1; // 1

// * Non-numeric values in numeric expressions *

// * Strings *
//
// Whenever you pass a string as an operand in a numeric expression involving either of these
// operators: -, *, /, %, the number's conversion process is similar to calling the in-built
// Number function on the value. This is pretty straightforward, any string containing only
// numeric characters will be converted to it's number equivalent, but a string containing
// a non-numeric character returns NaN. Illustrated below,

3 * "3"; // 3 * 3
3 * Number("3"); // 3 * 3
Number("5"); // 5

Number("1."); // 1
Number("1.34"); // 1.34
Number("0"); // 0
Number("012"); // 12

Number("1,"); // NaN
Number("1+1"); // NaN
Number("1a"); // NaN
Number("one"); // NaN
Number("text"); // NaN

// The case for the + operator

// concatenation
// 1 + "2" // "12"
// 1 + "js" // "1js"

// addition
// 1 + 2 // 3
// 1 + 2 + 1 // 4

// addition, then concatenation
// 1 + 2 + "1" // "31"
// (1 + 2) + "1" // "31"

// concatenation all through
// 1 + "2" + 1 // "121"
// (1 + "2") + 1 // "121"

// * Objects *
//
// Most Javascript Object conversions usually result in [object Object], For example:

"name" + {}; // "name[object Object]

// Every javascript Object inherits a toString method, that is called whenever an
// Object is to be converted to a string. The return value of the toString method is
// used for such operations as string concatenation and mathematical expressions.

const foo1 = {};
foo1.toString(); // [object Object]

const baz1 = {
  toString: () => "I'm object baz1",
};
baz1 + "!"; // "I'm object baz1!"

// When it's a mathematical expression, Javascript will attempt to convert the
// return value to a number, if it's not.

const foo = {
  toString: () => 4,
};

2 * foo; // 8
2 / foo; // 0.5
2 + foo; // 6
"four" + foo; // "four4"

const baz = {
  toString: () => "four",
};

2 * baz; // NaN
2 + baz; // 2four

const bar = {
  toString: () => "2",
};

2 + bar; // "22"
2 * bar; // 4
