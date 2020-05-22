function stocks(stock_list){
    var urls = []
    
    stock_list.forEach(stock => {
        var url_object = {}
        let API_KEY = "CTD7M3A9CC5OLKAU"
        const stock_url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=60min&apikey=${API_KEY}`
        url_object.stock = stock
        url_object.url = stock_url
        urls.push(url_object)
    })
    return urls
}

module.exports = {
    stocks
}