/*! *************************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- https://javascript.info/string
***************************************************************************************** */

// * -------------------------------------------------------------------------------------------- *
// * String *
//
// In JavaScript, the textual data is stored as strings. There is no separate type for a single character.
// The internal format for strings is always UTF-16, it is not tied to the page encoding.

// * Quotes *
//
// Strings can be enclosed within either single quotes, double quotes or backticks:

let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;

// Single and double quotes are essentially the same. Backticks, however, allow us
// to embed any expression into the string, by wrapping it in ${…}:

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList1 = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

// Looks natural, right? But single or double quotes do not work this way.

// If we use them and try to use multiple lines, there’ll be an error:

// let guestList2 = "Guests: // Error: Unexpected token ILLEGAL
//   * John";

// Single and double quotes come from ancient times of language creation, when the need for
// multiline strings was not taken into account. Backticks appeared much later and thus are
// more versatile.

// * -------------------------------------------------------------------------------------------- *
// * Special characters *
//
// It is still possible to create multiline strings with single and double quotes by using a
// so-called “newline character”, written as \n, which denotes a line break:

let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multiline list of guests, same as above

// As a simpler example, these two lines are equal, just written differently:

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true

// * -------------------------------------------------------------------------------------------- *
// * Accessing characters *
//
// To get a character at position pos, use square brackets [pos] or call the method str.at(pos).
// The first character starts from the zero position:

let str3 = `Hello`;

// the first character
alert(str3[0]); // H
alert(str3.at(0)); // H

// the last character
alert(str3[str3.length - 1]); // o
alert(str3.at(-1));

// As you can see, the .at(pos) method has a benefit of allowing negative position. If pos is negative,
// then it’s counted from the end of the string.

// So .at(-1) means the last character, and .at(-2) is the one before it, etc.

// The square brackets always return undefined for negative indexes, for instance:

let str4 = `Hello`;

alert(str4[-2]); // undefined
alert(str4.at(-2)); // l

// We can also iterate over characters using for..of:

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

// * -------------------------------------------------------------------------------------------- *
// * Changing the case *
//
// Methods toLowerCase() and toUpperCase() change the case:

alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); //

// Or, if we want a single character lowercased:

alert("Interface"[0].toLowerCase()); // 'i'
