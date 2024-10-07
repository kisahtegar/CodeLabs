/*! ********************************************************************************
Reference:
- https://javascript.info/map-set#map
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- https://blog.logrocket.com/es6-keyed-collections-maps-and-sets/
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Map *
//
// Map is a collection of keyed data items, just like an Object. But the main difference is that
// Map allows keys of any type.

// Methods and properties are:
//
// - new Map() – creates the map.
// - map.set(key, value) – stores the value by the key.
// - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// - map.has(key) – returns true if the key exists, false otherwise.
// - map.delete(key) – removes the element (the key/value pair) by the key.
// - map.clear() – removes everything from the map.
// - map.size – returns the current element count.

// For instance:

let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'

alert(map.size); // 3

// Map can also use objects as keys.
//
// For instance:

let john1 = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john1 is the key for the map
visitsCountMap.set(john1, 123);

alert(visitsCountMap.get(john1)); // 123

// Using objects as keys is one of the most notable and important Map features. The same does not
// count for Object. String as a key in Object is fine, but we can’t use another Object as a key
// in Object.

// Let’s try:

let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
alert(visitsCountObj["[object Object]"]); // 123

// As visitsCountObj is an object, it converts all Object keys, such as john and ben above, to
// same string "[object Object]". Definitely not what we want.

// Every map.set call returns the map itself, so we can “chain” the calls:

map.set("1", "str1").set(1, "num1").set(true, "bool1");

// * Iteration over Map *
//
// For looping over a map, there are 3 methods:
//
// - map.keys() – returns an iterable for keys,
// - map.values() – returns an iterable for values,
// - map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
//
// For instance:

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}
