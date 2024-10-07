/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Generic Functions *
//
// It’s common to write a function where the types of the input relate to the type of the output,
// or where the types of two inputs are related in some way. Let’s consider for a moment a function
// that returns the first element of an array:

function firstElement(arr: any[]) {
  return arr[0];
}

// This function does its job, but unfortunately has the return type any. It’d be better if the
// function returned the type of the array element.
//
// In TypeScript, generics are used when we want to describe a correspondence between two values.
// We do this by declaring a type parameter in the function signature:

function firstElement2<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// By adding a type parameter Type to this function and using it in two places, we’ve created a link
// between the input of the function (the array) and the output (the return value). Now when we call
// it, a more specific type comes out:

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

// * -------------------------------------------------------------------------------------------- *
// * Inference *
//
// Note that we didn’t have to specify Type in this sample. The type was inferred chosen automatically
// by TypeScript.
//
// We can use multiple type parameters as well. For example, a standalone version of map would look
// like this:

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// Note that in this example, TypeScript could infer both the type of the Input type parameter
// (from the given string array), as well as the Output type parameter based on the return value
// of the function expression (number).

// * -------------------------------------------------------------------------------------------- *
// * Constraints *
//
// We’ve written some generic functions that can work on any kind of value. Sometimes we want to
// relate two values, but can only operate on a certain subset of values. In this case, we can use
// a constraint to limit the kinds of types that a type parameter can accept.
//
// Let’s write a function that returns the longer of two values. To do this, we need a length property
// that’s a number. We constrain the type parameter to that type by writing an extends clause:

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);
//   Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

// There are a few interesting things to note in this example. We allowed TypeScript to infer the return
// type of longest. Return type inference also works on generic functions.
//
// Because we constrained Type to { length: number }, we were allowed to access the .length property of
// the a and b parameters. Without the type constraint, we wouldn’t be able to access those properties
// because the values might have been some other type without a length property.
//
// The types of longerArray and longerString were inferred based on the arguments. Remember, generics
// are all about relating two or more values with the same type!
//
// Finally, just as we’d like, the call to longest(10, 100) is rejected because the number type doesn’t
// have a .length property.

// * -------------------------------------------------------------------------------------------- *
// * Working with Constrained Values *
//
// Here’s a common error when working with generic constraints:

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // return { length: minimum };
    // Type '{ length: number; }' is not assignable to type 'Type'.
    // '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.

    return obj; // ignore this
  }
}

// It might look like this function is OK - Type is constrained to { length: number }, and the function either returns Type or a value matching that constraint. The problem is that the function promises to return the same kind of object as was passed in, not just some object matching the constraint. If this code were legal, you could write code that definitely wouldn’t work:

// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));

// * -------------------------------------------------------------------------------------------- *
// * Specifying Type Arguments *
//
// TypeScript can usually infer the intended type arguments in a generic call, but not always. For
// example, let’s say you wrote a function to combine two arrays:

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// Normally it would be an error to call this function with mismatched arrays:

// const arr = combine([1, 2, 3], ["hello"]);
//      Type 'string' is not assignable to type 'number'.

// If you intended to do this, however, you could manually specify Type:

const arr1 = combine<string | number>([1, 2, 3], ["hello"]);

// * -------------------------------------------------------------------------------------------- *
// * Guidelines for Writing Good Generic Functions *
//
// Writing generic functions is fun, and it can be easy to get carried away with type parameters.
// Having too many type parameters or using constraints where they aren’t needed can make inference
// less successful, frustrating callers of your function.

// * Push Type Parameters Down *
//
// Here are two ways of writing a function that appear similar:

function firstElement3<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement4<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement3([1, 2, 3]);
// b: any (bad)
const b = firstElement4([1, 2, 3]);

// These might seem identical at first glance, but firstElement1 is a much better way to write this
// function. Its inferred return type is Type, but firstElement2’s inferred return type is any because
// TypeScript has to resolve the arr[0] expression using the constraint type, rather than “waiting” to
// resolve the element during a call.
//
//      Rule: When possible, use the type parameter itself rather than constraining it

// * Use Fewer Type Parameters *
//
// Here’s another pair of similar functions:

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

// We’ve created a type parameter Func that doesn’t relate two values. That’s always a red flag, because
// it means callers wanting to specify type arguments have to manually specify an extra type argument for
// no reason. Func doesn’t do anything but make the function harder to read and reason about!
//
//      Rule: Always use as few type parameters as possible

// * Type Parameters Should Appear Twice *
//
// Sometimes we forget that a function might not need to be generic:

function greet1<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

greet1("world");

// We could just as easily have written a simpler version:

function greet2(s: string) {
  console.log("Hello, " + s);
}

// Remember, type parameters are for relating the types of multiple values. If a type parameter is only
// used once in the function signature, it’s not relating anything. This includes the inferred return
// type; for example, if Str was part of the inferred return type of greet, it would be relating the
// argument and return types, so would be used twice despite appearing only once in the written code.
//
//      Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it
