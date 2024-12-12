const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");

router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Invalid Email"),
        body("fullname.firstname")
            .isLength({ min: 3 })
            .withMessage("First Name must be at least 3 charator"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Passsword Name must be at least 6 charator"),
        body("vehicle.color").isLength({ min: 3 }).withMessage("Color must be at least 3 charactor"),
        body("vehicle.plate").isLength({ min: 3 }).withMessage("Plate Number must be at least 3 charactor"),
        body("vehicle.capacity").isLength({ min: 1 }).withMessage("Number must be More Than 1"),
        body("vehicle.vehicleType").isIn(["car", "motercycle", "auto"]).withMessage("Invalid Vehicle Type")

    ],
    captainController.captainResgister
)
module.exports = router;
