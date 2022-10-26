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

//letterPositions Function

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];
    if (sentence[i] !== ' '){
      if (results[key]) {
        results[key].push(i);
      } else {
        results[key] = [i];
      }
    }
  }
  return results;
};

letterPositions('lighthouse in the house');

// assertArraysEqual(letterPositions('hello').e, [1]);

// console.log([0, 1, [2, 3], 4].length)