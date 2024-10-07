/*! ********************************************************************************
Reference:
- https://javascript.info/modules-intro
- https://javascript.info/import-export
- https://javascript.info/modules-dynamic-imports
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- https://javascript.info/modules
- https://nodejs.org/api/esm.html
- https://www.youtube.com/watch?v=cRHQNNcYf6s
- https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/
- https://www.youtube.com/watch?v=XTND4rjATXA
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Modules *
//
// In JavaScript, modules are reusable pieces of code that can export and import functionality from 
// other files. Modules help organize code into smaller, more maintainable parts, enabling separation 
// of concerns and cleaner codebases. Each module can export variables, functions, or classes, and 
// other modules can import them as needed.
// 
// Why use modules?
// 
// - Encapsulation: Keep code isolated to avoid name collisions.
// - Maintainability: Easier to manage smaller, reusable chunks of code.
// - Reusability: Functions and variables can be shared across files.
// - Lazy loading: Load code only when it’s needed to improve performance (dynamic imports).

// * -------------------------------------------------------------------------------------------- *
// * 2. Exporting and Importing *
// 
// Modules use two primary concepts: exporting and importing. Let's look at how both work.

// * Exporting from a module *
// 
// There are two main ways to export functionality from a module:
// 
// - Named exports: You can export multiple values from a module, each with its own name.
// - Default exports: You can export a single value as the default for the module.

// * Named Exports *
// 
// When using named exports, you explicitly export multiple functions, variables, or objects from 
// a module. Other modules must import them by their exact name.

// file: mathUtils.js

export const add = (x, y) => x + y;
export const subtract = (x, y) => x - y;
export const multiply = (x, y) => x * y;

// * Importing Named Exports *
// 
// To use the exported functions in another module, you use the import statement, matching the 
// names exactly.

// file: app.js

import { add, subtract } from './mathUtils.js';

console.log(add(5, 3));       // Output: 8
console.log(subtract(10, 4)); // Output: 6

// * Default Exports *
// 
// A module can have only one default export. Default exports are useful when a module exports 
// a single main thing, such as a class or function.

// file: calculator.js

export default function calculate(operation, x, y) {
  switch (operation) {
    case 'add':
      return x + y;
    case 'subtract':
      return x - y;
    case 'multiply':
      return x * y;
    default:
      return 0;
  }
}

// * Importing Default Exports *
// 
// When importing a default export, you can use any name for the imported function or object.

// file: app.js

import calculate from './calculator.js';

console.log(calculate('add', 5, 3)); // Output: 8

// You can also combine default and named exports in the same module.

// file: operations.js

export default function divide(x, y) {
  return x / y;
}

export const PI = 3.14159;

// And import them like this:

// file: app.js

import divide, { PI } from './operations.js';

console.log(divide(10, 2)); // Output: 5
console.log(PI);            // Output: 3.14159

// * -------------------------------------------------------------------------------------------- *
// * 3. Dynamic Imports *
// 
// Dynamic imports allow you to load modules asynchronously, which can improve performance by only 
// loading code when it’s needed. This feature is useful for code-splitting or lazy-loading in 
// modern web applications, particularly for single-page apps (SPAs).

// * How to Use Dynamic Imports *
// 
// The syntax for dynamic imports is similar to a function call. It returns a promise that resolves 
// when the module is loaded.

// file: app.js

// Load the module only when needed
const loadMathModule = async () => {  
  const { add, subtract } = await import('./mathUtils.js');
  console.log(add(5, 3));       // Output: 8
  console.log(subtract(10, 4)); // Output: 6
};
  
loadMathModule();

// * Use Case: Lazy Loading Components *
// 
// In modern frameworks like React, Vue, or Angular, dynamic imports are commonly used to lazy-load 
// components, meaning the component is loaded only when the user navigates to a specific route.
// 
// Example with React:

import React, { Suspense } from 'react';

// Dynamically import the component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
// export default App;

// In this example, LazyComponent is only loaded when needed, making the initial page load faster.

// * -------------------------------------------------------------------------------------------- *
// * 4. Other Important Concepts in Modules *
// 
// * Exporting Everything (export *)
// 
// If you have a module that re-exports everything from another module, you can use the export * syntax:

// file: allMathUtils.js

export * from './mathUtils.js';

// This exports all named exports from mathUtils.js.

// * Aliasing Imports/Exports
// 
// You can also rename imports and exports if there’s a naming conflict or for clarity.

// file: math.js

export { add as addition, subtract as subtraction } from './mathUtils.js';

// Now, in the importing module:

// file: app.js

import { addition, subtraction } from './math.js';

console.log(addition(5, 3)); // Output: 8
console.log(subtraction(10, 4)); // Output: 6

// * Importing Everything (import * as)
// 
// You can import all the named exports from a module as a single object:

// file: app.js

import * as math from './mathUtils.js';

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(10, 4)); // Output: 6

// This can be useful when you want to group all functions or variables under one namespace.

// * -------------------------------------------------------------------------------------------- *
// * 5. Modules in the Browser *
// 
// In modern browsers, JavaScript modules are supported natively using the <script> tag with the 
// type="module" attribute. This allows you to write modular code without the need for bundling 
// tools like Webpack.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>JavaScript Modules</title>
//   <script type="module" src="app.js"></script>
// </head>
// <body>
// </body>
// </html>

// With this setup:
// - app.js is treated as a module.
// - You can now use import and export statements within your JavaScript files, and the browser 
//   will handle the module system.