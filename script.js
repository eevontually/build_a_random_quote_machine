window.onload =init;

function init() {
  generateQuote()
}

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * QUOTEBANK.length);
 let randomQuoteData = QUOTEBANK[randomIndex];
  
  
  let twitterLink= "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
  
  
  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g,"%20");
  twitterLink += quoteInApiFormat;
  let authorInApiFormat = " - " + randomQuoteData.author.replace(/ /g,"%20");
twitterLink += authorInApiFormat;
 
  
  document.getElementById("tweet-quote").href= twitterLink;
  document.getElementById("text").innerHTML = randomQuoteData.quote;
  document.getElementById("author").innerHTML = randomQuoteData.author;;
}

