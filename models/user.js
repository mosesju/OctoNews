const mongoose = require("mongoose")
const Schema = mongoose.Schema
// Add mongoose unique validator

const UserSchema = new Schema({ 
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    email_data:{  
        headlines: {  type:Boolean, required:true },
        nasa: { type:Boolean, required:true },
        weather:{ 
            isTrue: Boolean,
            cityData: {
                type: Schema.Types.ObjectId,
                ref: 'weather'
            }
         },
        stockData:{ 
            isTrue: Boolean,
            stocks: [{
                type: Schema.Types.ObjectId,
                ref: 'stock'
            }]
         }
     }
});
    
 

const User = mongoose.model('user', UserSchema)

module.exports = User;