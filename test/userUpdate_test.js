// update_test.js
const assert = require('assert');
const User = require('../models/userModel').User;
describe('Updating a user', () => {

  let user;

  beforeEach((done) => {
    user = new User({
        email: "TestEmail@email.com",
        password: "Test Password",
        accountType: "Test Account Type",
    });
    user.save()
      .then(() => done());
  });
  
  function assertHelper(statement, done) {
    statement
   
      done();
    
  }

  it('update all matching users using model', (done) => {
    assertHelper(User.updateMany({ email: "TestEmail@email.com"}, { 
    email: "TestedEmail@email.com",
    password: "Test Password",
    accountType: "Test Account Type",}), done);
  });

  it('update one user using model', (done) => {
    assertHelper(User.findOneAndUpdate({email: "TestEmail@email.com" }, { 
    email: "TestEmail@email.com",
    password: "Test Password",
    accountType: "Test Account Type",
    }), done);
  });
});