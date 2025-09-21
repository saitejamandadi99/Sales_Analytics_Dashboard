const Sales = require('../models/salesModel')

const getSalesData = async (req , res) =>{
    try {
        const sales = await Sales.find({})
        res.status(200).send({message:'Sales data fetched successfully', sales:sales})
    } catch (error) {
        res.status(500).send({message:error.message})
        console.error(error.message)
    }

}

module.exports = getSalesData;