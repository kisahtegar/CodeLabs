/*! ********************************************************************************
Reference:
- https://www.w3schools.com/js/js_this.asp
- https://javascript.info/object-methods
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
- https://javascript.info/object-methods#this-in-methods
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * What is this? *
//
// In JavaScript, the this keyword refers to an object. The this keyword refers to different
// objects depending on how it is used:
// - In an object method, this refers to the object.
// - Alone, this refers to the global object.
// - In a function, this refers to the global object.
// - In a function, in strict mode, this is undefined.
// - In an event, this refers to the element that received the event.
// - Methods like call(), apply(), and bind() can refer this to any object.
//
// Note: this is not a variable. It is a keyword. You cannot change the value of this.

// * -------------------------------------------------------------------------------------------- *
// * "this" in a Method *
//
// It’s common that an object method needs to access the information stored in the object to do
// its job. For instance, the code inside user.sayHi() may need the name of the user. To access
// the object, a method can use the this keyword. The value of this is the object “before dot”,
// the one used to call the method.

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  },
};

user.sayHi(); // John

// Here during the execution of user.sayHi(), the value of this will be user.
// Technically, it’s also possible to access the object without this, by referencing it via
// the outer variable:

let user2 = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user2.name); // "user2" instead of "this"
  },
};

// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user
// and overwrite user with something else, then it will access the wrong object.
// That’s demonstrated below:

let user3 = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user3.name); // leads to an error
  },
};

let admin = user3;
user3 = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null

// If we used this.name instead of user.name inside the alert, then the code would work.

// * -------------------------------------------------------------------------------------------- *
// * "this" in a Function *
//
// In a function, the global object is the default binding for this.
// In a browser window the global object is [object Window]:

function myFunction() {
  return this;
}

// JavaScript strict mode does not allow default binding. So, when used in a function, in strict
// mode, this is undefined.

// "use strict";
function myFunction() {
  return this;
}

// * -------------------------------------------------------------------------------------------- *
// * "this" Alone *
//
// When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window]:

let x = this;
document.getElementById("demo").innerHTML = x; // [object Window]

// In strict mode, when used alone, this also refers to the global object:

// "use strict";
let x2 = this;

// * -------------------------------------------------------------------------------------------- *
// * "this" in event handlers *
//
// The keyword this when used in an event handler refers to the element that received the event.

<button onclick="this.style.display='none'">Click to Remove Me!</button>;
// so the button will be gone

// * -------------------------------------------------------------------------------------------- *
// * "this" in arrow functions *
//
// The keyword this when used in an arrow function refers to the parent object.
//
// Arrow functions have no this value in their scope, so you can access this value of the object. But
// Normal functions have this value in their scope, in this example this value of the normal function
// is globalThis or window. and it allows to you access the global scope. if you call fo2 with this
// value of object instead of globalThis you get '"hey"'

var greeting = "hi";

const obj = {
  greeting: "hey",

  fo() {
    const greeting = "hola"; // Local variable in fo function

    const fo2 = function () {
      const greeting = "hello"; // Local variable in fo2 function

      const arrowFo = () => {
        console.log(this.greeting); // Using `this` in an arrow function
      };

      arrowFo(); // Calling arrow function
    };
    fo2.call(this); // Calling fo2 with the context of `this` from obj
  },
};

obj.fo(); // Execute obj.fo()

// Execution:
// 1. obj.fo() is called:
//    - fo() starts executing, and inside fo(), the local variable greeting = "hola" is created. This
//      doesn't affect the this.greeting of the object, which is "hey".
// 2. fo2.call(this):
//    - fo2 is called with this set to the current context of the obj. So, this inside fo2 is referring
//      to the object obj (not the global or local scope).
// 3. arrowFo() inside fo2:
//    - Inside fo2, arrowFo() is defined as an arrow function.
//    - When arrowFo is executed, it accesses this.greeting.
//    - Since arrowFo doesn't have its own this, it refers to the this from its lexical environment,
//      which is inherited from the fo2 function, where this was set to obj.
//    - Therefore, this.greeting inside arrowFo refers to obj.greeting, which is "hey".

// Output:
// "hey"

// Why is the Output "hey"?
// - The arrow function arrowFo captures the this from the lexical scope of fo2, which has this bound
//   to the object obj.
// - this.greeting in arrowFo refers to the greeting property of obj, which is "hey".
