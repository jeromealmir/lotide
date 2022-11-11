const { assert } = require('chai');
const _ = require('../index');

describe('#without', () => {
  it('return [] in [] without [1]', () => {
    assert.deepEqual(_.without([], [1]), []);
  });
  it('return [1, 2, 3] in [1, 2, 3] without []', () => {
    assert.deepEqual(_.without([1, 2, 3], []), [1, 2, 3]);
  });
  it('return ["1", "2"] in ["1", "2", "3"] without [1, 2, "3"]', () => {
    assert.deepEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it('return [2, 3] in [1, 2, 3] without [1]', () => {
    assert.deepEqual(_.without([1, 2, 3], [1]), [2, 3]);
  });
  it('return ["hello"] in ["hello", "world"] without ["world"]', () => {
    assert.deepEqual(_.without(["hello", "world"], ["world"]), ["hello"]);
  });
});