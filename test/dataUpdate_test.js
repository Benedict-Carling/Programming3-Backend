const assert = require("assert");
const Data = require("../models/dataModel").Data;
describe("Updating an entry", () => {

  beforeEach(() => {
    testData = new Data({
      //creates an entry to be updates
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
    testData.save().then(() => done());
  });

  it("update one user using model", (done) => {
      Data.findOneAndUpdate(
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
      )
      done();
  });
});
