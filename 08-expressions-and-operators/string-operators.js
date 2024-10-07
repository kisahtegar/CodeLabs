/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
- https://javascript.info/operators#string-concatenation-with-binary
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * String Operators *
//
// In addition to the comparison operators, which can be used on string values, the concatenation
// operator (+) concatenates two string values together, returning another string that is the union
// of the two operand strings.

// The shorthand assignment operator += can also be used to concatenate strings.

console.log("my " + "string"); // console logs the string "my string".

let mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
