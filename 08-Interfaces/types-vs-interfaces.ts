/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
- https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Types vs Interfaces *
//
// In TypeScript, both types and interfaces can be used to define the structure of objects and
// enforce type checks. However, there are some differences between the two.
//
// Types are used to create a new named type based on an existing type or to combine existing
// types into a new type. They can be created using the type keyword. For example:

type Person = {
  name: string;
  age: number;
};

const person1: Person = {
  name: "John Doe",
  age: 30,
};

// Interfaces, on the other hand, are used to describe the structure of objects and classes.
// They can be created using the interface keyword. For example:

interface Person2 {
  name: string;
  age: number;
}

const person2: Person2 = {
  name: "John Doe",
  age: 30,
};

// An interface declaration is another way to name an object type:

interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Just like when we used a type alias above, the example works just as if we had used an anonymous
// object type. TypeScript is only concerned with the structure of the value we passed to printCoord -
// it only cares that it has the expected properties. Being concerned only with the structure and
// capabilities of types is why we call TypeScript a structurally typed type system.

// * -------------------------------------------------------------------------------------------- *
// * Differences Between Type Aliases and Interfaces *
//
// Type aliases and interfaces are very similar, and in many cases you can choose between them
// freely. Almost all features of an interface are available in type, the key distinction is
// that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// * -------------------------------------------------------------------------------------------- *
// * Interface *
//
// Extending an interface:

//     interface Animal {
//       name: string;
//     }

//     interface Bear extends Animal {
//       honey: boolean;
//     }
//     const bear = getBear();
//     bear.name;
//     bear.honey;

// Adding new fields to an existing interface:

//     interface Window {
//       title: string;
//     }

//     interface Window {
//       ts: TypeScriptAPI;
//     }

//     const src = 'const a = "Hello World"';
//     window.ts.transpileModule(src, {});

// * -------------------------------------------------------------------------------------------- *
// * Type *
//
// Extending a type via intersections:

//     type Animal = {
//       name: string;
//     }

//     type Bear = Animal & {
//       honey: boolean;
//     }

//     const bear = getBear();
//     bear.name;
//     bear.honey;

// A type cannot be changed after being created:

//     type Window = {
//       title: string;
//     }

//     type Window = {
//       ts: TypeScriptAPI;
//     }
//        // Error: Duplicate identifier 'Window'.
