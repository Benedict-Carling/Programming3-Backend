const assert = require("assert");
const User = require("../models/userModel").User; //imports the Data model.
describe("Creating documents", () => {
  it("creates a fake entry of users", (done) => {

    var testUser = new User({
        email: "TestEmail@email.com",
        password: "Test Password",
        accountType: "Test Account Type",
    });
    testUser.save() 
      done();
    });
  });
