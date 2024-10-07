/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#conditional_ternary_operator
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Conditional (ternary) operator *
//
// The conditional operator is the only JavaScript operator that takes three operands. The operator
// can have one of two values based on a condition. The syntax is:
//
// condition ? val1 : val2
//
// If condition is true, the operator has the value of val1. Otherwise it has the value of val2.
// You can use the conditional operator anywhere you would use a standard operator.

// For example,

const status = age >= 18 ? "adult" : "minor";

// This statement assigns the value "adult" to the variable status if age is eighteen or more.
// Otherwise, it assigns the value "minor" to status.
