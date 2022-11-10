const { assert } = require('chai');
const _ = require('../index');

describe('#middle', () => {
  it('return [] for []', () => {
    assert.deepEqual(_.middle([]), []);
  });
  it('return [] for [1, 2]', () => {
    assert.deepEqual(_.middle([1, 2]), []);
  });
  it('return ["2"] for ["1", "2", "3"]', () => {
    assert.deepEqual(_.middle(['1', '2', '3']), ['2']);
  });
  it('return [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  });
  it('return [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  });
})