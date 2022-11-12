const { assert } = require('chai');
const _ = require('../index');

describe('#findKey', () => {

  const object = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it('return "noma" if callback = (stars === 2) in object', () => {
    assert.strictEqual(_.findKey(object, x => x.stars === 2), 'noma');
  });

  it('return undefined if callback = (stars > 4) in object', () => {
    assert.strictEqual(_.findKey(object, x => x.stars > 4), undefined);
  });
});