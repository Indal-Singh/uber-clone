const captainServices = require("../services/captain.services");
const { validationResult } = require("express-validator");
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
