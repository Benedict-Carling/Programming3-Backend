//inside tests/test_helper.js
const mongoose = require('mongoose');
require("dotenv").config();

//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });
//Called hooks which runs before something.
beforeEach((done) => {
    mongoose.connection.collections.testdatas.drop(() => {
         //this function runs after the drop is completed
        done(); //go ahead everything is done now.
    }); 
});