/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators
- https://javascript.info/operators#bitwise-operators
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Bitwise operators *
//
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their
// binary representation.
//
// These operators are not JavaScript-specific. They are supported in most programming languages.
//
// The list of operators:
// - AND ( & )
// - OR ( | )
// - XOR ( ^ )
// - NOT ( ~ )
// - LEFT SHIFT ( << )
// - RIGHT SHIFT ( >> )
// - ZERO-FILL RIGHT SHIFT ( >>> )
//
// These operators are used very rarely, when we need to fiddle with numbers on the very lowest
// (bitwise) level. We won’t need these operators any time soon, as web development has little
// use of them, but in some special areas, such as cryptography, they are useful. You can read
// the Bitwise Operators chapter on MDN when a need arises.

const a = 5; // 00000000000000000000000000000101
const b = 2; // 00000000000000000000000000000010

console.log(a << b); // 00000000000000000000000000010100
// Expected output: 20
