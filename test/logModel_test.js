const assert = require("assert");
const Log = require("../models/logModel").Log; //imports the logs model.
describe("Creating documents", () => {
  it("creates a test log entry", (done) => {
    var testLog = new Log({
      Email: "Test email",
      U_PASSCODE: "Test Passcode",
      accountType: "Test Account Type",
      LogDate: "Test Date",
      testId: "Test Test Id",
      ExpertInterpretation: "Test Expert Interpretation",
      ExpertComment: "Test Expert Comment",
    });
    testLog.save();
    done();
  });
});
