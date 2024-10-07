/*! ********************************************************************************
Reference:
- https://medium.com/@ensallee/function-borrowing-in-javascript-4bd671e9d7b4
- https://stackoverflow.com/questions/69892281/when-would-i-use-function-borrowing
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Function Borrowing *
//
// When we create JavaScript objects, we typically associate them with certain behavior. Consider
// the below example:

class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  tellUsAboutYourSelf() {
    return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`;
  }

  woof() {
    return "WOOF!!!";
  }
}

let fido = new Dog("Fido", 3, "dachshund");
fido.tellUsAboutYourSelf(); // 'My name is Fido. I am a dachshund and I am 3 years old.'

// We’ve created a class Dog with three properties and two methods, one of which is tellUsAboutYourSelf().
// We’ve also created a new instance of Dog, which is saved into the variable fido. Pretty straightforward.
// Now, let’s create another class and instantiate a new instance:

class Cat {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  meow() {
    return "MEOW!!!";
  }
}

let sparkles = new Cat("Sparkles", 5, "Siamese");
sparkles.tellUsAboutYourSelf(); // TypeError: sparkles.tellUsAboutYourSelf is not a function

// We’ve created a Cat object with the same properties as our Dog object, but our instance of Cat, which
// is saved into the variable sparkles, isn’t able to tell us about itself. We could refactor our code so
// that the class Cat inherits from the class Dog, but in that scenario, all of our Cat objects would be
// able to “woof,” which doesn’t seem appropriate or necessary. Enter: function borrowing.

// * -------------------------------------------------------------------------------------------- *
// * How does it work? *
//
// Function borrowing allows us to use the methods of one object on a different object without having to
// make a copy of that method and maintain it in two separate places. It is accomplished through the use
// of .call(), .apply(), or .bind(), all of which exist to explicitly set this on the method we are
// borrowing.

// Given the objects we created above, take a look at function borrowing in action:

fido.tellUsAboutYourSelf.call(sparkles); // ’My name is Sparkles. I am a Siamese and I am 5 years old.’
fido.tellUsAboutYourSelf.apply(sparkles); // ’My name is Sparkles. I am a Siamese and I am 5 years old.’
const describeSparkles = fido.tellUsAboutYourSelf.bind(sparkles);
describeSparkles(); // ’My name is Sparkles. I am a Siamese and I am 5 years old.’

// Each of these examples work because this, when referenced inside a method, refers to the object that
// received the method call. .call(), .apply(), and .bind() work by allowing us to alter the object to
// which this refers inside of the .tellUsAboutYourSelf() method. Whereas .call() and .apply() immediately
// execute the function call, .bind() saves the function for later. Once we’ve saved the borrowed function
// into the variable describeSparkles, we can call invoke describeSparkles one hundred lines later and still
// see the same output.
