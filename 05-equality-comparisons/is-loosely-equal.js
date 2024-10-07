/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
- https://javascript.info/comparison
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * isLooselyEqual *
//
//
// * Equality (==) *
//
// The equality (==) operator checks whether its two operands are equal, returning a Boolean result.
// Unlike the strict equality operator, it attempts to convert and compare operands that are of
// different types.

// Comparison with no type conversion

1 == 1; // true
"hello" == "hello"; // true

// Comparison with type conversion

"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, look at Logical NOT operator
0 == !!undefined; // true, look at Logical NOT operator
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false

// Comparison of objects

const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true
