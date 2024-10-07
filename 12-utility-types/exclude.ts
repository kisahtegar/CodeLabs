/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Exclude *
//
// Exclude constructs a type by excluding from UnionType all union members that are assignable to
// ExcludedMembers.

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
