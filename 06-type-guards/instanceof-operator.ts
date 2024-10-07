/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Instanceof Operator *
//
// The instanceof operator is a way to narrow down the type of a variable. It is used to check if
// an object is an instance of a class.

class Bird {
  fly() {
    console.log("flying");
  }
  layEggs() {
    console.log("laying eggs...");
  }
}

const pet = new Bird();

// instance of

if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log("pet is not a bird");
}

// JavaScript has an operator for checking whether or not a value is an “instance” of another value.
// More specifically, in JavaScript x instanceof Foo checks whether the prototype chain of x contains
// Foo.prototype. While we won’t dive deep here, and you’ll see more of this when we get into classes,
// they can still be useful for most values that can be constructed with new. As you might have guessed,
// instanceof is also a type guard, and TypeScript narrows in branches guarded by instanceof.

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
    //   (parameter) x: Date
  } else {
    console.log(x.toUpperCase());
    //   (parameter) x: string
  }
}
