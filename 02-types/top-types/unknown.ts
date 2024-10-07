/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Unknown *
//
// unknown is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn’t
// assignable to anything but itself and any without a type assertion or a control flow based narrowing.
// Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more
// specific type.

function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  // Error: Property 'b' does not exist on type 'unknown'.
  // a.b();
}
