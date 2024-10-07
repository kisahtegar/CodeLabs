/*! ********************************************************************************
Reference:
- https://www.codeguage.com/courses/advanced-js/iteration-introduction
- https://www.codeguage.com/courses/advanced-js/iteration-iterators
- https://www.codeguage.com/courses/advanced-js/iteration-generators
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Iterators *
//
// An iterator is an object in JavaScript that provides a way to iterate over a collection (such
// as an array, string, or custom object) one element at a time.
//
// In JavaScript, an iterator object must implement a method called next(). This method returns
// an object with two properties:
//
// 1. value: The current value in the iteration.
// 2. done: A boolean that indicates if the iteration is complete.
//
// The iterator protocol defines that when done is true, it means the iteration has completed.

// * -------------------------------------------------------------------------------------------- *
// * Creating an Iterator Manually *
//
// Let's manually create an iterator that can go through numbers 1 to 3:

function createIterator() {
  let count = 1;
  return {
    next() {
      if (count <= 3) {
        return { value: count++, done: false }; // Return current count, then increment
      } else {
        return { value: undefined, done: true }; // Iteration is complete
      }
    },
  };
}

const iterator = createIterator();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// * -------------------------------------------------------------------------------------------- *
// * Iterator Protocol *
//
// The iterator protocol is simply a convention that any object can implement. It consists of a
// method called next(), which returns an object with the value and done properties.
//
// An object is considered an iterator if it implements the next() method that behaves as described
// above.

// * -------------------------------------------------------------------------------------------- *
// * Built-in Iterators in JavaScript *
//
// Several built-in objects in JavaScript have default iterators that allow you to iterate over
// their contents. Some common ones include:
//
// - Arrays
// - Strings
// - Maps
// - Sets
//
// Example: Array Iterator
// When you use a for...of loop on an array, you’re using the array's built-in iterator. Here's
// a more direct way of using the iterator for an array:

const array = [10, 20, 30];
const iterator2 = array[Symbol.iterator](); // Get the iterator for the array

console.log(iterator2.next()); // { value: 10, done: false }
console.log(iterator2.next()); // { value: 20, done: false }
console.log(iterator2.next()); // { value: 30, done: false }
console.log(iterator2.next()); // { value: undefined, done: true }

// The Symbol.iterator is a special method that returns the default iterator for an object. By
// calling this method directly, you can manually iterate over the elements.

// * -------------------------------------------------------------------------------------------- *
// * Using Iterators with for...of Loops *
//
// The for...of loop is designed to work with objects that implement the iterator protocol. It
// repeatedly calls the next() method until done is true.
//
// Example: Iterating over an Array

const myArray = ["a", "b", "c"];

for (const value of myArray) {
  console.log(value); // Output: 'a', 'b', 'c'
}

// Behind the scenes, the for...of loop is using the array's iterator. This means you can use
// for...of with any object that follows the iterator protocol.

// * -------------------------------------------------------------------------------------------- *
// * Custom Iterators *
//
// You can also define your own iterators for custom objects.
//
// Example: Custom Object with Iterator

const customIterable = {
  data: ["apple", "banana", "cherry"],

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const fruit of customIterable) {
  console.log(fruit); // Output: 'apple', 'banana', 'cherry'
}

// In this example:
//
// - The custom object customIterable implements its own iterator using [Symbol.iterator]().
// - The for...of loop can now iterate over the object's data property.

// * -------------------------------------------------------------------------------------------- *
// * Practical Uses of Iterators *
//
// 1. Processing Large Data:
//
//    Iterators can help process large datasets one step at a time, without loading everything
//    into memory at once. This is especially useful for infinite or large data streams.
//
// 2. Implementing Custom Data Structures:
//
//    If you create custom data structures (e.g., linked lists, graphs), you can implement an
//    iterator to allow iteration over their elements.

// * -------------------------------------------------------------------------------------------- *
// * Real-World Example: Range Iterator *
//
// Let’s create a custom iterator for a range of numbers (like a Python range function):

function rangeIterator(start, end) {
  let current = start;

  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const range = rangeIterator(1, 5);

console.log(range.next()); // { value: 1, done: false }
console.log(range.next()); // { value: 2, done: false }
console.log(range.next()); // { value: 3, done: false }
console.log(range.next()); // { value: 4, done: false }
console.log(range.next()); // { value: 5, done: false }
console.log(range.next()); // { value: undefined, done: true }

// This creates an iterator that counts from 1 to 5.

// * -------------------------------------------------------------------------------------------- *
// * Summary of Iterators *
//
// - Iterators provide a standard way to iterate over a collection of data.
// - They must implement the next() method, which returns an object containing the value and
//   done properties.
// - You can create custom iterators for your own objects and use them in for...of loops or
//   other iterator-compatible contexts.
// - Built-in iterators in JavaScript include arrays, strings, maps, and sets, which you can
//   access using Symbol.iterator.
