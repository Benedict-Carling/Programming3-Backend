const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//setup express
const app = express();
//middleware
app.use(express.json());
app.use(cors());

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`the server has started on port : ${PORT}`));

//set up mongoose
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// initalise routes middleware, middleware only applies to /users endpoint
app.use("/users", require("./routes/userRouter"));
app.use("/data", require("./routes/dataRouter"));

