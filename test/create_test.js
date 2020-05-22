const assert = require('assert')
const User = require('../models/user')
const Weather = require('../models/weather')
const Stock = require('../models/stock')

describe('Creating records',() =>{
    beforeEach((done)=>{
        
    })

    it('saves a user', (done)=>{
        const joe = new User({
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
        joe.email_data.weather.cityData = weather
        joe.email_data.stockData.stocks.push(stock)
        Promise.all([joe.save(), weather.save()])
            .then(()=>{
                assert(!joe.isNew)
                done();
            })
    });
})