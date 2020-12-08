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

module.exports = router;