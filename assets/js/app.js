"use strict";

/**
 * San Quotes - https://quotes.santhoshveer.com
 * Developed by Santhosh veer (https://santhoshveer.com)
 * File - app.js
 * Version - 1.0.1
 * Updated at - 27-07-2018
 */

//REST API
const endpoint = "https://quotes.santhoshveer.com/quoteswritten.json";

// FETCH API
fetch(endpoint)
.then(response => response.json())
.then(data => {

// GEt JSON Output on Browser Console log
console.log(data)

// Generate Random Quotes
function genQuote() {
var quotesContent = data;
var random = quotesContent.quoteswritten[Math.floor(Math.random() * quotesContent.quoteswritten.length)];
const quotesdata = document.getElementById("sanquotes");
document.getElementById("quotesdata").innerHTML = random.quotes;
}

// wait for page load before displaying content
$(document).ready(function() {

  // load an initial quote
   genQuote();

  // retrieve a new quote when the button is clicked
  $("#generateQuotes").on("click", function() {
    genQuote();

   });
  });
});
