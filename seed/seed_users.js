const User = require('../models/user')
const Weather = require('../models/weather')
const Stock = require('../models/stock')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users_test', { useNewUrlParser:true });

const user = new User({
    firstName: 'Joseph',
    lastName: 'Stalin',
    email: 'test@test.com',
    password: 'password',
    email_data: {
        headlines: true,
        nasa: false,
        weather: {
            isTrue: true,
        },
        stocks: {
            isTrue: true
        }
    }
})
const weather = new Weather({
    city: "Ibiza",
    temp: 17
})
const stock = new Stock({
    symbol: "AAPL",
    price: 13.3
})
user.email_data.weather.cityData = weather
user.email_data.stockData.stocks.push(stock)
console.log(user)
user.save()
stock.save()
weather.save()