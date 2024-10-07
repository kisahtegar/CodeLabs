/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/functions.html
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * More on Functions *
//
// In TypeScript, functions can be typed in a few different ways to indicate the input parameters
// and return type of the function.
//
// * Function declaration with types:

function add(a: number, b: number): number {
  return a + b;
}

// * Arrow function with types:

const multiply = (a: number, b: number): number => {
  return a * b;
};

// * Function type:

let divide: (a: number, b: number) => number;

divide = (a, b) => {
  return a / b;
};

// * -------------------------------------------------------------------------------------------- *
// * Function Type Expressions *
//
// The simplest way to describe a function is with a function type expression. These types are
// syntactically similar to arrow functions:

function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// The syntax (a: string) => void means “a function with one parameter, named a, of type string,
// that doesn’t have a return value”. Just like with function declarations, if a parameter type
// isn’t specified, it’s implicitly any.
//
//      Note that the parameter name is required. The function type (string) => void means “a
//      function with a parameter named string of type any“!
//
// Of course, we can use a type alias to name a function type:

type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  // ...
}

// * -------------------------------------------------------------------------------------------- *
// * Call Signatures *
//
// In JavaScript, functions can have properties in addition to being callable. However, the function
// type expression syntax doesn’t allow for declaring properties. If we want to describe something
// callable with properties, we can write a call signature in an object type:

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);

// Note that the syntax is slightly different compared to a function type expression - use : between
// the parameter list and the return type rather than =>.

// * -------------------------------------------------------------------------------------------- *
// * Construct Signatures *
//
// JavaScript functions can also be invoked with the new operator. TypeScript refers to these as
// constructors because they usually create a new object. You can write a construct signature by
// adding the new keyword in front of a call signature:

// type SomeConstructor = {
//   new (s: string): SomeObject;
// };
// function fn(ctor: SomeConstructor) {
//   return new ctor("hello");
// }

// Some objects, like JavaScript’s Date object, can be called with or without new. You can combine
// call and construct signatures in the same type arbitrarily:

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}
