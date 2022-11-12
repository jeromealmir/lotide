const { assert } = require('chai');
const _ = require('../index');

describe('#takeUntil', () => {
  const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const sentence = ['Hello', 'world', 'lighthouse'];

  it('return [1, 2, 5, 7, 2] in [1, 2, 5, 7, 2, -1, 2, 4, 5]', () => {
    assert.deepEqual(_.takeUntil(data, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  it('return ["Hello"] in ["Hello", "world", "lighthouse"]', () => {
    assert.deepEqual(_.takeUntil(sentence, x => x === 'world'), ['Hello']);
  });
});