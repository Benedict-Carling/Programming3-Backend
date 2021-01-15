
//inside read_test.js
const assert = require('assert');
const tester = require('../models/dataModel').tester; //imports the Data model.
let testData;
beforeEach(() => {
  testData = new tester({//testing on random set of values
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
describe("Reading database details", () => {
  it("finds entry with Id of Test Id", (done) => {
    tester.findOne({ Id: "Test Id" }).then((tester) => {//testing if data can be read and updated
      assert(testData.Id === "Test Id");
      done();
    });
  });
});
