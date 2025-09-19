const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');




const app = express()
app.use(express.json())
app.use(cors())
dotenv.config();

const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('MongoDb is connected')
})
.catch((err)=>{
    console.log('Error',err.message)
})


app.get('/',(req , res)=>{
    res.status(200).send('Backend is running in the server')
})

app.use((err,req,res,next)=>{
    res.status(500).send('Error',err.message)
    console.log('Error',err.message)
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(` server is running in http://localhost:${PORT}`); 
})

