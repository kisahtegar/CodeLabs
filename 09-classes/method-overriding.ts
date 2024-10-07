/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/classes.html#overriding-methods
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Method Overriding *
//
// In TypeScript, method overriding is a mechanism where a subclass provides a new implementation
// for a method that is already defined in its parent class. This allows the subclass to inherit
// the behavior of the parent class, but change its behavior to fit its own needs.
//
// To override a method in TypeScript the signature of the method in the subclass must match exactly
// with the signature of the method in the parent class.

class Animal2 {
  makeSound(): void {
    console.log("Making animal sound");
  }
}

class Dog2 extends Animal2 {
  makeSound(): void {
    console.log("Bark");
  }
}

let animal2: Animal2;

animal2 = new Dog2();
animal2.makeSound(); // Output: Bark

// In this example, the Dog2 class overrides the makeSound method defined in the Animal class and
// provides its own implementation. When the makeSound method is called on an instance of the Dog
// class, it will use the implementation in the Dog class rather than the implementation in the
// Animal class.
