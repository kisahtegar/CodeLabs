/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays
- https://www.youtube.com/watch?v=UYkJaW3pmj0
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * JavaScript typed arrays *
//
// In Javascript, a typed array is an array-like buffer of binary data. There is no JavaScript
// property or object named TypedArray, but properties and methods can be used with typed array
// objects.

// Typed array views
//
// Typed array views have self-descriptive names and provide views for all the usual numeric types
// like Int8, Uint32, Float64 and so forth. There is one special typed array view, Uint8ClampedArray,
// which clamps the values between 0 and 255. This is useful for Canvas data processing, for example.

// Type	                Value Range	           Size in bytes	Web IDL type
//
// Int8Array            -128 to 127	                1	            byte
// Uint8Array	        0 to 255	                1	            octet
// Uint8ClampedArray    0 to 255	                1	            octet
// Int16Array	        -32768 to 32767	            2	            short
// Uint16Array          0 to 65535	                2	            unsigned short
// Int32Array           -2147483648 to 2147483647	4	            long
// Uint32Array          0 to 4294967295	            4	            unsigned long
// Float16Array         -65504 to 65504	            2	            N/A
// Float32Array         -3.4e38 to 3.4e38	        4	            unrestricted float
// Float64Array         -1.8e308 to 1.8e308	        8	            unrestricted double
// BigInt64Array        -263 to 263 - 1	            8	            bigint
// BigUint64Array       0 to 264 - 1	            8	            bigint
