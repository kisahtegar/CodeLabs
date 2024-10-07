/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/type-inference.html#handbook-content
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Type Inference *
//
// Type inference in TypeScript refers to the process of automatically determining the type of a
// variable based on the value assigned to it. This allows you to write code that is more concise
// and easier to understand, as the TypeScript compiler can deduce the types of variables without
// you having to explicitly specify them.
//
// Here’s an example of type inference in TypeScript:

let namee = "John Doe";

// In this example, the TypeScript compiler automatically infers that the type of the name variable
// is string. This means that you can use the name variable just like any other string in your code,
// and the TypeScript compiler will ensure that you don’t perform any invalid operations on it.s

// In TypeScript, there are several places where type inference is used to provide type information
// when there is no explicit type annotation. For example, in this code

let x1 = 3;
// let x1: number

// The type of the x variable is inferred to be number. This kind of inference takes place when
// initializing variables and members, setting parameter default values, and determining function
// return types.
//
// In most cases, type inference is straightforward. In the following sections, we’ll explore some
// of the nuances in how types are inferred.

// * -------------------------------------------------------------------------------------------- *
// * Best common type *
//
// When a type inference is made from several expressions, the types of those expressions are used
// to calculate a “best common type”. For example,

let x2 = [0, 1, null];
// let x2: (number | null)[]

// To infer the type of x in the example above, we must consider the type of each array element.
// Here we are given two choices for the type of the array: number and null. The best common type
// algorithm considers each candidate type, and picks the type that is compatible with all the
// other candidates.
//
// Because the best common type has to be chosen from the provided candidate types, there are some
// cases where types share a common structure, but no one type is the super type of all candidate
// types. For example:

// let zoo = [new Rhino(), new Elephant(), new Snake()];
// let zoo: (Rhino | Elephant | Snake)[]

// Ideally, we may want zoo to be inferred as an Animal[], but because there is no object that is
// strictly of type Animal in the array, we make no inference about the array element type. To
// correct this, explicitly provide the type when no one type is a super type of all other candidates:

// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
// let zoo: Animal[]

// When no best common type is found, the resulting inference is the union array type, (Rhino | Elephant | Snake)[].
