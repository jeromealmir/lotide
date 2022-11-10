const { assert } = require('chai');
const _ = require('../index');

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('returns ["a", "b"] for [[[["a"], ["b"]]], [[]]]', () => {
    assert.deepEqual(_.flatten([[[['a'], ['b']]], [[]]]), ['a', 'b']);
  });
})