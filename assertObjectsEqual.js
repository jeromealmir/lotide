//eqArrays Function

const eqArrays = function(actual, expected) {

  if ((actual.length !== expected.length)) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  
  return true;
};

//eqObjects Function

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;
};

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

