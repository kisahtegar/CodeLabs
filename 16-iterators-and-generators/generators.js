/*! ********************************************************************************
Reference:
- https://www.codeguage.com/courses/advanced-js/iteration-introduction
- https://www.codeguage.com/courses/advanced-js/iteration-iterators
- https://www.codeguage.com/courses/advanced-js/iteration-generators
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Generators *
//
// A generator is a special kind of function that can pause execution and later resume it. Generators
// allow you to yield multiple values over time, making them perfect for building iterators.
//
// Key Concepts:
//
// 1. Generator functions are declared using the function* syntax.
// 2. Inside a generator function, the yield keyword is used to pause the function and return a value.
// 3. Calling a generator function doesn’t run it immediately. Instead, it returns an iterator object.
// 4. You control the execution of a generator function by calling its next() method, which resumes
//    the function from where it left off.

// * -------------------------------------------------------------------------------------------- *
// * Basic Syntax of a Generator *

function* myGenerator() {
  yield "First yield";
  yield "Second yield";
  yield "Third yield";
}

const gen = myGenerator();

console.log(gen.next()); // { value: 'First yield', done: false }
console.log(gen.next()); // { value: 'Second yield', done: false }
console.log(gen.next()); // { value: 'Third yield', done: false }
console.log(gen.next()); // { value: undefined, done: true }

// - function* myGenerator(): The asterisk (*) denotes that this is a generator function.
// - yield: This keyword is used to pause the function and return a value. The next time next() is
//   called, the function resumes right after the last yield.
// - The next() method returns an object with two properties:
//    - value: The value yielded by the generator.
//    - done: A boolean indicating whether the generator has completed.

// * -------------------------------------------------------------------------------------------- *
// * How Generators Work *
//
// 1. Pause and Resume Execution: Generators can pause at each yield and resume execution when
//    next() is called again.
// 2. Return Values with next(): Every time you call next(), the generator resumes from where it
//    left off, processes until it encounters the next yield, and returns the value.
//
// Example: Counting with a Generator

function* countNumbers() {
  let count = 1;
  while (count <= 3) {
    yield count;
    count++;
  }
}

const counter = countNumbers();

console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }

// Each time you call counter.next(), the generator yields the next number and pauses. When there
// are no more values to yield, done: true is returned.

// * -------------------------------------------------------------------------------------------- *
// * Using Generators with for...of *
//
// A generator can be used directly in a for...of loop because it implements the iterator protocol.

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

for (const num of numberGenerator()) {
  console.log(num);
}
// Output: 1, 2, 3

// The for...of loop automatically calls next() on the generator until done is true.

// * -------------------------------------------------------------------------------------------- *
// * Passing Values to next() *
//
// You can also pass values to the next() method, which will be used inside the generator.

function* sumGenerator() {
  const num1 = yield; // Pause and wait for value
  const num2 = yield; // Pause and wait for value
  yield num1 + num2; // Yield the sum
}

const sum = sumGenerator();
sum.next(); // Start the generator
sum.next(5); // Pass 5 to the generator, num1 = 5
console.log(sum.next(10)); // Pass 10 to the generator, num2 = 10, output: { value: 15, done: false }

// In this case:
// - The first next() just starts the generator.
// - The second next(5) passes the value 5 into the generator, assigning it to num1.
// - The third next(10) passes 10, assigns it to num2, and then the generator yields the sum of 5 + 10.

// * -------------------------------------------------------------------------------------------- *
// * Returning Values from Generators *
//
// The return keyword can be used in a generator to exit the function early and return a value:

function* earlyReturnGenerator() {
  yield "Step 1";
  return "Finished early"; // Return and end the generator
  yield "Step 2"; // This will never be reached
}

const gen2 = earlyReturnGenerator();
console.log(gen2.next()); // { value: 'Step 1', done: false }
console.log(gen2.next()); // { value: 'Finished early', done: true }
console.log(gen2.next()); // { value: undefined, done: true }

// The return keyword ends the generator, and the following yield statements are never reached.

// * -------------------------------------------------------------------------------------------- *
// * Delegating Generators (yield*) *
//
// You can use the yield* expression to delegate part of a generator’s iteration to another generator
// or iterable.

function* generatorA() {
  yield "A1";
  yield "A2";
}

function* generatorB() {
  yield* generatorA(); // Delegate to generatorA
  yield "B1";
  yield "B2";
}

const gen3 = generatorB();
console.log(gen3.next()); // { value: 'A1', done: false }
console.log(gen3.next()); // { value: 'A2', done: false }
console.log(gen3.next()); // { value: 'B1', done: false }
console.log(gen3.next()); // { value: 'B2', done: false }
console.log(gen3.next()); // { value: undefined, done: true }

// In this case, the yield* generatorA() delegates control to generatorA, and after generatorA finishes,
// generatorB continues yielding its values.

// * -------------------------------------------------------------------------------------------- *
// * Advanced Example: Infinite Generator*
//
// Generators can be very useful for working with large or infinite sequences, as they only compute values when needed.

function* infiniteGenerator() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

const infinite = infiniteGenerator();
console.log(infinite.next().value); // 1
console.log(infinite.next().value); // 2
console.log(infinite.next().value); // 3
// And so on...

// This generator will continue generating numbers indefinitely, only yielding one at a time when next() is called.

// * -------------------------------------------------------------------------------------------- *
// * Practical Use Cases for Generators *
//
// 1. Lazy Evaluation:
//    Generators allow you to compute values lazily, which means you compute them only when needed.
//    This is great for working with large datasets or streams.
//
// 2. Asynchronous Programming (with Promises):
//    Generators can be combined with Promises to handle asynchronous operations in a more readable
//    way. This was a common pattern before the async/await syntax was introduced.
//
// 3. Iterating over Custom Data Structures:
//    You can use generators to iterate over custom data structures like trees or linked lists.
//
// 4. Controlling Flow:
//    Generators are perfect for managing the flow of asynchronous processes, or even state machines,
//    since they can pause and resume at specific points.

// * -------------------------------------------------------------------------------------------- *
// * Summary of Generators *
//
// - Generators are functions that can pause and resume execution using the yield keyword.
// - When called, a generator function returns an iterator that follows the iterator protocol.
// - Each yield pauses the generator, and calling next() resumes it.
// - You can pass values to a generator using next(value), and you can also end a generator early
//   using return.
// - Generators are useful for building custom iterators, lazy evaluation, and handling sequences
//   of values efficiently.

// * -------------------------------------------------------------------------------------------- *
// * -------------------------------------------------------------------------------------------- *

// Let’s explore some real-world use cases for generators. These will help you understand their
// practical importance and why they’re a valuable tool in JavaScript.

// * 1. Generators in Asynchronous Programming *
//
// Before async/await became the standard for handling asynchronous code, generators combined with
// promises were widely used to manage async flows. While async/await has largely replaced this
// pattern, understanding how generators can work with promises is still insightful.
//
// Example: Generator for Async Code Flow

function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}

function* asyncGenerator() {
  const data1 = yield fetchData("api/endpoint1");
  console.log(data1);

  const data2 = yield fetchData("api/endpoint2");
  console.log(data2);

  const data3 = yield fetchData("api/endpoint3");
  console.log(data3);
}

function handleAsync(generator) {
  const gen = generator();

  function step(nextFunc) {
    const next = nextFunc();

    if (!next.done) {
      next.value.then((result) => step(() => gen.next(result)));
    }
  }

  step(() => gen.next());
}

handleAsync(asyncGenerator);
// After 1 second: "Data from api/endpoint1"
// After 2 seconds: "Data from api/endpoint2"
// After 3 seconds: "Data from api/endpoint3"

// Explanation: The handleAsync function steps through each yield statement in the generator, waits
// for the promise to resolve, and then passes the result back into the generator using next(result).
// While async/await is more concise, this shows the power of generators in managing async flows
// before async/await was introduced.

// * -------------------------------------------------------------------------------------------- *
// * 2. Generators for State Machines *
//
// Generators can also be used to control state machines. A state machine moves between different
// states based on input, and generators are well-suited for this because they can pause and resume
// execution.
//
// Example: Traffic Light State Machine

function* trafficLight() {
  while (true) {
    console.log("RED");
    yield "red";

    console.log("GREEN");
    yield "green";

    console.log("YELLOW");
    yield "yellow";
  }
}

const light = trafficLight();

setInterval(() => {
  light.next();
}, 2000);

// Explanation: The generator trafficLight cycles between red, green, and yellow states, yielding
// a new state every time next() is called. In this case, setInterval() calls next() every 2 seconds,
// simulating a traffic light changing states.

// * -------------------------------------------------------------------------------------------- *
// * 3. Lazy Evaluation (on-demand computation) *
//
// Generators are lazy, meaning they only compute and return values when requested. This is particularly
// useful when working with large or potentially infinite datasets, as values are only generated as needed.
//
// Example: Fibonacci Sequence
//
// Let’s create an infinite generator for the Fibonacci sequence, a common example where lazy evaluation
// is important.

function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci();

console.log(fibGen.next().value); // 0
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5

// Explanation: The Fibonacci generator yields values one at a time as needed, which is ideal for
// performance since it doesn’t compute the entire sequence at once.

// * -------------------------------------------------------------------------------------------- *
// * 4. Custom Iterators for Complex Data Structures *
//
// Generators can help simplify the process of iterating over complex data structures like trees
// or graphs. In such cases, generators provide a clean way to traverse the structure step-by-step.
//
// Example: Tree Traversal Using Generators

const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4 },
    right: { value: 5 },
  },
  right: {
    value: 3,
    left: { value: 6 },
    right: { value: 7 },
  },
};

function* inOrderTraversal(node) {
  if (node.left) yield* inOrderTraversal(node.left);
  yield node.value;
  if (node.right) yield* inOrderTraversal(node.right);
}

for (const value of inOrderTraversal(tree)) {
  console.log(value);
}
// Output: 4, 2, 5, 1, 6, 3, 7

// Explanation: This generator recursively traverses the binary tree in an in-order fashion (left,
// root, right), yielding values one by one. The use of yield* simplifies delegating to the left
// and right subtrees.

// * -------------------------------------------------------------------------------------------- *
// * 5. Pausing Long-running Calculations *
//
// Generators can pause long-running computations to allow other code to run, preventing performance
// bottlenecks. This is useful in environments where you don’t want the browser or server to freeze
// during heavy computation.
//
// Example: Chunking a Large Calculation

function* largeComputation() {
  let sum = 0;
  for (let i = 1; i <= 1e6; i++) {
    sum += i;
    if (i % 1e5 === 0) yield; // Pause every 100,000 iterations
  }
  return sum;
}

const compute = largeComputation();

function runInChunks() {
  const result = compute.next();
  if (!result.done) {
    console.log("Pausing computation...");
    setTimeout(runInChunks, 100); // Resume after 100ms
  } else {
    console.log("Computation complete:", result.value);
  }
}

runInChunks();

// Explanation: The generator pauses every 100,000 iterations and resumes after a short delay,
// allowing the event loop to remain responsive and other tasks to run.
