const axios = require('axios');

// Gets United States Headlines
async function usHeadlineRequest(){
    // console.log("usHeadlineRequest")
    const NEWS_API_KEY = process.env.NEWS_API_KEY
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=3&apiKey=${NEWS_API_KEY}`
    return axios.get(url)
}
async function stockRequest(url){
    return axios.get(url)
}
async function nasaPictureRequest(){
    const NASA_API_KEY = process.env.NASA_API_KEY
    let url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    return axios.get(url)
}
async function weatherRequest(city){
    // add country code after city London,uk
    // can use this API to get country codes https://restcountries.eu/#api-endpoints-list-of-codes
    // Will need a limiter with more than 60 cities

    const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`
    return axios.get(url)
}
async function triviaRequest(){
    let url = "http://jservice.io/api/random"
    return axios.get(url)
}

module.exports = {
    usHeadlineRequest,
    stockRequest,
    nasaPictureRequest,
    weatherRequest,
    triviaRequest
}