/*! *************************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
- https://masteringjs.io/tutorials/fundamentals/null
***************************************************************************************** */

// * -------------------------------------------------------------------------------------------- *
// * BigInt *
//
// A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending
// n to the end of an integer literal, or by calling the BigInt() function (without the new operator)
// and giving it an integer value or string value.

const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991); // 9007199254740991n

const hugeString = BigInt("9007199254740991"); // 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff"); // 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777"); // 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111"
); // 9007199254740991n

// BigInt values are similar to Number values in some ways, but also differ in a few key matters: A
// BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a
// Number value in operations; they must be coerced to the same type. Be careful coercing values back
// and forth, however, as the precision of a BigInt value may be lost when it is coerced to a Number value.

// * -------------------------------------------------------------------------------------------- *
// * Operators *

const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const maxPlusOne = previousMaxSafe + 1n; // 9007199254740992n
const theFuture = previousMaxSafe + 2n; // 9007199254740993n, this works now!
const multi = previousMaxSafe * 2n; // 18014398509481982n
const subtr = multi - 10n; // 18014398509481972n
const mod = multi % 10n; // 2n
const bigN = 2n ** 54n; // 18014398509481984n
bigN * -1n; // -18014398509481984n
const expected = 4n / 2n; // 2n
const truncated = 5n / 2n; // 2n, not 2.5n

// * -------------------------------------------------------------------------------------------- *
// * Comparisons *
//
// A BigInt value is not strictly equal to a Number value, but it is loosely so:

0n === 0; // false
0n == 0; // true

// A Number value and a BigInt value may be compared as usual:

1n < 2; // true
2n > 1; // true
2 > 2; // false
2n > 2; // false
2n >= 2; // true

// BigInt values and Number values may be mixed in arrays and sorted:

const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort(); // default sorting behavior
// [ -12n, 0, 0n, 10, 4n, 4, 6 ]

mixed.sort((a, b) => a - b);
// won't work since subtraction will not work with mixed types
// TypeError: can't convert BigInt value to Number value

// sort with an appropriate numeric comparator
mixed.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// [ -12n, 0, 0n, 4n, 4, 6, 10 ]

// Note that comparisons with Object-wrapped BigInt values act as with other objects, only
// indicating equality when the same object instance is compared:

Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
