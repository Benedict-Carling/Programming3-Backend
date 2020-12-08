const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    U_PASSCODE: { type: String, required: true, unique: true},
    Id: { type: String, required:true, unique: true },
    Date: { type: String, required:true},
    Flag: { type: String, required:true},
    "User interpretation": { type: String, required:true},
    "Algorithm interpretation": { type: String, required:true},
    "Expert interpretation": { type: String},
    "Expert comment": { type: String},
    "Image path": { type: String, required:true},
});

var Data = mongoose.model("data",dataSchema);
module.exports = Data;
