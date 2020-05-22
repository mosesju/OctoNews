const User = require('./user')
const Weather = require('./weather')
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const user = new User({
    firstName: "Julian",
    lastName: "Moses",
    email: "e.julianmoses6@gmail.com",
    password: "adadada",
    email_data: {
        headlines: true,
        nasa: false,
        weather:{
            isTrue: true,
            city: {type: Schema.Types.ObjectId, ref: 'weather'}
        }
    }
})
console.log(Weather)