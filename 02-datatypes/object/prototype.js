/*! ********************************************************************************
Reference:
- https://www.codeguage.com/courses/js/objects-prototypes
- https://javascript.info/prototypes
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
- https://www.youtube.com/watch?v=583MGxjypgU
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Prototypes *
//
// JavaScript is an object-oriented language built around a prototype model. In JavaScript, every
// object inherits properties from its prototype, if there are any. A prototype is simply an object
// from which another object inherits properties. To create complex programs using JavaScript, one
// has to be proficient in working with prototypes — they form the very core of OOP in the language.

// Let's say we have two objects a and b as shown below:

var a = { x: 10, y: 20 };
var b = { p: 100, q: 200 };

// If we assume that a is the prototype of b, which isn't explicitly shown in this code snippet in
// any way (i.e. it's just a supposition), then here's what would happen when we access a couple of
// properties on b.

// - b.p would simply be 100.
// - b.q would be 200.
// - b.x would be... Hmm. What do you think? Well, b.x would be 10 and you might have already been
//   able to see where this value is coming from — it's being inherited from a.
// - b.y would be 20, once again thanks to inheritance.

// * -------------------------------------------------------------------------------------------- *
// * The [[Prototype]] attribute *
//
// So far, we've learnt that an object in JavaScript inherits data from another object called its
// prototype. Fair enough.
//
// But let's pause here for a moment and think about this definition once more.
//
// An object inherits data from its prototype. OK.
//
// But how does it know of its prototype in the first place? In other words, how does any given
// object know that it will be inherting properties from another given object?
//
// Well, this really is a nice observation. And the good news is that the answer is quite straightforward.
//
// It turns out that in JavaScript, as specified in section 10.1 of the ECMAScript spec, every single
// object (yes that's right, every single object) has an internal attribute called [[Prototype]] that
// simply holds a reference to the prototype of that object.
//
// Every object in JavaScript has an internal [[Prototype]] attribute which contains a reference to its
// prototype. In simpler words, all objects in the language inherit properties from their [[Prototype]]
// attribute, which simply points to their prototype object.

// Easy?

// Going with our old example of the object a and b, as follows:

var a = { x: 10, y: 20 };
var b = { p: 100, q: 200 };

// where b's prototype is a, the object b would internally look something like this:

// internal representation of b
// b: {
//     p: 100,
//     q: 200,
//     [[Prototype]]: a
// }

// First it contains its own properties p and q and then an internal attribute [[Prototype]] pointing
// to its prototype, which in this case is a.
//
// Let's consider a more familiar example.
//
// We all are used to creating arrays, and literal objects from the previous part of this course.
//
// The moment we create an array using the literal notation [] or via the Array() constructor, JavaScript
// creates an Array instance whose prototype is configured automatically.
//
// For instance, given the array arr below:

var arr = [10, -5, 60];

// if we were to show its internal representation, it would be as follows:

// internal representation of arr
// arr: {
//     0: 10,
//     1: -5,
//     2: 60,
//     length: 3,
//     [[Prototype]]: Array.prototype
// }

// This is not a complete illustration of all the internal attributes of an array, or an object in general.
// For now, we're only concerned with [[Prototype]] and hence only showcase that for simplicity.
//
// The first three properties are merely elements of the array, the fourth property is the length of the array,
// and finally the last one is its internal property [[Prototype]] holding the prototype of the array object.

// This prototype turns out to be Array.prototype i.e. the prototype property of the Array constructor.

// Later on in this chapter, we'll see the whole idea behind the prototype property of constructor functions
// and how it enables JavaScript to emulate classes from classical OOP languages along with the notion of
// constructor functions themselves.
