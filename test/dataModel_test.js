const assert = require("assert");
const Data = require("../models/dataModel").Data; //imports the Data model.
describe("Creating documents", () => {
  it("creates a test data entry", (done) => {
    var testData = new Data({
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
    testData.save()
    done()
    });
  });

