const mongoose = require("mongoose");
// Set up the mongoose schema that will be used to access the database
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  accountType: { type: String, required: true },
});

// Data is set to the collection called "Users" with the same schema as defined above
// Importing and calling 'User' elsewhere will access the collection of the database
var User = mongoose.model("user", userSchema);
var testingUser = mongoose.model("testuser",userSchema)
module.exports.User = User;
module.exports.tester = testingUser;
