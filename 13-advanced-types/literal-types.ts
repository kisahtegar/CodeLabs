/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/type-compatibility.html#advanced-topics
- https://www.youtube.com/playlist?list=PLw5h0DiJ-9PBIgIyd2ZA1CVnJf0BLFJg2
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Literal Types *
//
// Literal types in TypeScript are a way to specify a value exactly, rather than just a type.
// Literal types can be used to enforce that a value must be of a specific type and a specific
// value. Literal types are created by using a literal value, such as a string, number, or
// boolean, as a type.
//
// For example, the following is a literal type that represents a value of 42:

type Age = 42;

let age: Age = 42; // ok
// let age: Age = 43; // error

// In this example, the Age literal type is created by using the number 42 as a type. This type
// can then be used to enforce that a value must be of type number and have the value 42.
