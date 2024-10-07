/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * As Type *
//
// In TypeScript, the as keyword is used for type assertions, allowing you to explicitly inform
// the compiler about the type of a value when it cannot be inferred automatically. Type assertions
// are a way to override the default static type-checking behavior and tell the compiler that you
// know more about the type of a particular expression than it does.
//
// Here’s a simple example:

let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

console.log(strLength); // Outputs: 18

// In this example, someValue is initially of type any, and we use the as operator to assert that
// it is of type string before accessing its length property.
//
// It’s important to note that type assertions do not change the runtime type of a value, and do
// not cause any type of conversion. They are a compile-time construct used for static type checking
// in TypeScript.

// * -------------------------------------------------------------------------------------------- *
// * As Any *
//
// any is a special type in TypeScript that represents a value of any type. When a value is declared
// with the any type, the compiler will not perform any type checks or type inference on that value.
//
// For example:

let anyValue: any = 42;

// we can assign any value to anyValue, regardless of its type
anyValue = "Hello, world!";
anyValue = true;

// * -------------------------------------------------------------------------------------------- *
// * As Const *
//
// as const is a type assertion in TypeScript that allows you to assert that an expression has a
// specific type, and that its value should be treated as a read-only value.
//
// For example:

const colors = ["red", "green", "blue"] as const;
// colors is now of type readonly ['red', 'green', 'blue']

// Using as const allows TypeScript to infer more accurate types for constants, which can lead to
// improved type checking and better type inference in your code.
