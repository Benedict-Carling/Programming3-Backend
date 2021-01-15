const assert = require("assert");
const tester = require("../models/userModel").tester; //imports the Data model.
describe("Creating documents", () => {
  it("creates a fake database of users", (done) => {
    //assertion is not included in mocha so
    //require assert which was installed along with mocha
    var testUser = new tester({
      email: "TestEmail@email.com",
      password: "Test Password",
      accountType: "Test Account Type",
    });
    testUser.save().then(() => {
      assert(!testUser.isNew); //if poke is saved to db it is not new
      done();
    });
  });
});
