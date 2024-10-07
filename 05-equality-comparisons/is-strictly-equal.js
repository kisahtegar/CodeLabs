/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
- https://javascript.info/comparison
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * isLooselyEqual *
//
// * Strict equality (===) *
//
// The strict equality (===) operator checks whether its two operands are equal, returning a Boolean
// result. Unlike the equality operator, the strict equality operator always considers operands of
// different types to be different.

// Comparing operands of the same type

"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
