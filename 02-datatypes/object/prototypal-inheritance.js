/*! ********************************************************************************
Reference:
- https://javascript.info/prototype-inheritance
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Prototypal Inheritance *
//
// In programming, we often want to take something and extend it.
//
// For instance, we have a user object with its properties and methods, and want to make admin
// and guest as slightly modified variants of it. We’d like to reuse what we have in user, not
// copy/reimplement its methods, just build a new object on top of it.
//
// Prototypal inheritance is a language feature that helps in that.

// * [[Prototype]] *
//
// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification),
// that is either null or references another object. That object is called “a prototype”:
//
// When we read a property from object, and it’s missing, JavaScript automatically takes it from the
// prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many
// examples of such inheritance, as well as cooler language features built upon it.
//
// The property [[Prototype]] is internal and hidden, but there are many ways to set it.
//
// One of them is to use the special name __proto__, like this:

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.

// For instance:

let animal2 = {
  eats: true,
};
let rabbit2 = {
  jumps: true,
};

rabbit2.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
alert(rabbit2.eats); // true (**)
alert(rabbit2.jumps); // true

// The prototype chain can be longer:

let animal3 = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit3 = {
  jumps: true,
  __proto__: animal,
};

let longEar3 = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar3.walk(); // Animal walk
alert(longEar3.jumps); // true (from rabbit)
