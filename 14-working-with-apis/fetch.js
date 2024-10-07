/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- https://medium.com/beginners-guide-to-mobile-web-development/the-fetch-api-2c962591f5c
- https://blog.openreplay.com/ajax-battle-xmlhttprequest-vs-fetch/
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://www.w3schools.com/jsref/api_fetch.asp
- https://javascript.info/fetch
- https://www.amitmerchant.com/abort-fetch-request-manually-in-javascript/
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * What is fetch? *
//
// - fetch is a built-in JavaScript function that allows you to make HTTP requests to access or
//   send data to/from a remote server.
// - It is promise-based, meaning it uses Promises to handle asynchronous operations.
// - It's simpler and more flexible than the older XMLHttpRequest.

// Basic Usage of fetch
//
// The fetch function takes two main arguments:
// 1. URL: The endpoint of the API or resource you're requesting.
// 2. Options: (Optional) An object containing request configurations such as method (GET, POST),
//    headers, body, etc.

// Syntax:

fetch(url, options)
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle the error
  });

// * -------------------------------------------------------------------------------------------- *
// * Example 1: Fetching Data with GET Request *
//
// Let's start with a simple example of fetching data from an API using the GET method, which is
// the default method for fetch.

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parsing the response to JSON
  })
  .then((data) => {
    console.log(data); // Log the data received from the API
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Explanation:
// 1. fetch sends a GET request to the given URL.
// 2. response.ok checks if the request was successful (status code between 200 and 299).
// 3. response.json() parses the response body into JSON format.
// 4. The .then() method handles the response after it has been parsed.
// 5. If there is an error (e.g., network issues or bad response), the .catch() block handles it.

// * -------------------------------------------------------------------------------------------- *
// * Example 2: Sending Data with POST Request *
//
// When sending data to a server, you can use the POST method. In this case, you need to pass
// additional options like method, headers, and body.

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is the content of the post.",
    userId: 1,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Explanation:
// - The POST method is specified using the method option.
// - headers is an object that sets the Content-Type to application/json, indicating that we're
//   sending JSON data.
// - body is the actual data sent to the server, and it needs to be stringified using JSON.stringify()
//   to convert it into a JSON string.

// * -------------------------------------------------------------------------------------------- *
// * Handling Errors *
//
// When using fetch, errors like network failure or incorrect URLs are handled using the .catch()
// method. However, if the server returns a response but with a status like 404 or 500, fetch doesn't
// throw an error automatically. You need to manually check if the response was successful using
// response.ok.
//
// Example:

fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error); // Handles both network and response errors
  });

// * -------------------------------------------------------------------------------------------- *
// * Working with Headers *
//
// You can set custom headers to specify how data is sent or received. Headers can be used to define
// content types, authorization tokens, or other metadata.
//
// Example of Setting Headers:

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer my-token",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "Content goes here",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// * -------------------------------------------------------------------------------------------- *
// * Fetching Text or Other Response Formats *
//
// While response.json() is commonly used to parse JSON responses, you can also handle other formats
// like plain text, Blob (binary data), or FormData.
//
// Fetching Text:

fetch("https://example.com/textfile.txt")
  .then((response) => response.text())
  .then((text) => console.log(text))
  .catch((error) => console.error("Error:", error));

// Fetching Blob (Binary Data):

fetch("https://example.com/image.jpg")
  .then((response) => response.blob())
  .then((imageBlob) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(imageBlob);
    document.body.appendChild(img);
  })
  .catch((error) => console.error("Error:", error));

// * -------------------------------------------------------------------------------------------- *
// * Using async/await with fetch *
//
// Instead of chaining .then() and .catch(), you can use async/await to write cleaner asynchronous
// code with fetch.
//
// Example:

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchPosts();

// * -------------------------------------------------------------------------------------------- *
// * Fetch Timeout and Abort *
//
// By default, fetch does not support a built-in timeout mechanism, but you can use an AbortController
// to cancel requests if they take too long.
//
// Example of Using AbortController:

const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000); // Abort request after 5 seconds

fetch("https://jsonplaceholder.typicode.com/posts", {
  signal: controller.signal,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Error:", error);
    }
  });
