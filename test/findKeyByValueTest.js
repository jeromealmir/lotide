const { assert } = require('chai');
const _ = require('../index');

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

describe('#findKeyByValue', () => {

  const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
  };

  it('return "drama" for "The Wire")', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama')
  });
  it('return undefined for "That \'70s Show")', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  });
})