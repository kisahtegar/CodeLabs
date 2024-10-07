/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators
- https://javascript.info/operators#assignment
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Assignment operators *
//
// An assignment operator assigns a value to its left operand based on the value of its right operand.
// The simple assignment operator is equal (=), which assigns the value of its right operand to its
// left operand. That is, x = f() is an assignment expression that assigns the value of f() to x.

let x = 2 * 2 + 1;

alert(x); // 5

// Assignment = returns a value

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

// Chaining assignments

let d, e, f;

d = e = f = 2 + 2;

alert(d); // 4
alert(e); // 4
alert(f); // 4
