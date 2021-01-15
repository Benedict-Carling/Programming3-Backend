//used for unit testing of the backend
const assert = require("assert");
const tester = require("../models/dataModel").tester; //imports the Data model.
describe("Creating documents", () => {
  it("creates a fake database of data", (done) => {
    //assertion is not included in mocha so
    //require assert which was installed along with mocha
    var testData = new tester({
      //testing on random set of values
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
    testData.save().then(() => {
      assert(!testData.isNew); //if poke is saved to db it is not new
      done();
    });
  });
});
