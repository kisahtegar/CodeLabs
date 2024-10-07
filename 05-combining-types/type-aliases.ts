/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Type Aliases *
//
// We’ve been using object types and union types by writing them directly in type annotations.
// This is convenient, but it’s common to want to use the same type more than once and refer
// to it by a single name.
//
// A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// You can actually use a type alias to give a name to any type at all, not just an object type.
// For example, a type alias can name a union type:

type ID = number | string;

// Note that aliases are only aliases - you cannot use type aliases to create different/distinct
// “versions” of the same type. When you use the alias, it’s exactly as if you had written the
// aliased type. In other words, this code might look illegal, but is OK according to TypeScript
// because both types are aliases for the same type:

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  // return sanitize(str);
  return "";
}

// Create a sanitized input
// let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
// userInput = "new input";
