// delete_test.js
const assert = require("assert");
const User = require("../models/userModel").User;
describe("Deleting a user", () => {
  it("removes a user by email", (done) => {
    User.findOneAndRemove({ email: "TestEmail@email.com" });

    done();
  });
});
