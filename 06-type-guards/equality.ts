/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Equality *
//
// TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow
// types. For example:

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

// When we checked that x and y are both equal in the above example, TypeScript knew their types
// also had to be equal. Since string is the only common type that both x and y could take on,
// TypeScript knows that x and y must be a string in the first branch.

// Checking against specific literal values (as opposed to variables) works also. In our section
// about truthiness narrowing, we wrote a printAll function which was error-prone because it
// accidentally didn’t handle empty strings properly. Instead we could have done a specific
// check to block out nulls, and TypeScript still correctly removes null from the type of strs.

function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        // (parameter) strs: string[]
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);

      // (parameter) strs: string
    }
  }
}
