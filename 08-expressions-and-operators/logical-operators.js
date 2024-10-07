/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Logical operators *
//
// Logical operators are typically used with Boolean (logical) values; when they are, they return
// a Boolean value. However, the &&, ||, and ?? operators actually return the value of one of the
// specified operands, so if these operators are used with non-Boolean values, they may return a
// non-Boolean value. As such, they are more adequately called "value selection operators". The
// logical operators are described in the following table.

const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false

const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat

const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0

const n5 = !true; // !t returns false
const n6 = !false; // !f returns true
const n7 = !"Cat"; // !t returns false
