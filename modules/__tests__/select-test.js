var expect = require('expect');
var redis = require('../index');

describe('select', function () {
  var db;
  beforeEach(function () {
    db = redis.createClient({});
  });

  afterEach(function () {
    return db.flushdb();
  });

  it('selects the appropriate database', function (done) {
    db.select(3).then(function () {
      expect(db.selected_db).toEqual(3);
      done();
    }).catch(function (err) {
      done(err);
    })
  });
});
