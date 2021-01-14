//inside tests/test_helper.js
const mongoose = require('mongoose');
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://James:Password@cluster0.0kohd.mongodb.net/main?retryWrites=true&w=majority'); 
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