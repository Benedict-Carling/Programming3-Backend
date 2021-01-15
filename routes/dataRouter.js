const router = require("express").Router(); //the backend router for the data collection and schema
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Data = require("../models/dataModel").Data; //accessing the data schema/model

//File consisting of different end points for post or get requests to a specific table in the database, the data database

router.get("/table", async (req, res) => {
  //GET request endpoint to retrieve all the data entries from the data table
  try {
    const table = await Data.find({}); //collecting the data
    res.status(200);
    res.json(table); //returning the table in the response
  } catch (err) {
    res.status(500).json(err.message); //error message for potential failure
  }
});

/*U_PASSCODE: row.U_PASSCODE,
          Id: row.Id,
          Date: row.Date,
          Flag: row.Flag,
          UserInterpretation: row.UserInterpretation,
          AlgorithmInterpretation: row.AlgorithmInterpretation,
          ExpertInterpretation: row.ExpertInterpretation,*/
//ImagePath: row.ImagePath,
router.post("/add-comment", async (req, res) => {
  //POST request endpoint to edit the data table with user input
  const { InputId, InputComment, InputValidation } = req.body; //getting input from the request body
  try {
    const row = await Data.findOne({ Id: InputId }); //finding the entry corresponding to the change in the frontend
    await Data.updateOne(
      { Id: InputId }, //specifically updating the those fields that would have been edited
      {
        $set: {
          ExpertComment: InputComment,
          ExpertInterpretation: InputValidation,
        },
      }
    );
    const updaterow = await Data.findOne({ Id: InputId });
    res.status(200).json(updaterow);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/show-image", async (req, res) => {
  /*POST request endpoint for accessing images from database storage
  for implementation in client sever*/
  const { InputId } = req.body;
  try {
    image = `../example_images/${InputId}.jpg`;
    console.log(image);
    res.status(200).json(image); //retrieving and sending image
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
