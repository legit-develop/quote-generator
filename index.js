//DOM Manipulation

const btnEl = document.getElementById("btn");
//console.log(btnEl);
const apiURL = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const headingEl = document.getElementById("heading");

//function
async function getQuote() {
  try {
    //displayed text while waiting for api data
    btnEl.innerText = "loading...";
    btnEl.disabled = true;
    //text to display while waiting for api data
    quoteEl.innerText = "updating...";
    headingEl.innerText = "";
    authorEl.innerText = "";
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
    btnEl.innerText = "Get A Quote";
    btnEl.disabled = false;
  } catch (error) {
    console.log(error);
    quoteEl.innerText = `An error happened, try again later`;
    authorEl.innerText = "";
  }
}

getQuote();

btnEl.addEventListener("click", getQuote);
