const assert = require('assert');
const Data = require('../models/dataModel').Data;
describe('Deleting a data entry', () => {

  it('removes an entry by id', (done) => {
      Data.findOneAndRemove({ Id: "Test Id" })
      done();
      });
  });
