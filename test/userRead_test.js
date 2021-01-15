const assert = require("assert");
const User = require("../models/userModel").User; //imports the Data model.

describe("Reading database details", () => {
  it("finds entry with password of Test password", (done) => {

    testUser = new User({
        email: "TestEmail@email.com",
        password: "Test Password",
        accountType: "Test Account Type",
      });
      testUser.save();
    User.findOne({ password: "Test Password" }).then((User) => {
      assert(testUser.password === "Test Password");
      done();
    });
  });
});
