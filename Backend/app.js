const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const cookiesParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const connectDB = require('./DB/db');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookiesParser());

connectDB();
app.use(cors());
app.use('/user',userRoutes);
app.use('/captain',captainRoutes);

app.get('/',(req,res)=>{
    res.send("Indal")
})

module.exports= app;