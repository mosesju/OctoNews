function parseStockResponse(response){
    console.log(response.data['Meta Data'])
    let obj = {}
    obj["stock_name"] = response.data['Meta Data']['2. Symbol']
    let time_series_data = response.data["Time Series (60min)"]
    // console.log(time_series_data)
    let keys = Object.keys(time_series_data)
    let today = keys[0]
    obj["open"] = time_series_data[today]['1. open']
    obj["high"] = time_series_data[today]['2. high']
    obj["low"] = time_series_data[today]['3. low']
    obj["close"] = time_series_data[today]['4. close']
    obj["volume"] = time_series_data[today]['5. volume']
    return obj
}

function loopStockResponse(response_list){
    let objects = []
    for(var i = 0; i<response_list.length; i++){
        let obj = parseStockResponse(response_list[i])
        objects.push(obj)
    }
    // console.log(objects)
    return objects
}

module.exports = {
    parseStockResponse,
    loopStockResponse
}