const { assert } = require('chai');
const _ = require('../index');

describe('#countOnly', () => {
  const firstNames = [
    "Agouhanna",
    "Fang",
    "Jason",
    "Fang"
  ];

  const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it(`return 1 for "Jason" in [${firstNames}]`, () => {
    assert.strictEqual(result1["Jason"], 1)
  });
  it(`return undefined for "Karima" in [${firstNames}]`, () => {
    assert.strictEqual(result1["Karima"], undefined)
  });
  it(`return 2 for "Fang" in [${firstNames}]`, () => {
    assert.strictEqual(result1["Fang"], 2)
  });
})