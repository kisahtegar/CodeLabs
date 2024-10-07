/*! ********************************************************************************
Reference:
- https://medium.com/@msinha2801/explicit-binding-rule-for-this-keyword-in-js-712405b0a11
- https://medium.com/swlh/javascript-this-ac28f8e0f65d
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
- https://javascript.info/bind
- https://www.w3schools.com/js/js_function_bind.asp
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Explicit Binding *
//
// Image we have a use case where function call uses a particular object for “this binding” without
// putting a property function reference.
// Vast majority of functions have access to call(…) and apply(…). How do these work?
// They both take object to use for “this” as first parameter and then invoke the function with that
// object. As we mention what object is being used for this, its “explicit binding”.

function explicitBinding() {
  console.log("Explicit Binding");
}
var obj = {
  a: 2,
};
explicitBinding.call(obj);

// If primitive value is passed as this, its wrapped in its object form
// (new String(), new Boolean()...) known as Boxing.

// Reference to call
//
// - Function.prototype.call()
//   The call() method calls a function with a given this value and arguments provided individually.
//   Note: While the syntax…

// apply
//
// - Function.prototype.apply()
//   The apply() method calls a function with a given this value, and arguments provided as an
//   array (or an array-like…

// Hard Binding

function binding() {
  console.log("Hard Binding", this.a);
}
var obj = {
  a: 2,
};
var hardBinding = function () {
  binding.call(obj);
};
hardBinding(); //2

// No matter how hardBinding is invoked later, binding will always be called with obj.

// * -------------------------------------------------------------------------------------------- *
// * call() *
//
// The call() method allows you to invoke a function with a given this value, and arguments
// provided individually.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// Expected output: "cheese"

// Syntax:

call(thisArg);
call(thisArg, arg1);
call(thisArg, arg1, arg2);
call(thisArg, arg1, arg2, /* …, */ argN);

// * -------------------------------------------------------------------------------------------- *
// * apply() *
//
// The apply() method of Function instances calls this function with a given this value, and
// arguments provided as an array (or an array-like object).

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

// Syntax:

apply(thisArg);
apply(thisArg, argsArray);

// * -------------------------------------------------------------------------------------------- *
// * bind() *
//
// The bind() method in JavaScript allows you to create a new function with a specific context
// and optionally preset arguments. Unlike call() or apply(), bind() does not immediately invoke
// the function. Instead, it returns a new function that can be called later, either as a regular
// function or with additional arguments. This is particularly useful when you want to ensure that
// a function retains a specific context, regardless of how or when it’s invoked.

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

// Syntax:

bind(thisArg);
bind(thisArg, arg1);
bind(thisArg, arg1, arg2);
bind(thisArg, arg1, arg2, /* …, */ argN);
