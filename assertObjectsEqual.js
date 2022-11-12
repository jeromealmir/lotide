const eqObjects = require('./eqObjects');

//assertObjectsEqual Function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // => should PASS
assertObjectsEqual({ a: '1', b: 2, c: 3 }, { b: 2, a: '1' }); // => should FAIL
assertObjectsEqual({}, { b: 2, a: '1' }); // => should FAIL

