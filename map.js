const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//AssertArrayEquals Function

const assertArrayEquals =  function(array1, array2) {
  // itemChecker = [];
  result = '';

  if (array1 === '' || array2 === '') {
    return checker = false;
  }

  if (array1.length !== array2.length) {
    return checker = false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //checks if individual item matches
      //itemChecker.push(false)
      result = `🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`;
      break //IMPORTANT! breaks the loop!
    } else {
      //checks if individual item matches
      // itemChecker.push(true)
      result = `✅✅✅ Assertion Passed: [${array1}] === [${array2}]`;
    }
  } return result;
}


const results1 = map(words, word => word[0]);

console.log(assertArrayEquals(results1[0], 'g'));