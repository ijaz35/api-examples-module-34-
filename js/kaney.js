const getQuote = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => setQuote(data))
}
const setQuote = quotes => {
    // console.log(quotes);
    const quotesContainer = document.getElementById('quotes-container');
    const quote = document.createElement('p');
    quote.innerHTML = quotes.quote;
    quotesContainer.appendChild(quote);
}