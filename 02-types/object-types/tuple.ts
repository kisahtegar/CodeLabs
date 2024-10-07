/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Tuple *
//
// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

type StringNumberPair = [string, number];

const pair: StringNumberPair = ["hello", 42];

const first = pair[0]; // "hello"
const second = pair[1]; // 42

// Error: Index out of bounds
// const third = pair[2];
