const assert = require("assert");
const User = require("../models/userModel").User;
describe("Deleting a user", () => {

  it("removes a user by email", (done) => {

    testUser = new User({
      email: "TestEmail@email.com",
      password: "Test Password",
      accountType: "Test Account Type",
    });
    testUser.save();

    User.findOneAndRemove({ email: "TestEmail@email.com" });
    console.log("take")
    done();
  });
});
