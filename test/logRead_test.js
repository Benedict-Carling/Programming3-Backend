
//inside read_test.js
const assert = require('assert');
const tester = require('../models/logModel').tester; //imports the Data model.
let testData;
beforeEach(() => {
    testLog = new tester({
        Email: "Test email",
        U_PASSCODE: "Test Passcode",
        accountType: "Test Account Type",
        LogDate: "Test Date",
        testId: "Test Test Id",
        ExpertInterpretation: "Test Expert Interpretation",
        ExpertComment: "Test Expert Comment"
    });
    testLog.save()
        .then(() => done());
});
describe('Reading database details', () => {
    it('finds entry with emaail of Test email', (done) => {
        tester.findOne({ Email: 'Test email' })
            .then((tester) => {
                assert(testLog.Email === 'Test email'); 
                done();
            });
    })
})