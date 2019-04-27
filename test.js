const examples = require('./dist');
const assert = require('assert');
const models = require('@speelpleinwerking.com/protobufs')

describe('playground examples', () => {
  describe('playgrounds list', () => {
    it('should have length 3', () => {
      assert.equal(examples.playgrounds.length, 3);
    });
  });

  describe('individual example playgrounds', () => {
    it('maximumExample should pass Playground#verify', () => {
      assert.equal(models.Playground.verify(examples.maximumExample), null);
    });

    it('minimumExample should pass Playground#verify', () => {
      assert.equal(models.Playground.verify(examples.minimumExample), null);
    });

    it('debugExample should pass Playground#verify', () => {
      assert.equal(models.Playground.verify(examples.debugExample), null);
    });
 });
});

