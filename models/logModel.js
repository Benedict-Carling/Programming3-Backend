const mongoose = require('mongoose')
// Set up the mongoose schema that will be used to access the database
const dataSchema = new mongoose.Schema({
    Email: {type: String, required: true},
    U_PASSCODE:{type: String, required: true},
    accountType: {type: String, required: true},
    LogDate: { type: String, required:true},
    testId: { type: String, required:true},
    ExpertInterpretation: { type: String},
    ExpertComment: { type: String},
});

// Data is set to the collection called "logs" with the same schema as defined above
// Importing and calling 'Log' elsewhere will access the collection of the database
var Log = mongoose.model("log",dataSchema);
var testingLog = mongoose.model("testlog",dataSchema)

module.exports.Log = Log;
module.exports.tester = testingLog;
