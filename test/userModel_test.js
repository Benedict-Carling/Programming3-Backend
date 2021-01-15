const assert = require("assert");
const User = require("../models/userModel").User; //imports the Data model.
describe("Creating documents", () => {
  it("creates a fake user entry", (done) => {
    var testUser = new User({
      email: "TestEmail@email.com",
      password: "Test Password",
      accountType: "Test Account Type",
    });
    testUser.save();
    console.log("add m")
    done();
  });
});
