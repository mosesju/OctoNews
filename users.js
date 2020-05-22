const mongoose = require("mongoose")
const Schema = mongoose.Schema
const mongooseUniqueValidator = require('mongoose-unique-validator')

// Mongoose unique validator for email uniqueness
// https://www.youtube.com/watch?v=qjKQzfmcRSM&t=13s

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type:String, required:true},
    email: {type: String, required: true, unique: true},
    email_data: {
        headlines: {type: Boolean, required: true},
        nasa: {type: Boolean, required: true},
        weather: {type: Schema.Types.ObjectId, ref: 'UserWeather'},
        stocks: {type: Schema.Types.ObjectId, ref: 'UserStocks'}
    }
})

schema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('User', schema)