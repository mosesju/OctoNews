function kelvinToCelsius(kelvin){
    return Math.round(kelvin - 273)
}
function parseWeatherResponse(response){
    // return an object
    let obj = {}
    let data = response.data
    obj['city']=data.name
    obj['country']=data.sys.country
    obj['sky_description'] = data.weather[0].description
    obj['low'] = kelvinToCelsius(data.main.temp_min)
    obj['high'] = kelvinToCelsius(data.main.temp_max)
    obj['humidity'] = data.main.humidity
    obj['feels_like'] = kelvinToCelsius(data.main.feels_like)
    return obj
}

module.exports ={
    parseWeatherResponse
}