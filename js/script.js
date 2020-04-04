/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//create an array of objects
const quotes = [
  {
    quote: "Whether you think you can, or think you can't. You're right.",
    source: "Henry Ford"
  },
  {
    quote: "An investment in knowledge always pays the best interest.",
    source: "Benjamin Franklink"
  },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    source: "Confucious"
  },
  {
    quote: "I leave you, hoping that the lamp of liberty will burn in your bosoms until there shall no longer be a doubt that all men are created free and equal.",
    source: "Abraham Lincoln",
    citation: "Speech at Chicago, Illinois",
    year: 1858
  },
  {
    quote: "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
    source: "Richard P. Feynman",
    citation: "Perfectly Reasonable Deviations from the Beaten Track: The Letters of Richard P. Feynman",
    year: 2008
  }
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  //generate a random number from 0 to 4
  let rand = Math.floor(Math.random() * (quotes.length));
  let quote = quotes[rand];
  return quote;
}




/***
 * `printQuote` function
***/
function printQuote(){
  let quote = getRandomQuote();
  let html = '';
  html += '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;
  //check whether the object actually has a citation property
  if(quote.citation){
    html += '<span class="citation">' + quote.citation + '</span>';
  }
  //check whether the object actually has a year property
  if(quote.year){
    html += '<span class="year">' + quote.year + '</span>';
  }
  html += '</p>';
  //select the according div in the DOM and set its content to the concatenated string
  let div = document.getElementById("quote-box"); 
  div.innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);