const mongoose = require("mongoose");

const blacklistTokenScheema = mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expries: 86400, // 24h
  },
});

module.exports = mongoose.model("BlackListToken",blacklistTokenScheema);
