const userModel = require("../models/user.model");
const userServices = require("../services/user.services");
const { validationResult } = require("express-validator");
const BlackListToken = require('../models/blacklistToken.model');
module.exports.userResgister = async (req, res, next) => {
  try {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  // check if email already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const user = await userServices.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password,
  });
  const token = user.generateAuthToken();
  return res.status(201).json({token, user});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ error: "Invalid Email & Password" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid Email & Password" });
    }
    const token = user.generateAuthToken();
    res.cookie("token",token);
    return res.status(200).json({token, user});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getuserProfile = (req,res) =>{
  res.status(200).json(req.user);
}

module.exports.getuserLogout = async (req,res) =>{
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    await BlackListToken.create({ token });
  }

  return res.status(200).json({"message":"User Logged Out Successfully."});
} 
