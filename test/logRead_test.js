
//inside read_test.js
const assert = require('assert');
const Log = require('../models/logModel').Log; //imports the Data model.
beforeEach(() => {
    testLog = new Log({
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
        Log.findOne({ Email: 'Test email' })
            .then((Log) => {
                assert(testLog.Email === 'Test email'); 
                done();
            });
    })
})