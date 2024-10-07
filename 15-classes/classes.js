/*! ********************************************************************************
Reference:
- https://javascript.info/classes
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Classes *
//
// A class is essentially a blueprint for creating objects. It encapsulates data and methods that
// act on that data. While JavaScript is prototype-based under the hood, ES6 (ECMAScript 2015)
// introduced the class keyword to simplify object creation and inheritance.

class Person {
  // Constructor to initialize the object's properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method for the class
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Create an instance of the class
const person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.

// * Key Concepts in JavaScript Classes *
//
// 1. Constructor
//
// The constructor method is a special function that is called when an object is created
// from a class. It’s used to initialize the object’s properties.
//
//       constructor(property1, property2) {
//         this.property1 = property1;
//         this.property2 = property2;
//       }
//
// 2. Methods
//
// Methods in classes are functions that belong to the class and can operate on the instance’s
// data (properties). In the example above, greet is a method that prints a greeting message
// using the class properties.
//
// 3. Instantiation
//
// You create an object from a class using the new keyword. This is called instantiation.
//
//      const instance = new ClassName(arguments);
//
// 4. Prototypes
//
// Classes in JavaScript are syntactic sugar over prototype-based inheritance. Methods
// defined inside a class are stored in the prototype of the object, which helps with
// memory efficiency.
//
//      console.log(Person.prototype.greet); // The greet method is on the prototype

// * -------------------------------------------------------------------------------------------- *
// * Class Inheritance *
//
// JavaScript classes support inheritance, allowing you to create a new class that
// extends the functionality of an existing class.

// Parent class (Base class)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class (Derived class) extending the parent class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class's constructor
    this.breed = breed;
  }

  // Overriding the speak method
  speak() {
    console.log(`${this.name}, the ${this.breed}, barks.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: Buddy, the Golden Retriever, barks.

// Key Points:
// 1. extends: The extends keyword is used to create a subclass (child class) that inherits from a
//    parent class.
// 2. super: When you want to call the constructor or methods of the parent class, you use the super
//    keyword. This is especially important in the constructor of the subclass, as you need to call
//    super() to ensure the parent class is correctly initialized.

// * -------------------------------------------------------------------------------------------- *
// * Static Methods *
//
// You can define static methods in classes, which are methods that belong to the class itself, rather
// than instances of the class. Static methods are called on the class and not on instances of the class.

class MathHelper {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

console.log(MathHelper.square(3)); // Output: 9
console.log(MathHelper.cube(3)); // Output: 27

// Static methods are often used for utility functions that don't rely on instance data but instead
// provide functionality tied to the class itself.

// * -------------------------------------------------------------------------------------------- *
// * Getters and Setters *
//
// Classes can have getters and setters to define how properties are accessed and mutated. These
// methods act as accessors for the class’s properties.

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for the area
  get area() {
    return this._width * this._height;
  }

  // Setter for width
  set width(newWidth) {
    this._width = newWidth;
  }

  // Setter for height
  set height(newHeight) {
    this._height = newHeight;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50

rect.width = 20; // Update width
rect.height = 10; // Update height
console.log(rect.area); // Output: 200

// - Getters allow you to access properties in a more controlled way.
// - Setters allow you to change property values while possibly applying validation or additional logic.

// * -------------------------------------------------------------------------------------------- *
// * Private Fields (New in ES2022) *
//
// JavaScript introduced private fields using the # prefix. These fields are not accessible outside
// of the class, ensuring better encapsulation.

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // Output: 100
//console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
