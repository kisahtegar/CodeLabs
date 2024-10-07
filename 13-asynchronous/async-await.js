/*! ********************************************************************************
Reference:
- https://www.codeguage.com/courses/advanced-js/promises-introduction
- https://www.codeguage.com/courses/advanced-js/promises-basics
- https://www.codeguage.com/courses/advanced-js/promises-chaining
- https://www.codeguage.com/courses/advanced-js/promises-error-handling
- https://youtu.be/Xs1EMmBLpn4
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * async/await *
//
// - async/await is a modern way to handle asynchronous operations in JavaScript. It allows you
//   to write asynchronous code that looks and behaves like synchronous code, making it easier
//   to read and maintain.
// - Behind the scenes, async/await is built on top of Promises. Using await inside an async
//   function pauses the execution of the function until the promise resolves.

// * -------------------------------------------------------------------------------------------- *
// * How async/await Works *
//
// 1. async Function:
//
// A function must be declared with the async keyword for await to work inside it.
// An async function always returns a promise, even if you don't explicitly return one.

async function myFunction() {
  return "Hello!";
}

// In the example above, calling myFunction() returns a promise that resolves to "Hello!".

// 2. await Keyword:
//
// The await keyword is used to pause the execution of the async function until the promise is
// resolved. It can only be used inside an async function.

async function fetchData() {
  let result = await Promise.resolve("Data fetched");
  console.log(result); // "Data fetched"
}

// * -------------------------------------------------------------------------------------------- *
// * Example: Using async/await with Promises *
//
// Let's look at an example that fetches data asynchronously and uses async/await:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching data...");

  const data = await fetchData(); // Wait for fetchData to complete
  console.log(data); // "Data fetched successfully"
}

getData();

// How It Works:
// - The getData function is marked with async, so it can use await.
// - When await fetchData() is called, the execution of getData is paused until the fetchData
//   promise resolves.
// - Once fetchData resolves, data is assigned the resolved value ("Data fetched successfully"),
//   and the rest of the function continues.

// * -------------------------------------------------------------------------------------------- *
// * Error Handling with async/await *
//
// Just like with Promises, you can handle errors using try/catch blocks inside an async function
//
// Example:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error fetching data");
    }, 2000);
  });
}

async function getData() {
  try {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error); // Catches and logs the error
  }
}

getData();

// How It Works:
// - The try/catch block works with await just like with synchronous code.
// - If the promise is rejected, the code inside the catch block will run, allowing you to handle
//   the error.

// * -------------------------------------------------------------------------------------------- *
// * Sequential vs. Parallel Execution *
//
// Using await allows you to run asynchronous tasks sequentially by default. If you want to run
// them in parallel, you can use Promise.all().
//
// 1. Sequential Execution Example:

async function task1() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 1 done"), 1000)
  );
}

async function task2() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 2 done"), 1000)
  );
}

async function runTasksSequentially() {
  const result1 = await task1();
  console.log(result1); // "Task 1 done"

  const result2 = await task2();
  console.log(result2); // "Task 2 done"
}

runTasksSequentially(); // Takes 2 seconds (1 second for each task)

// In the example above, task1 and task2 run one after another, each taking 1 second, so the
// total time is 2 seconds.

// 2. Parallel Execution Example:

async function runTasksInParallel() {
  const [result1, result2] = await Promise.all([task1(), task2()]);
  console.log(result1); // "Task 1 done"
  console.log(result2); // "Task 2 done"
}

runTasksInParallel(); // Takes 1 second (both tasks run in parallel)

// By using Promise.all(), both tasks run simultaneously, so the total time is only 1 second.

// * -------------------------------------------------------------------------------------------- *
// * Mixing Promises with async/await *
//
// Sometimes you may want to use Promises and async/await together, especially when dealing
// with multiple asynchronous tasks.
//
// Example:

async function getData() {
  try {
    const data = await fetchData(); // Using await
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

getData()
  .then((result) => console.log(result)) // Using .then() for handling the result
  .catch((error) => console.error(error)); // Handling the error

// * -------------------------------------------------------------------------------------------- *
// * await in Loops *
//
// Using await inside loops can lead to sequential execution, which is sometimes not ideal
// if the tasks can be run in parallel.
//
// Example of Sequential Execution in a Loop:

async function processItems(items) {
  for (let item of items) {
    await doSomething(item); // Waits for each item to complete before moving to the next
  }
}

const items1 = [1, 2, 3];
processItems(items1);

// Example of Running Tasks in Parallel:

async function processItemsInParallel(items) {
  const promises = items.map((item) => doSomething(item)); // Creates an array of promises
  await Promise.all(promises); // Waits for all of them to complete
}

const items2 = [1, 2, 3];
processItemsInParallel(items2);
