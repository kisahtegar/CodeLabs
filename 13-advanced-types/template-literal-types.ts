/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/type-compatibility.html#advanced-topics
- https://www.youtube.com/playlist?list=PLw5h0DiJ-9PBIgIyd2ZA1CVnJf0BLFJg2
- https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Template Literal Types *
//
// Template literal types in TypeScript are a way to manipulate string values as types. They allow
// you to create a type based on the result of string manipulation or concatenation. Template literal
// types are created using the backtick (“) character and string manipulation expressions within the
// type.
//
// For example, the following is a template literal type that concatenates two strings:

type Name = `Mr. ${string}`;

let namee: Name = `Mr. Smith`; // ok
// let namee: Name = `Mrs. Smith`; // error

// In this example, the Name template literal type is created by concatenating the string "Mr. "
// with the type string. This type can then be used to enforce that a value must be a string that
// starts with "Mr. ".
