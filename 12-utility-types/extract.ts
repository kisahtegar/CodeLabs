/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Extract *
//
// Extract constructs a type by extracting from Type all union members that are assignable to Union.

type T0 = Extract<"a" | "b" | "c", "a" | "f">;
//      type T0 = "a"

type T1 = Extract<string | number | (() => void), Function>;
//      type T1 = () => void;

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T2 = Extract<Shape, { kind: "circle" }>;
//      type T2 = {
//        kind: "circle";
//        radius: number;
//      };
