const { assert } = require('chai');
const _ = require('../index');

describe('#map', () => {
  const words = ["ground", "control"];

  it("return [ 'g', 'c' ] for map[0] of ['ground', 'control']", () => {
    assert.deepEqual(_.map(words, word => word[0]), ['g', 'c']);
  });
  it("return [ 'GROUND', 'CONTROL' ] for map.toUpperCase() of ['ground', 'control']", () => {
    assert.deepEqual(_.map(words, word => word.toUpperCase()), [ 'GROUND', 'CONTROL' ]);
  });
});