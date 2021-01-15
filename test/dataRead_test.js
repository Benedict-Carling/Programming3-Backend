const assert = require("assert");
const Data = require("../models/dataModel").Data; //imports the Data model.
let testData;

describe("Reading database details", () => {
  it("finds entry with Id of Test Id", (done) => {

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

    Data.findOne({ Id: "Test Id" }).then((Data) => {
      //testing if data can be read
      assert(testData.Id === "Test Id");
      done();
    });
  });
});
