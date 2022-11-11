const { assert } = require('chai');
const _ = require('../index');

describe('#findKeyByValue', () => {

  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('return "drama" for "The Wire")', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  it('return undefined for "That \'70s Show")', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});