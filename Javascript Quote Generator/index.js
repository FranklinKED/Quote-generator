import quotes from './data.js'

let quote = document.querySelector('.quote-title')
let quoteAuthor = document.querySelector('.quote-author')
const btn = document.getElementById('btn')

btn.addEventListener('click', newQuote)

function newQuote(){
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote
    quoteAuthor.innerText = quotes[random].author
}


