const mongoose = require('mongoose'); 
const {Schema} = mongoose 

const CustomerSchema = new Schema({
    name:{type:String, required:true},
    phoneNumber:{type:String},
    address:{type:String,required:true},
    region:{type:String, required:true},//north-west or etc..
    type:{type:String, required:true} //business or individual 
})

module.exports = mongoose.model('Customer',CustomerSchema)