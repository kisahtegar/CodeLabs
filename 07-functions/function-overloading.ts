/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Function Overloading *
//
// Function Overloading in TypeScript allows multiple functions with the same name but with different
// parameters to be defined. The correct function to call is determined based on the number, type, and
// order of the arguments passed to the function at runtime.

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add("Hello", " World")); // "Hello World"

// Some JavaScript functions can be called in a variety of argument counts and types. For example,
// you might write a function to produce a Date that takes either a timestamp (one argument) or a
// month/day/year specification (three arguments).

// In TypeScript, we can specify a function that can be called in different ways by writing overload
// signatures. To do this, write some number of function signatures (usually two or more), followed
// by the body of the function:

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);
//  No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.

// In this example, we wrote two overloads: one accepting one argument, and another accepting three
// arguments. These first two signatures are called the overload signatures.
//
// Then, we wrote a function implementation with a compatible signature. Functions have an implementation
// signature, but this signature can’t be called directly. Even though we wrote a function with two optional
// parameters after the required one, it can’t be called with two parameters!

// * -------------------------------------------------------------------------------------------- *
// * Overload Signatures and the Implementation Signature *
//
// This is a common source of confusion. Often people will write code like this and not understand
// why there is an error:

function fn(x: string): void;
function fn() {
  // ...
}
// Expected to be able to call with zero arguments
// fn();
// Expected 1 arguments, but got 0.

// Again, the signature used to write the function body can’t be “seen” from the outside.
//
//      The signature of the implementation is not visible from the outside. When writing an overloaded
//      function, you should always have two or more signatures above the implementation of the function.
//
// The implementation signature must also be compatible with the overload signatures. For example,
// these functions have errors because the implementation signature doesn’t match the overloads in
// a correct way:

function fn2(x: boolean): void;
// Argument type isn't right
// function fn2(x: string): void;
//      This overload signature is not compatible with its implementation signature.
function fn2(x: boolean) {}

function fn3(x: string): string;
// Return type isn't right
// function fn3(x: number): boolean;
//      This overload signature is not compatible with its implementation signature.
function fn3(x: string | number) {
  return "oops";
}

// * -------------------------------------------------------------------------------------------- *
// * Writing Good Overloads *
//
// Like generics, there are a few guidelines you should follow when using function overloads.
// Following these principles will make your function easier to call, easier to understand,
// and easier to implement.
//
// Let’s consider a function that returns the length of a string or an array:

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

// This function is fine; we can invoke it with strings or arrays. However, we can’t invoke it
// with a value that might be a string or an array, because TypeScript can only resolve a function
// call to a single overload:

len(""); // OK
len([0]); // OK
// len(Math.random() > 0.5 ? "hello" : [0]);
// No overload matches this call.
//   Overload 1 of 2, '(s: string): number', gave the following error.
//     Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
//       Type 'number[]' is not assignable to type 'string'.
//   Overload 2 of 2, '(arr: any[]): number', gave the following error.
//     Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
//       Type 'string' is not assignable to type 'any[]'.

// Because both overloads have the same argument count and same return type, we can instead write
// a non-overloaded version of the function:

function len2(x: any[] | string) {
  return x.length;
}

// This is much better! Callers can invoke this with either sort of value, and as an added bonus,
// we don’t have to figure out a correct implementation signature.

// Always prefer parameters with union types instead of overloads when possible
