const userModel = require("../models/user.model");
const userServices = require("../services/user.services");
const { validationResult } = require("express-validator");
module.exports.userResgister = async (req, res, next) => {
  try {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  const user = await userServices.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password,
  });
  const token = user.generateAuthToken();
  return res.status(200).json({token, user});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
