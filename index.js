require('dotenv').config()
const requests = require("./request/request");
const create_urls = require("./request/create_urls")
const request_prep = require("./request/stock_request_prep")
// Parse Modules
const nasa_parse = require("./parse/NasaParse")
const headline_parse = require("./parse/HeadlineParse")
const weather_parse = require("./parse/WeatherParse")
const trivia_parse = require("./parse/TriviaParse")
const stock_parse = require("./parse/StockParse")
const create_email = require("./mailer/create_email")
const send_email = require("./mailer/send_email")

function emailHandling(usHeadlineObj, weatherObj,triviaObj, parsed_stock_list, recipient){
    let email_html = create_email.writeHtml(usHeadlineObj, weatherObj,triviaObj, parsed_stock_list)
    send_email.sendEmail(email_html, recipient)
}

const go = async() => {
    const stocks = ["AAPL","TSLA","MSFT","TWTR"]//"NFLX","CMG","BAC"]
    const city = "Frankfurt"
    const recipient = "e.julianmoses6@gmail.com"
    try{
        // Headlines
        let usHeadlineResponse = await requests.usHeadlineRequest()
        let usHeadlineObj = headline_parse.parseNewsResponse(await usHeadlineResponse)
        // Stocks
        let stock_array = create_urls.stocks(stocks)
        const stockResponses = request_prep.getStockInfo(stock_array)
        // promise handled in getStockInfo
        const parsed_stock_list = stock_parse.loopStockResponse(await stockResponses)
        // NASA APOD
        // let nasaApodResponse = requests.nasaPictureRequest()
        // let nasaObj = nasa_parse.parseApodResponse(await nasaApodResponse)
        // Weather
        let weatherResponse = requests.weatherRequest(city)
        let weatherObj = weather_parse.parseWeatherResponse(await weatherResponse)
        // Trivia
        let triviaResponse = requests.triviaRequest()
        let triviaObj = trivia_parse.parseTriviaResponse(await triviaResponse)
        emailHandling(usHeadlineObj, weatherObj,triviaObj, await parsed_stock_list, recipient)

    }catch(error){
        console.log(error)
    }
    
}
//console.log(process.env)
go()