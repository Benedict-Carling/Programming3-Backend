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
var id = "10";
//ImagePath: row.ImagePath,
router.post("/add-comment", async (req,res) =>{
  try {
    const row = await Data.findOne({"Id": id})
    await Data.updateOne({"Id": id},
    {$set:{  ExpertComment:"yes"}}
     );
   const updaterow = await Data.findOne({"Id": id})
   res.status(200).json(updaterow)
   console.log(updaterow.ExpertComment)
   console.log(updaterow.Id)
}
   catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;