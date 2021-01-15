// This file connects to the mongodb and ensures that any data added to
// the databases it wiped at the end of the testing

const mongoose = require("mongoose");
require("dotenv").config();

//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .once("open", () => console.log("Connected!"))
  .on("error", (error) => {
    console.warn("Error : ", error);
  });
//Called hooks which runs before something.
// this deletes from the databases the test entrys added.
beforeEach((done) => {
 
  mongoose.connection.collections.users.deleteMany({password: 'Test Password'})
  mongoose.connection.collections.datas.deleteMany({Flag: "Test Flag"})
  mongoose.connection.collections.logs.deleteMany({Email: "Test email"})

 //go ahead everything is done now.
  done();
});
