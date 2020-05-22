// headlines, stocks, nasa, weather, trivia
function writeHeadlines(headline){
    // Should return a string of HTML
    let source = headline.source
    let author = headline.author
    let title = headline.title
    let url = headline.url
    let description = headline.description
    
    let news_text = `<a href ="${url}"><h3>${title}</h3></a>
    <strong>${source} by: ${author}</strong>
    <p>${description}</p>
    <hr>
    `
    return news_text
}
function writeWeather(weather){
    let weather_text = `<h1>Weather</h1>
    <h3>${weather.city}, ${weather.country}</h3>
    <strong>${weather.sky_description}, and it feels like ${weather.feels_like} &#8451;</strong>
    <p>High of ${weather.high}, Low of ${weather.low} with ${weather.humidity}% humidity</p>
    <hr>
    `
    return weather_text
}
function writeTrivia(trivia){
    let trivia_text = `<h1>Trivia</h1>
    <h3>Category: ${trivia.category}</h3>
    <h3>Question: ${trivia.question}</h3>
    <small>Answer: ${trivia.answer}</small>
    `
    return trivia_text
}
function writeStocks(stock){
    let stock_text = `
    <h3>${stock.stock_name}</h3>
    <p>Open: ${stock.open}</p>
    <p>High: ${stock.high}</p>
    <p>Low: ${stock.low}</p>
    <p>Close: ${stock.close}</p>
    <p>Volume: ${stock.volume}</p>
    `
    return stock_text
}

function writeHtml(headlines, weather, trivia, stocks){
    let mail = `<head>
    <meta charset='utf-8'>
    </head>
    <body>
    <h1>OctoNews &#xF419;</h1>`
    mail +=`<h1>News</h1>`
    for(var i = 0; i < headlines.length; i++){
        //Gets individual information and appends to the mail string
        let headline_text = writeHeadlines(headlines[i])
        mail += headline_text
    }
    let weather_text = writeWeather(weather)
    let trivia_text = writeTrivia(trivia)
    mail +="<h1>Your Stocks</h1>"
    for(var i = 0; i< stocks.length; i++){
        let stock_text = writeStocks(stocks[i])
        mail += stock_text
    }
    mail += weather_text
    mail += trivia_text
    mail += "</body>"
    return mail

}
module.exports = {
    writeHtml
}