//eqArrays Function

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

//assertArraysEqual Function

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//middle Function

const middle = function(array) {
  let middleNumber = [];
  const halfLength = Math.floor(array.length / 2);
  if (array.length >= 3) {
    if (array.length % 2 === 1) {
      middleNumber = array.slice(halfLength, halfLength + 1);
    } else {
      middleNumber = array.slice(halfLength - 1, halfLength + 1);
    }
  }
  return middleNumber;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);