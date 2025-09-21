const Sales = require('../models/salesModel')

const getSalesData = async (req , res) =>{
    try {
        const sales = await Sales.find({}) //populate is like automatic join in collections 
        .populate('customerId', 'name region') // refers to the customerId and fetches the original content and fills 
        .populate('productId', 'name category price') //refers to productId and fetches and fills the original content.
        res.status(200).json({message:'Sales data fetched successfully', sales:sales})
    } catch (error) {
        res.status(500).json({message:error.message})
        console.error(error.message)
    }

}

module.exports = getSalesData;