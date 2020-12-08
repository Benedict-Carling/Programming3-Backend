const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  accountType: { type: String, required: true },
});
var User = mongoose.model("user", userSchema);
module.exports = User;
