const { assert } = require('chai');
const _ = require('../index');

describe('#eqArrays', () => {
  it('return true for [1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true)
  });
  it('return false for [1, 2, 3], [3, 2, 1]', () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false)
  });
  it("return true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.deepEqual(_.eqArrays(['1', '2', '3'], ['1', '2', '3']), true)
  });
  it("return false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.deepEqual(_.eqArrays(['1', '2', '3'], ['1', '2', 3]), false)
  });
});