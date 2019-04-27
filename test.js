const examples = require('./dist');
const assert = require('assert');

describe('playground examples', function() {
  describe('playgrounds', function() {
    it('should have length 3', () => {
      assert.equal(examples.playgrounds.length, 3);
    });
  });
});

