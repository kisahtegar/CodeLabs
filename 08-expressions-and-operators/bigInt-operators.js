/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bigint_operators
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Biginit operators *
//
// Most operators that can be used with the Number data type will also work with BigInt values (e.g.
// arithmetic, comparison, etc.). However, the unsigned right shift >>> operator is an exception and
// is not supported. Similarly, some operators may have slight differences in behaviour (for example,
// division with BigInt will round towards zero).Most operators that can be used between numbers can
// be used between BigInt values as well.

// BigInt addition
const a = 1n + 2n; // 3n
// Division with BigInts round towards zero
const b = 1n / 2n; // 0n
// Bitwise operations with BigInts do not truncate either side
const c = 40000000000000000n >> 2n; // 10000000000000000n

// One exception is unsigned right shift (>>>), which is not defined for BigInt values. This is
// because a BigInt does not have a fixed width, so technically it does not have a "highest bit".

const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead

// BigInts and numbers are not mutually replaceable — you cannot mix them in calculations.

const a1 = 1n + 2; // TypeError: Cannot mix BigInt and other types

// This is because BigInt is neither a subset nor a superset of numbers. BigInts have higher precision
// than numbers when representing large integers, but cannot represent decimals, so implicit conversion
// on either side might lose precision. Use explicit conversion to signal whether you wish the operation
// to be a number operation or a BigInt one.

const a2 = Number(1n) + 2; // 3
const b2 = 1n + BigInt(2); // 3n

// You can compare BigInts with numbers.

const a3 = 1n > 2; // false
const b3 = 3 > 2n; // true
