const assert = require("assert");
const Data = require("../models/dataModel").Data;
describe("Updating an entry", () => {
  it("update one data entry using model", (done) => {
    testData = new Data({
      //creates an entry to be read
      U_PASSCODE: "Test Passcode",
      Id: "Test Id",
      Date: "Test Date",
      Flag: "Test Flag",
      UserInterpretation: "Test user interpretation",
      AlgorithmInterpretation: "Test Algorithm interpretation",
      ExpertInterpretation: "Test Expert interpretation",
      ExpertComment: "Test Expert Comment",
      ImagePath: "Test Path",
    });
    testData.save();

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
    );
    done();
  });
});
