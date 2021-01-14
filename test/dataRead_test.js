
//inside read_test.js
const assert = require('assert');
const tester = require('../models/dataModel').tester; //imports the Data model.
let testData;
beforeEach(() => {
        testData = new tester({
        U_PASSCODE: "Test Passcode",
        Id: "Test Id",
        Date: "Test Date",
        Flag: "Test Flag",
        UserInterpretation: "Test user interpretation",
        AlgorithmInterpretation: "Test Algorithm interpretation",
        ExpertInterpretation: "Test Expert interpretation",
        ExpertComment: "Test Expert Comment",
        ImagePath: "Test Path"
      });
    testData.save()
        .then(() => done());
});
describe('Reading database details', () => {
    it('finds entry with Id of Test Id', (done) => {
        console.log(tester.findOne({ Id: 'Test Id' }))
        tester.findOne({ Id: 'Test Id' })
            .then((tester) => {
                assert(testData.Id === 'Test Id'); 
                done();
            });
    })
})