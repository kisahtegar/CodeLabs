/*! ********************************************************************************
Reference:
- https://javascript.info/recursion
- https://www.codeguage.com/courses/js/functions-recursions
- https://developer.mozilla.org/en-US/docs/Glossary/Recursion
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Recursion *
//
// Recursion is a concept where a function calls itself, either directly or indirectly, to solve a
// problem. In JavaScript, recursion is useful when you need to break down a problem into smaller,
// more manageable subproblems, particularly when the problem can be divided into similar smaller
// instances of the same problem.
//
// How Recursion Works
//
// A recursive function must have:
// 1. Base Case: A condition that stops the recursion. Without this, the function will call itself
//    indefinitely, leading to a stack overflow.
// 2. Recursive Case: The part of the function where the function calls itself with a modified
//    argument, gradually moving towards the base case.
//
// Example of Recursion: Factorial
// A common example of recursion is calculating the factorial of a number.
// Factorial is defined as the product of all positive integers up to a given number. For example:
//
//      5! = 5 * 4 * 3 * 2 * 1 = 120
//
// Factorial using Recursion:

function factorial(n) {
  // Base case: when n is 1, stop recursion
  if (n === 1) {
    return 1;
  }

  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Explanation:
// 1. Base case: If n === 1, the function returns 1. This is the stopping point for the recursion.
// 2. Recursive case: The function keeps calling itself with n - 1 until it reaches the base case.
//    The intermediate results are multiplied together to compute the factorial.
//
// Recursive Steps Breakdown:
// For factorial(5):
//
// - factorial(5) calls factorial(4)
// - factorial(4) calls factorial(3)
// - factorial(3) calls factorial(2)
// - factorial(2) calls factorial(1)
// - factorial(1) returns 1, and then the recursion starts "unwinding":
//     - factorial(2) returns 2 * 1 = 2
//     - factorial(3) returns 3 * 2 = 6
//     - factorial(4) returns 4 * 6 = 24
//     - factorial(5) returns 5 * 24 = 120

// * -------------------------------------------------------------------------------------------- *
// * Another Example: Fibonacci Sequence] *
//
// The Fibonacci sequence is another classic example of recursion, where each number is the sum
// of the two preceding ones. The sequence starts as:
//
//    0, 1, 1, 2, 3, 5, 8, 13, ...
//
// The Fibonacci number at position n is calculated as:
//
//    fib(n) = fib(n - 1) + fib(n - 2)
//
// Fibonacci using Recursion:

function fibonacci(n) {
  // Base case: the first two numbers of the Fibonacci sequence
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // Recursive case: sum of the two preceding numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8 (sequence: 0, 1, 1, 2, 3, 5, 8)

// Explanation:
// 1. Base case: If n is 0 or 1, return 0 or 1 respectively.
// 2. Recursive case: The function calls itself twice, once with n - 1 and once with n - 2,
//    summing the results.

// For fibonacci(6):
// - fibonacci(6) calls fibonacci(5) and fibonacci(4)
// - fibonacci(5) calls fibonacci(4) and fibonacci(3)
// - This continues until reaching the base case (fibonacci(1) and fibonacci(0)).

// * -------------------------------------------------------------------------------------------- *
// * Recursion vs Iteration *
//
// Recursion can sometimes be more intuitive for solving certain problems, but it can also lead
// to performance issues for large inputs because each recursive call adds to the call stack.
//
// For example, the Fibonacci function above recalculates values unnecessarily, leading to
// exponential time complexity. A more efficient solution would be to use memoization or an
// iterative approach to avoid repeated calculations.

// * -------------------------------------------------------------------------------------------- *
// * Tail Recursion *
//
// Tail recursion is a special kind of recursion where the recursive call is the last operation
// in the function. This can be optimized by some JavaScript engines to avoid adding new frames
// to the call stack, preventing stack overflow.
//
// Example of Tail Recursion:

function tailFactorial(n, accumulator = 1) {
  if (n === 1) {
    return accumulator;
  }
  return tailFactorial(n - 1, n * accumulator);
}

console.log(tailFactorial(5)); // Output: 120

// Conclusion
//
// Recursion is a powerful tool in JavaScript, especially for solving problems that can be
// broken down into smaller, repetitive tasks. However, it’s important to:
// 1. Define a base case to avoid infinite recursion.
// 2. Be mindful of performance for large inputs.
// 3. Use tail recursion or iteration for certain cases where deep recursion could lead to stack overflow.
