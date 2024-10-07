/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
- https://www.youtube.com/watch?v=iiADhChRriM
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * JSON *
//
// JavaScript Object Notation (JSON) is a standard text-based format for representing structured
// data based on JavaScript object syntax. It is commonly used for transmitting data in web applications
// (e.g., sending some data from the server to the client, so it can be displayed on a web page, or
// vice versa). You'll come across it quite often, so in this article, we give you all you need to work
// with JSON using JavaScript, including parsing JSON so you can access data within it, and creating JSON.
//
//  {
//     "squadName": "Super hero squad",
//     "homeTown": "Metro City",
//     "formed": 2016,
//     "secretBase": "Super tower",
//     "active": true,
//     "members": [
//       {
//         "name": "Molecule Man",
//         "age": 29,
//         "secretIdentity": "Dan Jukes",
//         "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//       },
//       {
//         "name": "Madame Uppercut",
//         "age": 39,
//         "secretIdentity": "Jane Wilson",
//         "powers": [
//           "Million tonne punch",
//           "Damage resistance",
//           "Superhuman reflexes"
//         ]
//       },
//       {
//         "name": "Eternal Flame",
//         "age": 1000000,
//         "secretIdentity": "Unknown",
//         "powers": [
//           "Immortality",
//           "Heat Immunity",
//           "Inferno",
//           "Teleportation",
//           "Interdimensional travel"
//         ]
//       }
//     ]
//   }

// If we loaded this string into a JavaScript program and parsed it into a variable called superHeroes
// for example, we could then access the data inside it using the same dot/bracket notation we looked
// at in the JavaScript object basics article. For example:

superHeroes.homeTown;
superHeroes["active"];
