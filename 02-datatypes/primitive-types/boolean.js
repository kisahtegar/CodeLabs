/*! **************************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
- https://masteringjs.io/tutorials/fundamentals/null
****************************************************************************************** */

// You would rarely need to explicitly convert something to a boolean value, as JavaScript
// does this automatically in boolean contexts, so you can use any value as if it's a boolean,
// based on its truthiness. You are also encouraged to use if (condition) and if (!condition)
// instead of if (condition === true) or if (condition === false) in your own code so you can
// take advantage of this convention. However, making sure that values representing conditions
// are always booleans can help clarify the intent of your code.

// Do this:
// This always returns a boolean value
const isObject1 = (obj) => !!obj && typeof obj === "object";

// Or this:
const isObject2 = (obj) => Boolean(obj) && typeof obj === "object";

// Or this:
const isObject3 = (obj) => obj !== null && typeof obj === "object";

// Instead of this:
// This may return falsy values that are not equal to false
const isObject4 = (obj) => obj && typeof obj === "object";

// * -------------------------------------------------------------------------------------------- *
// * Boolean primitives and Boolean objects *
//
// For converting non-boolean values to boolean, use Boolean as a function or use the double NOT
// operator. Do not use the Boolean() constructor with new.

// const good = Boolean(expression);
// const good2 = !!expression;

const bad = new Boolean(expression); // don't use this!

// This is because all objects, including a Boolean object whose wrapped value is false, are truthy
// and evaluate to true in places such as conditional statements. (See also the boolean coercion
// section below.)

if (new Boolean(true)) {
  console.log("This log is printed.");
}

if (new Boolean(false)) {
  console.log("This log is ALSO printed.");
}

const myFalse = new Boolean(false); // myFalse is a Boolean object (not the primitive value false)
const g = Boolean(myFalse); // g is true
const myString = new String("Hello"); // myString is a String object
const s = Boolean(myString); // s is true

// * -------------------------------------------------------------------------------------------- *
// * Creating false values *

const bNoParam = Boolean();
const bZero = Boolean(0);
const bNull = Boolean(null);
const bEmptyString = Boolean("");
const bfalse = Boolean(false);

// * Creating true values *

const btrue = Boolean(true);
const btrueString = Boolean("true");
const bfalseString = Boolean("false");
const bSuLin = Boolean("Su Lin");
const bArrayProto = Boolean([]);
const bObjProto = Boolean({});
