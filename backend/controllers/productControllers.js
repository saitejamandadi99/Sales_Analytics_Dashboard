const Product = require('../models/productModel')

const getProductData = async (req, res) =>{
    try {
        const products = await Product.find({})
        res.status(200).send({message:'Product details fetched successfully', products:products})
        
    } catch (error) {
        res.status(500).send({message:error.message})
        console.error(error.message)
    }
}

module.exports = getProductData; 