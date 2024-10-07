/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comma_operator
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Comma operator *
//
// The comma operator (,) evaluates both of its operands and returns the value of the last operand.
// This operator is primarily used inside a for loop, to allow multiple variables to be updated each
// time through the loop. It is regarded bad style to use it elsewhere, when it is not necessary.
// Often two separate statements can and should be used instead.
//
// For example, if a is a 2-dimensional array with 10 elements on a side, the following code uses
// the comma operator to update two variables at once. The code prints the values of the diagonal
// elements in the array:

const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //          ^                   ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
// Result:
// a[0][9]= 9
// a[1][8]= 8
// a[2][7]= 7
// a[3][6]= 6
// a[4][5]= 5

// The comma (,) operator evaluates each of its operands (from left to right) and returns the value
// of the last operand. This is commonly used to provide multiple updaters to a for loop's afterthought.
//
// Another example:

let x1 = 1;

x1 = (x1++, x1);

console.log(x1);
// Expected output: 2

x1 = (2, 3);

console.log(x1);
// Expected output: 3
