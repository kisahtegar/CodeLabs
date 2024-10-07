/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#relational_operators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Relational operators *
//
// A relational operator compares its operands and returns a Boolean value based on whether the
// comparison is true.

// * in *
//
// The in operator returns true if the specified property is in the specified object. The syntax is:
//
// propNameOrNumber in objectName
//
// where propNameOrNumber is a string, numeric, or symbol expression representing a property name
// or array index, and objectName is the name of an object.
//
// The following examples show some uses of the in operator.

// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false
// (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true

// * instanceof *
//
// The instanceof operator returns true if the specified object is of the specified object type.
// The syntax is:

object instanceof objectType;

// where object is the object to test against objectType, and objectType is a constructor
// representing a type, such as Date or Array.
//
// Use instanceof when you need to confirm the type of an object at runtime. For example, when
// catching exceptions, you can branch to different exception-handling code depending on the
// type of exception thrown.
//
// For example, the following code uses instanceof to determine whether theDay is a Date object.
// Because theDay is a Date object, the statements in the if statement execute.

const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
