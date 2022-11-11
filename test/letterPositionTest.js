const { assert } = require('chai');
const _ = require('../index');

describe('#letterPositions', () => {
  it('return {} for " "', () => {
    assert.deepEqual(_.letterPosition('dog'), { d: [ 0 ], o: [ 1 ], g: [ 2 ] });
  });
  it('return { d: [ 0 ], o: [ 1 ], g: [ 2 ] } for "dog"', () => {
    assert.deepEqual(_.letterPosition('dog'), { d: [ 0 ], o: [ 1 ], g: [ 2 ] });
  });
  it('return { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for "hello"', () => {
    assert.deepEqual(_.letterPosition('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
});