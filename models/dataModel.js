const mongoose = require("mongoose");
// Set up the mongoose schema that will be used to access the database
const dataSchema = new mongoose.Schema({
  U_PASSCODE: { type: String, required: true, unique: true },
  Id: { type: String, required: true, unique: true },
  Date: { type: String, required: true },
  Flag: { type: String, required: true },
  UserInterpretation: { type: String, required: true },
  AlgorithmInterpretation: { type: String, required: true },
  ExpertInterpretation: { type: String },
  ExpertComment: { type: String },
  ImagePath: { type: String, required: true },
});

// Data is set to the collection called "data" with the same schema as defined above
// Importing and calling 'Data' elsewhere will access the data collection of the database
var Data = mongoose.model("data", dataSchema);

module.exports.Data = Data;
