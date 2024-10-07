/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#unary_operators
- https://www.educba.com/unary-operators-in-javascript/
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Unary operators *
//
// JavaScript Unary Operators are the special operators that consider a single operand and perform
// all the types of operations on that single operand. These operators include unary plus, unary
// minus, prefix increments, postfix increments, prefix decrements, and postfix decrements.

// 1. Unary plus(+)
//
// This operator precedes the operand and converts the operator into the final output with the
// required number. It converts the string containing numbers, Boolean values, and null into the
// last number. It will include numbers like integers, float, hexadecimal, etc.
//
// Note: Unary operator will return value only if the object it has contains the valueOf key, and
// that function, in turn, returns any of the values as mentioned above.

function M_Unary_Typ(p) {
  this.number = p;
}
M_Unary_Typ.prototype.valueOf = function () {
  return this.number;
};
const obj_1 = new M_Unary_Typ(9);
console.log(obj_1 + 3); // 12

// 2. Unary Negation(-)
//
// It also works similarly to Unary Plus with the mere difference that it includes the operand preceded
// with the operand and then converts the unary plus operand with the same function, which negates the
// value. In short, performing unary negation and unary plus on top of unary negation makes the value
// negated with the same function as non-numbers. This program demonstrates the Unary Negation operation,
// which gives the negative value once applied with the value of the key.

function M_negtion_func(s) {
  this.nm = s;
}
M_negtion_func.prototype.valueOf = function () {
  return this.nm;
};
const obj1 = new M_negtion_func(true);
const obj2 = new M_negtion_func(15);
console.log(obj1 + 3 - 20); // -16
console.log(obj2 + 3 - 20); // -2

// 3. Logical Not(!)
//
// The logical Not operator comes with the fact that it comes before the operand and converts the operand
// into its boolean equivalent before converting it into the boolean equivalent and negating the value.
// This program demonstrates the Logical Not(!) unary operator, which returns the output with logical not.

function M_negtion_func(z) {
  this.nm = z;
}
M_negtion_func.prototype.valueOf = function () {
  return this.nm;
};
const obj3 = new M_negtion_func(!false);
const obj4 = new M_negtion_func(!"-3");
console.log(obj3, !false); // M_negtion_func { nm: true } true
console.log(obj4, !"-3"); // M_negtion_func { nm: false } false

// * A unary operation is an operation with only one operand. *
// * delete
//
// The delete operator deletes an object's property. The syntax is:

delete object.property;
delete object[propertyKey];
delete objectName[index];

// where object is the name of an object, property is an existing property, and propertyKey is a
// string or symbol referring to an existing property.

// If the delete operator succeeds, it removes the property from the object. Trying to access it
// afterwards will yield undefined. The delete operator returns true if the operation is possible;
// it returns false if the operation is not possible.

delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
