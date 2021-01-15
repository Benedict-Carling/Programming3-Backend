const router = require("express").Router(); //backend router for logs collection and schema
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Log = require("../models/logModel").Log; //accessing logs schema

//File consisting of different end points for post or get requests to a specific table in the database, the logs database

router.get("/table", async (req, res) => {
  //GET request endpoint to retrieve all the entries from the logs table
  try {
    const table = await Log.find({}); //collecting data
    console.log(table);
    res.json(table); //sending back data
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/add-log", async (req, res) => {
  /*POST request endpoint to update the logs table after 
    a change or input has been made by the user*/
  const {
    InEmail,
    InU_PASSCODE,
    InType,
    InDate,
    InId,
    InComment,
    InInterpretation,
  } = req.body; //getting input from the request body
  try {
    const newEntry = new Log({
      //setting up entry for the table in line with the schema
      Email: InEmail,
      U_PASSCODE: InU_PASSCODE,
      accountType: InType,
      LogDate: InDate,
      testId: InId,
      ExpertInterpretation: InInterpretation,
      ExpertComment: InComment,
    });
    const savedEntry = await newEntry.save(); //saving the entry in the database
    res.status(200).json(savedEntry);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
