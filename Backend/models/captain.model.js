const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainScheema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [2, "First name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [2, "Last name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color Have Must be at least 3 Charator Long."],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate Have Must be at least 3 Charator Long."],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [1, "Capacity Have Must be at least 1 Long."],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motercycle", "auto"],
      default: "car",
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

// Hash password before saving user document
captainScheema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10); // Hash password with salt rounds of 10
  }
  next();
});

captainScheema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id, email: this.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};

captainScheema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("captain", captainScheema);
