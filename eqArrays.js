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
  let checker = '';

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      checker = true;
    } else checker = false;
  } return checker;
};


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS