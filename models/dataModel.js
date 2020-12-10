const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    U_PASSCODE: { type: String, required: true, unique: true},
    Id: { type: String, required:true, unique: true },
    Date: { type: String, required:true},
    Flag: { type: String, required:true},
    UserInterpretation: { type: String, required:true},
    AlgorithmInterpretation: { type: String, required:true},
    ExpertInterpretation: { type: String},
    ExpertComment: { type: String},
    ImagePath: { type: String, required:true},
});

var Data = mongoose.model("data",dataSchema);
module.exports = Data;
