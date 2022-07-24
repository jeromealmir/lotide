//assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//Required: Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays =  function(array1, array2) {
  for(let i = 0; i < array1.length; i++) {
    for(let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);