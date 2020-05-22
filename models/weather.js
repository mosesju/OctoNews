const mongoose = require("mongoose")
const Schema = mongoose.Schema

const weatherSchema = new Schema({
    city:{type:String, required:true},// unique: true},
    country: String, 
    sky_description: String,
    low: Number,
    high: Number,
    humididty: Number,
    feelsLike: Number
})
const Weather = mongoose.model('weather', weatherSchema)

module.exports = Weather;