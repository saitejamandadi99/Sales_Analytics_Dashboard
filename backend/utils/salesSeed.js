    const {faker} = require('@faker-js/faker')
    const mongoose = require('mongoose')
    require('dotenv').config()
    const Sales = require('../models/ordersModel')
    const Customer = require('../models/customerModel')
    const Product = require('../models/productModel')

    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Connected to the Sales seed')
        seedSales()
    })
    .catch(console.error);

    const seedSales = async () =>{
        try{
            const customer = await Customer.find({}, '_id').lean()// returns js object not mongoose document
            const product = await Product.find({}, '_id price').lean() //returns the id and price of the product 
            if (customer.length === 0 || product.length ===0){
                console.error('No customer or Products found.')
                mongoose.disconnect();
                return;
            }
            const salesData = [] 
            for(let i = 0; i < 100; i++){
                const randomCustomer = faker.helpers.arrayElement(customer);
                const randomProduct = faker.helpers.arrayElement(product);
                const quantity = faker.number.int({min:1,max:10}); 
                const totalPrice = quantity * randomProduct.price

                salesData.push({
                    customerId: randomCustomer._id, 
                    productId: randomProduct._id,
                    quantity,
                    totalRevenue:totalPrice,
                    reportDate: faker.date.recent(30) //returns a random data b/w now and 30 days 
                })
            }

                await Sales.insertMany(salesData)
                console.log('Seeded the sales model')
                console.log(salesData)    
        }
        catch(err){
            console.error(err.message)
        }
        finally {
            await mongoose.disconnect() 
        }
    }