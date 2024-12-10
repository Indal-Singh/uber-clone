const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlackListToken = require('../models/blacklistToken.model');

module.exports.authUser = async (req,res,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token)
    {
        return req.status(401).json({ "message":" Unauthorised"})
    }
    
    try {
        const isTokenBalckListed = await BlackListToken.findOne({token:token});

        if(isTokenBalckListed)
        {
            res.status(401).json({"message":" Unauthorised"})
        }
        
        const decoded = jwt.verify(token ,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        req.user = user;

        return next();
    } catch (error) {
        res.status(401).json({"message":" Unauthorised"})
    }
}