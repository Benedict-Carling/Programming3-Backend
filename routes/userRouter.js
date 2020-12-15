const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, userType } = req.body;
    //validation
    if (!email || !password || !passwordCheck || !userType)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "Password need to be atleast 5 character long." });
    if (password !== passwordCheck)
      return res.status(400).json({ msg: "Passwords do not match." });
    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res.status(400).json({ msg: "Email already in use." });
    if (["reviewer", "editor", "webmaster"].indexOf(userType) < 0)
      return res.status(400).json({
        msg: "Invalid userType, not one of reviewer, editor or webmaster",
      });
    const salt = await bcrypt.genSalt();
    const passwordhash = await bcrypt.hash(password, salt);
    const newUser = new User({
      email: email,
      password: passwordhash,
      accountType: userType,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with the email has been registered" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentails." });

    // Validated
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        type: user.accountType,
      },
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    // Validated
    return res.json(true);
  } catch (err) {
    return res.json(false);
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    email: user.email,
    id: user._id,
  });
});

module.exports = router;
