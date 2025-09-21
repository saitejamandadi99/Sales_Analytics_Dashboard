const Customer = require('../models/customerModel')


const getCustomersData = async (req, res) =>{
    try {
        const customers = await Customer.find({})
        res.status(200).send({message:'customers details fetched', customers:customers})
    } catch (error) {
        res.status(500).send({message:error.message})
        console.error(error.message)
    }
}

module.exports = getCustomersData