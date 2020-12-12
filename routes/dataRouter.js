const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Data = require("../models/dataModel");

router.get("/table", async(req,res) => {
    try {
        const table =  await Data.find({});
        console.log(table)
        res.json(table);
      } catch (err) {
        res.status(500).json(err.message);
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
router.post("/add-comment", async (req,res) =>{
  const {InputId,InputComment,InputValidation} = req.body;
  console.log(InputId)
  try {
      const row = await Data.findOne({Id: InputId})
      await Data.updateOne({Id:InputId},
      {$set:{
        ExpertComment:InputComment,
        ExpertInterpretation:InputValidation
      }})
      const updaterow = await Data.findOne({Id:InputId})
      res.status(200).json(updaterow)
      console.log(updaterow)
}
  catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/show-image",async (req,res) =>{
  const {InputId} = req.body;
  try {
    image  = `../example_images/${InputId}.jpg`
    console.log(image)
    res.status(200).json(image)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

module.exports = router;