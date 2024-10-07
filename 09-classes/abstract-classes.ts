/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Abstract classes *
//
// Abstract classes in TypeScript are classes that cannot be instantiated on their own and must be
// subclassed by other classes. Abstract classes provide a blueprint for other classes and can have
// abstract methods, which are methods without a body and must be overridden by the subclass. These
// classes are useful for defining a common interface or basic functionality that other classes can
// inherit and build upon.

abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("bark");
  }
}

// An abstract method or abstract field is one that hasn’t had an implementation provided. These members
// must exist inside an abstract class, which cannot be directly instantiated.
//
// The role of abstract classes is to serve as a base class for subclasses which do implement all the
// abstract members. When a class doesn’t have any abstract members, it is said to be concrete.
//
// Let’s look at an example:

abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

// const b = new Base();
//      Cannot create an instance of an abstract class.

// We can’t instantiate Base with new because it’s abstract. Instead, we need to make a derived class
// and implement the abstract members:

class Derived extends Base {
  getName() {
    return "world";
  }
}

const d = new Derived();
d.printName();

// Notice that if we forget to implement the base class’s abstract members, we’ll get an error:

//  class Derived extends Base {
//      // ?\Non-abstract class 'Derived' does not implement inherited abstract member getName from class 'Base'.
//        // forgot to do anything
//  }
