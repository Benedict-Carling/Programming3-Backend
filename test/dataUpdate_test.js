const assert = require("assert");
const Data = require("../models/dataModel").Data;
describe("Updating an entry", () => {
  function assertHelper(statement, done) {
    statement;

    done();
  }

  it("update one user using model", (done) => {
    assertHelper(
      Data.findOneAndUpdate(
        { Id: "Test Id" },
        {
          U_PASSCODE: "Test Passcode",
          Id: "Test Id",
          Date: "Test Date",
          Flag: "Test Flag",
          UserInterpretation: "Test user interpretation",
          AlgorithmInterpretation: "Test Algorithm interpretation",
          ExpertInterpretation: "Test Expert interpretation",
          ExpertComment: "Test Expert Comment",
          ImagePath: "Test Path",
        }
      ),
      done
    );
  });
});
