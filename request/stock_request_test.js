const request = require("./request")
//const parse = require("../parse/")

// Time functions
function getStartTime(){
    // Returns the start time of the operation in Unix Time
    const start_time = new Date()
    return start_time
}
function findTimeElapsed(start_time, time_elapsed){
    time_elapsed =  Math.abs(new Date() - start_time)
    return time_elapsed
}

async function initialLoop(lol){
    // lol: [[{stock_name: url},{stock_name: url},{stock_name: url},
    //  {stock_name: url},{stock_name: url}],
    // [{stock_name: url},{stock_name: url}]]
    
    let list = null
    let obj = null
    let promises = []
    let promise = null
    const start_time = getStartTime()
    let time = null
    let time_elapsed = 0
    let start_flag = null

    for(var i = 0; i < lol.length; i++){
        list = lol[i]
        // console.log(list)
        for(var j = 0; j < list.length; j++){
             obj = list[j]
             console.log(obj)
             promise = request.stockRequest(obj.url)
             promises.push(promise)
        }
        // // Create a function that is called every 2 seconds and checks
        // // if the time elapsed is 1 minute
        // // while loops don't wait for setInterval
        let intervalID = setInterval(function(){
            if(time_elapsed > 60000){
                clearInterval(intervalID);
                start_flag = true
            } else{
            time_elapsed = findTimeElapsed(start_time, time_elapsed)
            }
            
        }, 5000)
    }
    const promises_response = Promise.all(promises)
    console.log(await promises_response)
    return promises_response
}
function listsOfFive(stock_array){
    let lol = []
    for(i=0; i<stock_array.length; i = i + 5){
        let sliced = stock_array.slice(i, i+5)
        lol.push(sliced)
    }
    return lol
}

function getStockInfo(stock_info){
    // This should return a list of objects that can be passed to another
    // function that can add the stuff 
    let list_of_list = listsOfFive(stock_info)
    const response_promises = initialLoop(list_of_list)
}

const stock_info = [
    {
      stock: 'AAPL',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'TSLA',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'MSFT',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'TWTR',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TWTR&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'NFLX',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NFLX&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'CMG',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=CMG&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'BAC',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BAC&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'INTC',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=INTC&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'F',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=F&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'T',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=T&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    },
    {
      stock: 'FCX',
      url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=FCX&interval=60min&apikey=CTD7M3A9CC5OLKAU'
    }
  ]
getStockInfo(stock_info)