const assert = require("assert");
const tester = require("../models/logModel").tester; //imports the logs model.
describe("Creating documents", () => {
  it("creates a fake log database", (done) => {
    //assertion is not included in mocha so
    //require assert which was installed along with mocha
    var testLog = new tester({
        Email: "Test email",
        U_PASSCODE: "Test Passcode",
        accountType: "Test Account Type",
        LogDate: "Test Date",
        testId: "Test Test Id",
        ExpertInterpretation: "Test Expert Interpretation",
        ExpertComment: "Test Expert Comment"
    });
    testLog.save().then(() => {
      assert(!testLog.isNew); //if logs is saved to db it is not new
      done();
    });
  });
});
