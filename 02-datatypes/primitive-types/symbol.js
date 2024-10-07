/*! *****************************************
Reference:
- https://www.javascripttutorial.net/symbol/
- https://javascript.info/symbol
********************************************* */

// * Creating symbols

let s = Symbol("foo");

// The Symbol() function creates a new unique value each time you call it:
console.log(Symbol() === Symbol()); // false

// The following example creates two symbols: firstName and lastName:
let firstName = Symbol("first name"),
  lastName = Symbol("last name");

console.log(firstName); // Symbol(first name)
console.log(lastName); // Symbol(last name)
console.log(typeof firstName); // symbol

// * Sharing symbols

let ssn = Symbol.for("ssn");
let citizenID = Symbol.for("ssn");

console.log(ssn === citizenID); // true
console.log(Symbol.keyFor(citizenID)); // 'ssn'

// If a symbol does not exist in the global symbol registry,
// the System.keyFor() method returns undefined.

let systemID = Symbol("sys");
console.log(Symbol.keyFor(systemID)); // undefined

// * Symbol usages
//
// ? A) Using symbols as unique values
//
// Whenever you use a string or a number in your code, you should use symbols instead.
// For example, you have to manage the status in the task management application.
//
// Before ES6, you would use strings such as open, in progress, completed, canceled,
// and on hold to represent different statuses of a task. In ES6, you can use symbols
// as follows:

let statuses = {
  OPEN: Symbol("Open"),
  IN_PROGRESS: Symbol("In progress"),
  COMPLETED: Symbol("Completed"),
  HOLD: Symbol("On hold"),
  CANCELED: Symbol("Canceled"),
};
// Example complete a task:
// task.setStatus(statuses.COMPLETED);

// ? B) Using a symbol as the computed property name of an object
//
// You can use symbols as computed property names. See the following example:

let status = Symbol("status");
let task = {
  [status]: statuses.OPEN,
  description: "Learn ES6 Symbol",
};
console.log(task); // { description: 'Learn ES6 Symbol', [Symbol(status)]: Symbol(Open) }

// To get all the enumerable properties of an object, you use the Object.keys() method.

console.log(Object.keys(task)); // ["description"]

// To get all properties of an object whether the properties are enumerable or not, you use the Object.getOwnPropertyNames() method.

console.log(Object.getOwnPropertyNames(task)); // ["description"]

// To get all property symbols of an object, you use the Object.getOwnPropertySymbols() method, which has been added in ES6.

console.log(Object.getOwnPropertySymbols(task)); //[Symbol(status)]

// The Object.getOwnPropertySymbols() method returns an array of own property symbols from an object.
