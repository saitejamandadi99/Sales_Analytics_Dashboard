const mongoose = require('mongoose');
const {Schema} = mongoose
const OrderSchema = new Schema({
    customerId:{type:Schema.Types.ObjectId, ref:'Customer', required:true},  //ref id
    productId:{type:Schema.Types.ObjectId, ref:'Product', required:true}, //ref id 
    quantity:{type:Number,required:true},
    totalRevenue:{type:Number, required:true},
    reportDate:{type:Date, required:true}, 
}, {timestamps:true});

module.exports = mongoose.model('Sales', OrderSchema)