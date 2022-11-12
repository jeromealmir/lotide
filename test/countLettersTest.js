const { assert } = require('chai');
const _ = require('../index');

describe('#countLetters', () => {
  it('return { h: 1, e: 1, l: 2, o: 1 } for "hello"', () => {
    assert.deepEqual(_.countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 });
  });
});