/*! ********************************************************************************
Reference:
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
- https://medium.com/beginners-guide-to-mobile-web-development/the-fetch-api-2c962591f5c
- https://blog.openreplay.com/ajax-battle-xmlhttprequest-vs-fetch/
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
- https://javascript.info/xmlhttprequest
- https://www.w3schools.com/xml/xml_http.asp
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * XMLHttpRequest *
//
// - XMLHttpRequest (XHR) is a built-in JavaScript object that allows you to interact with servers
//   by sending HTTP or HTTPS requests to load data and receive responses.
// - Unlike fetch, XMLHttpRequest does not return a Promise and uses event handlers or callbacks to
//   handle the response.

// * Basic Usage of XMLHttpRequest *
// Steps:
// 1. Create an instance of XMLHttpRequest.
// 2. Set up a request by specifying the HTTP method (GET, POST, etc.) and the URL.
// 3. Send the request to the server.
// 4. Handle the response by monitoring the ready state and status of the request.

// * -------------------------------------------------------------------------------------------- *
// * Example 1: Basic GET Request *

// Step 1: Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Step 2: Set up a request (method, URL, async)
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

// Step 3: Set up an event handler for when the request is complete
xhr.onreadystatechange = function () {
  // Check if the request is complete and the response status is OK
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data); // Handle the response data
  }
};

// Step 4: Send the request
xhr.send();

// Explanation:
// 1. xhr.open(): Prepares the request by specifying the HTTP method (GET) and the URL. The third
//    argument (true) indicates that the request is asynchronous.
// 2. xhr.onreadystatechange: A function that gets called whenever the ready state of the XMLHttpRequest
//    changes. The ready state goes from 0 to 4:
//     - 0: Unsent
//     - 1: Opened
//     - 2: Headers received
//     - 3: Loading
//     - 4: Done (The request has been completed)
// 3. xhr.status === 200: Checks if the status code of the response is 200 (OK), meaning the request was successful.
// 4. xhr.responseText: The raw response data as a string, which you can parse into JSON if needed.

// * -------------------------------------------------------------------------------------------- *
// * Example 2: Sending a POST Request with Data *
//
// For POST requests, we need to send data along with the request. The data is typically sent in
// the body, and you must set the appropriate headers for the content type.

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201) {
    const data = JSON.parse(xhr.responseText);
    console.log("Success:", data);
  }
};

const postData = JSON.stringify({
  title: "New Post",
  body: "This is the content of the new post.",
  userId: 1,
});

xhr.send(postData);

// Explanation:
// 1. xhr.setRequestHeader(): Sets the Content-Type header to application/json to inform the server
//    that we're sending JSON data.
// 2. xhr.send(): Sends the request to the server, along with the postData object (which is a JSON
//    string).
// 3. Status 201: The status code 201 indicates that the resource was created successfully (common
//    for POST requests).

// * -------------------------------------------------------------------------------------------- *
// * Monitoring Progress and Errors *
//
// You can monitor the progress of the request and handle errors using additional event listeners.

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log("Data received:", JSON.parse(xhr.responseText));
    } else {
      console.error("Error:", xhr.statusText);
    }
  }
};

// Monitoring progress of the request
xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // Total size is unknown
  }
};

// Handling network errors
xhr.onerror = function () {
  console.error("Network Error");
};

// Timeout handling (optional)
xhr.timeout = 5000; // Set timeout to 5 seconds
xhr.ontimeout = function () {
  console.error("Request timed out");
};

xhr.send();

// Key Points:
// 1. onprogress: Allows you to monitor the progress of the request, such as how much data has been loaded.
// 2. onerror: Handles network errors, like failed requests.
// 3. ontimeout: Handles cases where the request takes too long (more than 5 seconds in this case).

// * -------------------------------------------------------------------------------------------- *
// * Synchronous vs. Asynchronous Requests *
//
// While it's almost always better to use asynchronous requests, XMLHttpRequest also supports synchronous
// requests (by setting the async parameter to false in xhr.open). However, synchronous requests block
// the execution of JavaScript, which can freeze the browser, so it’s not recommended.

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", false); // Synchronous request (not recommended)
xhr.send();

if (xhr.status === 200) {
  console.log("Synchronous response:", JSON.parse(xhr.responseText));
}

// * -------------------------------------------------------------------------------------------- *
// * Using XMLHttpRequest with FormData *
//
// You can use the FormData object to easily send form data via XMLHttpRequest without needing to manually
// encode it.

const xhr = new XMLHttpRequest();
xhr.open("POST", "/submit-form", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("Form submitted successfully:", xhr.responseText);
  }
};

const formData = new FormData();
formData.append("name", "John Doe");
formData.append("email", "johndoe@example.com");

xhr.send(formData);

// * -------------------------------------------------------------------------------------------- *
// * Abort a Request *
//
// You can abort an ongoing request if you no longer need the data or if it’s taking too long.

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("Request successful:", xhr.responseText);
  }
};

xhr.send();

// Abort the request after 3 seconds
setTimeout(() => {
  xhr.abort();
  console.log("Request aborted");
}, 3000);
