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
  // itemChecker = [];
  result = '';

  if (array1 === '' || array2 == '') {
    return checker = false;
  }

  if (array1.length !== array2.length) {
    return checker = false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //checks if individual item matches
      //itemChecker.push(false);
      result = false;
      break //IMPORTANT! breaks the loop!
    } else {
      //checks if individual item matches
      // itemChecker.push(true);
      result = true;
    }
  } return result;
}


console.log('1st', eqArrays([1, 2, 3], [1, 2, 3])) // => false

console.log('2nd', eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log('3rd', eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true

console.log('4th', eqArrays(["1", "2", "3"], ["1", "2", 4])) // => false


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS