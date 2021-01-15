const assert = require("assert");
const User = require("../models/userModel").User;
describe("Updating an entry", () => {
  it("update all matching users using model", (done) => {

    testUser = new User({
      email: "TestEmail@email.com",
      password: "Test Password",
      accountType: "Test Account Type",
    });
    testUser.save();
    console.log("add u1")
    User.updateMany({email: "TestedEmail@email.com"},
    {
      email: "TestedEmail@email.com",
      password: "Test Password",
      accountType: "Test Account Type",
    }),
      done();
  });

  it("update one user using model", (done) => {

    testUser = new User({
      email: "TestEmail@email.com",
      password: "Test Password",
      accountType: "Test Account Type",
    });
    testUser.save();
    console.log("add u2")
    User.findOneAndUpdate({email: "TestEmail@email.com"},
      {
        email: "TestEmail@email.com",
        password: "Test Password",
        accountType: "Test Account Type",
      }
    ),
    console.log("done")
      done();
  });
});
