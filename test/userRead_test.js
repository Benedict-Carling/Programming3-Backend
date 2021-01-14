
//inside read_test.js
const assert = require('assert');
const tester = require('../models/userModel').tester; //imports the Data model.
let testData;
beforeEach(() => {
    testUser = new tester({
        email: "TestEmail@email.com",
        password: "Test Password",
        accountType: "Test Account Type",
    });
    testUser.save()
        .then(() => done());
});
describe('Reading database details', () => {
    it('finds entry with password of Test password', (done) => {
        tester.findOne({ password: 'Test Password' })
            .then((tester) => {
                assert(testUser.password === 'Test Password'); 
                done();
            });
    })
})