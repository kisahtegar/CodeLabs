/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators
- https://javascript.info/operators#maths
- https://www.w3schools.com/js/js_arithmetic.asp
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Arithmetic operators *
//
// An arithmetic operator takes numerical values (either literals or variables) as their operands
// and returns a single numerical value. The standard arithmetic operators are addition (+),
// subtraction (-), multiplication (*), and division (/). These operators work as they do in most
// other programming languages when used with floating point numbers (in particular, note that
// division by zero produces Infinity). For example:

1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true

// In addition to the standard arithmetic operations (+, -, *, /), JavaScript provides the
// arithmetic operators listed in the following table:

// * Arithmetic operators

// Remainder (%)
//
// Binary operator. Returns the integer remainder of dividing the two operands.
//
// 12 % 5 returns 2.

// Increment (++)
//
// Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value
// of its operand after adding one; if used as a postfix operator (x++), returns the value of its
// operand before adding one.
//
// If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.

// Decrement (--)
//
// Unary operator. Subtracts one from its operand. The return value is analogous to that for the
// increment operator.
//
// If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.

// Unary negation (-)
//
// Unary operator. Returns the negation of its operand.
//
// If x is 3, then -x returns -3.

// Unary plus (+)
//
// Unary operator. Attempts to convert the operand to a number, if it is not already.
// +"3" returns 3.
// +true returns 1.

// Exponentiation operator (**)
//
// Calculates the base to the exponent power, that is, base^exponent
//
// 2 ** 3 returns 8.
// 10 ** -1 returns 0.1.
