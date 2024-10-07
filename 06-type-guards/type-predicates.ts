/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
- https://www.typescriptlang.org/docs/handbook/2/classes.html#this-based-type-guards
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Type Predicates *
//
// Type predicates are functions that return a boolean value. They are used to narrow the type of
// a variable. Type predicates are used in type guards.

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function example(x: unknown) {
  if (isString(x)) {
    // We can now call any 'string' method on 'x'.
    x.toUpperCase();
  } else {
    console.log(x);
  }
}

// To define a user-defined type guard, we simply need to define a function whose return type is
// a type predicate:
//
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }

// pet is Fish is our type predicate in this example. A predicate takes the form parameterName is
// Type, where parameterName must be the name of a parameter from the current function signature.
//
// Any time isFish is called with some variable, TypeScript will narrow that variable to that
// specific type if the original type is compatible.

// Both calls to 'swim' and 'fly' are now okay.
// let pet = getSmallPet();

// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

// Notice that TypeScript not only knows that pet is a Fish in the if branch; it also knows that in
// the else branch, you don’t have a Fish, so you must have a Bird.
//
// You may use the type guard isFish to filter an array of Fish | Bird and obtain an array of Fish:

// const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fish[] = zoo.filter(isFish);
// // or, equivalently
// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// // The predicate may need repeating for more complex examples
// const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
//   if (pet.name === "sharkey") return false;
//   return isFish(pet);
// });
