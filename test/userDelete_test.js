const assert = require("assert");
const User = require("../models/userModel").User;
describe("Deleting a user", () => {

  beforeEach(() => {//creates the entry to be deleted
    testUser = new User({
      email: "TestEmail@email.com",
      password: "Test Password",
      accountType: "Test Account Type",
    });
    testUser.save().then(() => done());
  });

  it("removes a user by email", (done) => {
    User.findOneAndRemove({ email: "TestEmail@email.com" });

    done();
  });
});
