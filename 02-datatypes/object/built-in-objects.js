/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
- https://www.tutorialride.com/javascript/javascript-built-in-objects.htm
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Built-in objects *
//
// Built-in objects, or “global objects”, are those built into the language specification itself.
// There are numerous built-in objects with the JavaScript language, all of which are accessible
// at the global scope. Some examples are:
//
// - Number;
// - Math;
// - Date;
// - String;
// - Error;
// - Function;
// - Boolean;

// * Example: Simple Program on Math Object Methods *

var value = Math.abs(20);
document.write("ABS Test Value : " + value + "<br>"); // ABS Test Value : 20

var value = Math.acos(-1);
document.write("ACOS Test Value : " + value + "<br>"); // ACOS Test Value : 3.141592653589793

var value = Math.asin(1);
document.write("ASIN Test Value : " + value + "<br>"); // ASIN Test Value : 1.5707963267948966

var value = Math.atan(0.5);
document.write("ATAN Test Value : " + value + "<br>"); // ATAN Test Value : 0.4636476090008061

// * Example : JavaScript Date() Methods Program *

var d = new Date();
document.write("<b>Locale String:</b> " + d.toLocaleString() + "<br>"); // 6/1/2022 10:27:02 AM
document.write("<b>Hours:</b> " + d.getHours() + "<br>"); // 10
document.write("<b>Day:</b> " + d.getDay() + "<br>"); // 3
document.write("<b>Month:</b> " + d.getMonth() + "<br>"); // 5
document.write("<b>FullYear:</b> " + d.getFullYear() + "<br>"); // 2024
document.write("<b>Minutes:</b> " + d.getMinutes() + "<br>"); // 60

// * Example : JavaScript String() Methods Program *

var str = "CareerRide Info";
var s = str.split();
document.write("<b>Char At:</b> " + str.charAt(1) + "<br>"); // Char At: a
document.write("<b>CharCode At:</b> " + str.charCodeAt(2) + "<br>"); // CharCode At: 114
document.write("<b>Index of:</b> " + str.indexOf("ide") + "<br>"); // Index of: 7
document.write("<b>Lower Case:</b> " + str.toLowerCase() + "<br>"); // Lower Case: careerride info
document.write("<b>Upper Case:</b> " + str.toUpperCase() + "<br>"); // Upper Case: CAREERRIDE INFO
