//DOM Manipulation

const btnEl = document.getElementById("btn");
//console.log(btnEl);
const apiURL = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

//function
async function getQuote() {
  //fetch method
  const response = await fetch(apiURL);
  //convert to json
  const data = await response.json();
  // console.log(data);
  const quoteContent = data.content;
  const quoteAuthor = data.author;
  //console.log(quoteContent);
  //console.log(quoteAuthor);
  quoteEl.innerText = quoteContent;
  authorEl.innerText = `~ ${quoteAuthor}`;
}

btnEl.addEventListener("click", getQuote);
