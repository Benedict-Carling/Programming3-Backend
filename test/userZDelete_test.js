/*
The file name IS NOT a typo, the Z ensures that this is the last test to run
and that there will be nothing left in the database,
if tests are modified, to ensure that nothin is left in the databases
have a delete test of any kind run last, this allows the hook in test helper
to wipe the entries added by the update,read, and model tests.
*/


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
    done();
  });
});
