const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Log = require("../models/logModel");

router.get("/table", async(req,res) => {
    try {
        const table =  await Log.find({});
        console.log(table)
        res.json(table);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/add-log", async (req,res) =>{
    const {InEmail, InAccType, InDate, InTestID, InInterpretation, InComment} = req.body;
    console.log(InEmail)
    try {
        const newEntry = new Log({
            Email = InEmail,
            accountType = InAccType,
            LogDate = InDate,
            testId = InTestID,
            ExpertInterpretation = InInterpretation,
            ExpertComment = InComment,
        });
        const savedEntry = await newEntry.save();
        res.json(savedEntry);
    }
    catch (err) {
      res.status(500).json(err.message);
    }
  });

  
module.exports = router;