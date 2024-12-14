const captainServices = require("../services/captain.services");
const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const BlackListToken = require('../models/blacklistToken.model');
module.exports.captainResgister = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    // check if email already exists
    const existingCaptain = await captainServices.getCaptainByEmail(email);
    if (existingCaptain) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const captain = await captainServices.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();
    return res.status(201).json({ token, captain });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.captainLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const cpatain = await captainModel.findOne({ email }).select("+password");
    if (!cpatain) {
      return res.status(401).json({ error: "Invalid Email & Password" });
    }
    const isMatch = await cpatain.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid Email & Password" });
    }
    const token = cpatain.generateAuthToken();
    res.cookie("token",token);
    return res.status(200).json({token, cpatain});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getCaptainProfile = (req,res) =>{
  res.status(200).json(req.cpatain);
}

module.exports.getCaptainLogout = async (req,res) =>{
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  await BlackListToken.create({token});

  return res.status(200).json({"message":"Cpatain Logged Out Successfully."});
} 
