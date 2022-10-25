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

//flatten Function

const flatten = function(array) {
  let flattenedArray = [];
  for (const items of array) {
    if (Array.isArray(items)) {
      for (const item of items) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(items);
    }
  }
  return flattenedArray;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => should PASS