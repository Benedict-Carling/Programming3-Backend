const assert = require("assert");
const Data = require("../models/dataModel").Data;
describe("Deleting a user", () => {

  beforeEach(() => {
    testData = new Data({
      //creates an entry to be deleted
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

  it("removes an entry by id", (done) => {
    Data.findOneAndRemove({ Id: "Test Id" });

    done();
  });
});
