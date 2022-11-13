const { assert } = require('chai');
const _ = require('../index');

describe('#eqArrays', () => {
  it('return true for [1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('return false for [1, 2, 3], [3, 2, 1]', () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("return true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.deepEqual(_.eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("return false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.deepEqual(_.eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
  it("return false for [2, [4]], [[2, 3], [4, 5]]", () => {
    assert.deepEqual(_.eqArrays([2, [4]], [[2, 3], [4, 5]]), false);
  });
  it("return true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.deepEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("return false for [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.deepEqual(_.eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});