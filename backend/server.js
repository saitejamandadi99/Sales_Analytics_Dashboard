const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const axios = require('axios'); 



const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req , res)=>{
    res.send('Backend is running in the server')
})

app.get((err,req,res,next)=>{
    res.send('Error',err.message)
    console.log('Error',err.message)
})

PORT = process.env.PORT 
app.listen((PORT)=>{
    console.log(` server is running in http://localhost:${PORT}`); 
})

