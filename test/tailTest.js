const { assert } = require('chai');
const _ = require('../index');

describe('#tail', () => {
  it('returns [3] for [2, 3]', () => {
    assert.deepEqual(_.tail([2, 3]), [3]);
  });
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
  });
});