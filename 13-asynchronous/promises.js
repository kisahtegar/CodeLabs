/*! ********************************************************************************
Reference:
- https://www.codeguage.com/courses/advanced-js/promises-introduction
- https://www.codeguage.com/courses/advanced-js/promises-basics
- https://www.codeguage.com/courses/advanced-js/promises-chaining
- https://www.codeguage.com/courses/advanced-js/promises-error-handling
- https://youtu.be/Xs1EMmBLpn4
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Promises *
//
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous
// operation and its resulting value. It's like a placeholder for a value that will be available
// in the future.
//
// Promises are a much better way to work with asynchronous code in JavaScript than the old and
// error-prone callback approach. They were introduced into JavaScript with ECMAScript 6. Using
// promises, we can manage extremely complex asynchronous code with rigorous error-handling setup,
// write code in a more or less synchronous style, and keep ourselves from running into the so-called
// callback hell.
//
// Promises have three possible states:
// 1. Pending: The initial state, before the operation has completed.
// 2. Fulfilled: The operation has completed successfully, and the promise has a result.
// 3. Rejected: The operation has failed, and the promise has an error.

// * -------------------------------------------------------------------------------------------- *
// * Creating a Promise *
//
// You can create a promise using the Promise constructor. Here's a simple example:

const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous task, like fetching data
  let success = true; // Change to false to simulate failure
  setTimeout(() => {
    if (success) {
      resolve("Task completed successfully!");
    } else {
      reject("Task failed!");
    }
  }, 1000);
});

// - The Promise constructor takes a function as an argument (known as the executor), which has
//   two parameters: resolve and reject.
//    - resolve: Called when the operation is successful.
//    - reject: Called when the operation fails.

// * -------------------------------------------------------------------------------------------- *
// * Handling Promises *
//
// Once a promise is created, you handle the result using .then() for fulfillment and .catch()
// for rejection.
//
// Example:

myPromise
  .then((result) => {
    console.log(result); // If resolved, prints "Task completed successfully!"
  })
  .catch((error) => {
    console.log(error); // If rejected, prints "Task failed!"
  });

// * -------------------------------------------------------------------------------------------- *
// * Chaining Promises *
//
// One of the powerful features of promises is that you can chain them. This allows you to handle
// multiple asynchronous operations in sequence.
//
// Example:

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
  .then((result) => {
    console.log(result); // "Data fetched"
    return "Processing data"; // Return another value
  })
  .then((nextStep) => {
    console.log(nextStep); // "Processing data"
    return "Data processed";
  })
  .then((finalStep) => {
    console.log(finalStep); // "Data processed"
  })
  .catch((error) => {
    console.error(error); // If any promise is rejected, this will catch it
  });

// In the example above:
// - Each .then() returns a new value that is passed to the next .then().
// - If an error occurs at any point, the .catch() will handle it.

// * -------------------------------------------------------------------------------------------- *
// * Using finally() *
//
// The finally() method allows you to specify code that will run once the promise is settled,
// regardless of whether it was fulfilled or rejected.
//
// Example:

fetchData
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Operation completed!"); // This runs no matter what
  });

// * -------------------------------------------------------------------------------------------- *
// * Converting Callback-Based Code to Promises *
//
// Many older APIs use callback functions instead of promises. You can convert these to promises using the Promise constructor.
//
// Example (Converting a Callback Function to a Promise):

function doTask(callback) {
  setTimeout(() => {
    callback("Task done");
  }, 1000);
}

// Converting the above function to return a promise
function doTaskPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, 1000);
  });
}

doTaskPromise().then((result) => console.log(result));

// * -------------------------------------------------------------------------------------------- *
// * Common Promise Methods *

// 1. Promise.all(): Runs multiple promises in parallel and waits for all of them to resolve.

const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");

Promise.all([promise1, promise2]).then((results) => console.log(results)); // ["First", "Second"]

// 2. Promise.race(): Returns the result of the first promise that resolves or rejects.

const slow = new Promise((resolve) => setTimeout(resolve, 2000, "slow"));
const fast = new Promise((resolve) => setTimeout(resolve, 1000, "fast"));

Promise.race([slow, fast]).then((result) => console.log(result)); // "fast" (because it resolves first)

// 3. Promise.allSettled(): Waits for all promises to complete (regardless of whether they were fulfilled or rejected).

const promise3 = Promise.resolve("Resolved");
const promise4 = Promise.reject("Rejected");

Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results)
);
