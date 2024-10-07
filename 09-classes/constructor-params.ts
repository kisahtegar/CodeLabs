/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Constructor Params *
//
// In TypeScript, constructor parameters can be declared with access modifiers (e.g. public, private,
// protected) and/or type annotations. The parameters are then automatically assigned to properties
// of the same name within the constructor, and can be accessed within the class. For example:

class Example {
  constructor(private name: string, public age: number) {}
}

// In this example, the constructor has two parameters: name and age. name has a private access modifier,
// so it can only be accessed within the Example class. age has a public access modifier, so it can be
// accessed from outside the class as well.

class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Point2 {
  x: number = 0;
  y: number = 0;

  // Constructor overloads
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x: string | number, y: number = 0) {
    // Code logic here
  }
}

// There are just a few differences between class constructor signatures and function signatures:
//
// - Constructors can’t have type parameters - these belong on the outer class declaration
// - Constructors can’t have return type annotations - the class instance type is always what’s returned

// * -------------------------------------------------------------------------------------------- *
// * Super Calls *
//
// Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor
// body before using any this. members:

class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    // 'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);
  }
}

// Forgetting to call super is an easy mistake to make in JavaScript, but TypeScript will tell you
// when it’s necessary.
