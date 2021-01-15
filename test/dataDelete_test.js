const assert = require("assert");
const Data = require("../models/dataModel").Data;
describe("Deleting a user", () => {


  it("removes an entry by id", (done) => {

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
    testData.save();

    Data.findOneAndRemove({ Id: "Test Id" });

    done();
  });
});
