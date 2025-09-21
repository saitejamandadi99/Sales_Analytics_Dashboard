const {faker} = require('@faker-js/faker')
const mongoose = require('mongoose')
const Product = require('../models/productModel')
require('dotenv').config(); 


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Mongodb connect with product seed')
    seedProductData();
})
.catch(console.error);

const seedProductData = async () =>{
    const productData = []
    for(let i = 0; i<100;i++){
        productData.push({
            name:faker.commerce.productName(),
            category: faker.helpers.arrayElement(['Fashion', 'Electrical', 'Food', 'Home', 'Sports', 'Toys']),
            price:Number(faker.commerce.price())
        })
    }
    await   Product.insertMany(productData)
    console.log(productData)
    console.log('Seeded the Product data')
    await mongoose.disconnect();
}