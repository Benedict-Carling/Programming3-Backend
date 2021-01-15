const assert = require("assert");
const User = require("../models/userModel").User;
describe("Updating an entry", () => {
  it("update all matching users using model", (done) => {
    User.updateMany({
      email: "TestedEmail@email.com",
      password: "Test Password",
      accountType: "Test Account Type",
    }),
      done();
  });

  it("update one user using model", (done) => {
    User.findOneAndUpdate(
      { email: "TestEmail@email.com" },
      {
        email: "TestEmail@email.com",
        password: "Test Password",
        accountType: "Test Account Type",
      }
    ),
      done();
  });
});
