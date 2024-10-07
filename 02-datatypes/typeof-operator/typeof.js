/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
- https://www.w3schools.com/js/tryit.asp?filename=tryjs_typeof_all
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * typeof *
//
// The typeof operator returns a string indicating the type of the operand's value.console.log(typeof 42);

console.log(typeof 42);
// Expected output: "number"

console.log(typeof "blubber");
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"

// * -------------------------------------------------------------------------------------------- *
// * Basic usage *

// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // note that a number within a string is still typeof string
typeof typeof 1 === "string"; // typeof always returns a string
typeof String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or falsy
typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";

// * -------------------------------------------------------------------------------------------- *
// * typeof null *

// This stands since the beginning of JavaScript
typeof null === "object";

// In the first implementation of JavaScript, JavaScript values were represented as a type tag and
// a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most
// platforms). Consequently, null had 0 as type tag, hence the typeof return value "object".
//
// A fix was proposed for ECMAScript (via an opt-in), but was rejected. It would have resulted in
// typeof null === "null".

// * -------------------------------------------------------------------------------------------- *
// * Using new operator *
//
// All constructor functions called with new will return non-primitives ("object" or "function").
// Most return objects, with the notable exception being Function, which returns a function.

const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"

typeof "done"; // "string"
