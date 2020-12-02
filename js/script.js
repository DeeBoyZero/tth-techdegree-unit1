/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Mathieu Desilets
******************************************/

// Providing an array of quote objects to be used by the `getRandomQuote` function.

const quotes = [
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    source: "Cory House"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
    citation: "Refactoring: Improving the Design of Existing Code",
    year: "1999"
  },
  {
    quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    source: "Bill Gates"
  },
  {
    quote: "In a room full of top software designers, if two agree on the same thing, that's a majority.",
    source: "Bill Curtis",
    //Added the tags property (Exceed Expectations stuff)
    tags: "humor"
  },
  {
    quote: "Once a new technology starts rolling, if you're not part of the steamroller, you're part of the road.",
    source: "Stewart Brand"
  }
];

// A simple function that picks a random item from an array passed as an argument.

function getRandomQuote(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
};

// Functions that will be used for randomizing the background color of the page. 

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * 255);
  return randomNum;
}

function getRandomRGB() {
  let randomRGB = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
  return randomRGB;
};

// A function that generates HTML code from a random quote.
// The quote is displayed on the webpage. The background color of the page changes everytime the function is called.

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = `
            <p class="quote">${randomQuote.quote}</p>
            <p class="source">${randomQuote.source}
            `;
  if ( randomQuote.citation ) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if ( randomQuote.year ) {
    html += `<span class="year">${randomQuote.year}</span>"`;
  }
  //Added the tags property (Exceed Expectations stuff)
  if ( randomQuote.tags ) {
    html += `<span class="tags">${randomQuote.tags}</span>`;
  }

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;

  //Change the background color of the page everytime the quote changes (Exceed Expectations stuff)
  document.body.style.backgroundColor = getRandomRGB();
};

// click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Auto-refresh the quotes every 10 seconds (Exceed Expectations stuff)
setInterval(function() { printQuote(); }, 10000);