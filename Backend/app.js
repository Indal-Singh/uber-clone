const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const userRoutes = require('./routes/user.routes');

const cors = require('cors');
const app = express();
const connectDB = require('./DB/db');

connectDB();
app.use(cors());
app.use('/user',userRoutes);

app.get('/',(req,res)=>{
    res.send("Indal")
})

module.exports= app;