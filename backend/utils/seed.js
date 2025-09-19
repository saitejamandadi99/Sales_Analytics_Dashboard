const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose')
const Customer = require('../models/customerModel.js'); 
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL) // mongodb runs on 27017 by default
.then(()=>{
    console.log('MongoDb connected')
    seedCustomersData();
})
.catch(console.error); 

const seedCustomersData = async () =>{
    const customersData = [] 
    for (let i = 0; i<100;i++){
        customersData.push({
            name:faker.person.fullName(),
            phoneNumber: faker.phone.number(),
            address: faker.location.streetAddress(),
            region: faker.helpers.arrayElement(['North', 'South', 'East', 'West']),
            type: faker.helpers.arrayElement(['Individual', 'Business'])
        })
    };

    await Customer.insertMany(customersData); 
    console.log('customer data added')
    mongoose.disconnect();
}


