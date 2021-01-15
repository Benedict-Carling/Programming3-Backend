const router = require("express").Router(); //the backend router for the users collection and schema
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const checkWebMaster = require("../middleware/checkWebMaster");
const User = require("../models/userModel").User; //accessing the User schema/model

//File consisting of different end points for post or get requests to a specific table in the database, the users database

router.post("/register", async (req, res) => {
  //POST request endpoint to add a new user to the users table in the database
  try {
    let { email, password, passwordCheck, userType } = req.body; //getting input from the request body
    //validation, checking input fields meet all requirements
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
    const salt = await bcrypt.genSalt(); //salting the password
    const passwordhash = await bcrypt.hash(
      password,
      salt
    ); /*salting and hashing the users password so only a secure encrypted 
    version is shown in the database for data protection*/
    const newUser = new User({
      //setting up the entry of the new user in line with the schema
      email: email,
      password: passwordhash,
      accountType: userType,
    });
    const savedUser = await newUser.save(); //saving the user to the database
    res.json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/changePassword", auth, async (req, res) => {
  //POST request endpoint to change the password of a user
  try {
    let { password, passwordCheck } = req.body; //input taking both password, new and repeat
    //validation
    if (password !== passwordCheck) {
      return res.status(400).json({ msg: "Passwords do not match." });
    }
    const deletedAccountBeforeChange = await User.findByIdAndDelete(req.user); //deletes current user
    const salt = await bcrypt.genSalt(); //salting password
    const passwordhash = await bcrypt.hash(password, salt); //encrypting password
    const newUser = new User({
      //adding the same user with the updated password to the database
      email: deletedAccountBeforeChange.email,
      password: passwordhash,
      accountType: deletedAccountBeforeChange.accountType,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  //POST requestendpoint  to set the currently logged in user
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
      //ensuring that email used for login exists in the database
      return res
        .status(400)
        .json({ msg: "No account with the email has been registered" });

    const isMatch = await bcrypt.compare(password, user.password); //ensuring password is correct to registered one
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentails." });

    // Once validated
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); //using a token to signify being logged in
    res.json({
      //sending the response with the details of the logged in user
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

router.delete("/delete", checkWebMaster, async (req, res) => {
  //DELETE request endpoint to remove a user from the user
  try {
    let { accountIDToDelete } = req.body;
    //Validation checking
    if (req.sourceAccount.accountType !== "webmaster")
      return res
        .status(401)
        .json({ msg: "User is not of account type webmaster" });
    const deletedUser = await User.findByIdAndDelete(accountIDToDelete); //removing entry from database
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/allusers", async (req, res) => {
  //GET request endpoint to access all users from users table to display them
  try {
    const allusers = await User.find(); //finding all users
    res.json(allusers); //sending them back
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/tokenIsValid", async (req, res) => {
  //POST request endpoint to ensure user token is valid
  try {
    //validation of responses
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
  //GET request endpoint used on login page
  const user = await User.findById(req.user); //logging in user
  res.json({
    email: user.email,
    id: user._id,
  });
});

module.exports = router;
