const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

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
  ],
  userController.userResgister
);

router.post("/login",[
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
      .isLength({ min: 6 })
      .withMessage("Passsword Name must be at least 6 charator"),
] ,userController.userLogin);


router.get('/profile',authMiddleware.authUser,userController.getuserProfile);
router.get('/logout',authMiddleware.authUser,userController.getuserLogout);

module.exports = router;
