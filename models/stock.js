const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StockSchema = new Schema({
    symbol:{type:String, required:true, unique: true},
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    volume: Number
})
const Stock = mongoose.model('stock', StockSchema)

module.exports = Stock;