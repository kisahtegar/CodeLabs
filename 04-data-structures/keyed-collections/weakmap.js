/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
- https://javascript.info/weakmap-weakset
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * WeakMap *
//
// A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered symbols,
// with values of any arbitrary JavaScript type, and which does not create strong references to its
// keys. That is, an object's presence as a key in a WeakMap does not prevent the object from being
// garbage collected. Once an object used as a key has been collected, its corresponding values in
// any WeakMap become candidates for garbage collection as well — as long as they aren't strongly
// referred to elsewhere. The only primitive type that can be used as a WeakMap key is symbol — more
// specifically, non-registered symbols — because non-registered symbols are guaranteed to be unique
// and cannot be re-created.

// WeakMap allows associating data to objects in a way that doesn't prevent the key objects from
// being collected, even if the values reference the keys. However, a WeakMap doesn't allow observing
// the liveness of its keys, which is why it doesn't allow enumeration; if a WeakMap exposed any method
// to obtain a list of its keys, the list would depend on the state of garbage collection, introducing
// non-determinism. If you want to have a list of keys, you should use a Map rather than a WeakMap.

// * Description *
//
// Keys of WeakMaps must be garbage-collectable. Most primitive data types can be arbitrarily created
// and don't have a lifetime, so they cannot be used as keys. Objects and non-registered symbols can
// be used as keys because they are garbage-collectable.
//
// Why WeakMap?
//
// A map API could be implemented in JavaScript with two arrays (one for keys, one for values) shared
// by the four API methods. Setting elements on this map would involve pushing a key and value onto
// the end of each of those arrays simultaneously. As a result, the indices of the key and value would
// correspond to both arrays. Getting values from the map would involve iterating through all keys to
// find a match, then using the index of this match to retrieve the corresponding value from the array
// of values.
//
// Such an implementation would have two main inconveniences:
//
// - The first one is an O(n) set and search (n being the number of keys in the map) since both operations
//   must iterate through the list of keys to find a matching value.
// - The second inconvenience is a memory leak because the arrays ensure that references to each key and
//   each value are maintained indefinitely. These references prevent the keys from being garbage collected,
//   even if there are no other references to the object. This would also prevent the corresponding values
//   from being garbage collected.
//
// By contrast, in a WeakMap, a key object refers strongly to its contents as long as the key is not garbage
// collected, but weakly from then on. As such, a WeakMap:
//
// - does not prevent garbage collection, which eventually removes references to the key object
// - allows garbage collection of any values if their key objects are not referenced from somewhere other
//   than a WeakMap
//
// A WeakMap can be a particularly useful construct when mapping keys to information about the key that is
// valuable only if the key has not been garbage collected.
//
// But because a WeakMap doesn't allow observing the liveness of its keys, its keys are not enumerable.
// There is no method to obtain a list of the keys. If there were, the list would depend on the state of
// garbage collection, introducing non-determinism. If you want to have a list of keys, you should use a Map.

// * Constructor
//
// - WeakMap() - Creates a new WeakMap object.
//
// * Instance properties
//
// These properties are defined on WeakMap.prototype and shared by all WeakMap instances:
// - WeakMap.prototype.constructor - The constructor function that created the instance object. For WeakMap
//   instances, the initial value is the WeakMap constructor.
//
// - WeakMap.prototype[Symbol.toStringTag] - The initial value of the [Symbol.toStringTag] property is the
//   string "WeakMap". This property is used in Object.prototype.toString().
//
// * Instance methods
//
// - WeakMap.prototype.delete() - Removes any value associated to the key. WeakMap.prototype.has(key) will
//   return false afterwards.
// - WeakMap.prototype.get() - Returns the value associated to the key, or undefined if there is none.
// - WeakMap.prototype.has() - Returns a Boolean asserting whether a value has been associated to the key
//   in the WeakMap object or not.
// - WeakMap.prototype.set() - Sets the value for the key in the WeakMap object. Returns the WeakMap object.

// Examples, Using WeakMap:

const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o2, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because that is the set value
wm2.get(o3); // undefined, because there is no key for o3 on wm2

wm1.has(o2); // true
wm2.has(o2); // true (even if the value itself is 'undefined')
wm2.has(o3); // false

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
