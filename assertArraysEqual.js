const assertArrayEquals =  function(array1, array2) {
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
      result = `🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`;
      break //IMPORTANT! breaks the loop!
    } else {
      //checks if individual item matches
      // itemChecker.push(true);
      result = `✅✅✅ Assertion Passed: [${array1}] === [${array2}]`;
    }
  } return result;
}


console.log('1st', assertArrayEquals([1, 2, 3], [1, 2, 3])) // => true

console.log('2nd', assertArrayEquals([1, 2, 3], [3, 2, 1])) // => false

console.log('3rd', assertArrayEquals(["1", "2", "3"], ["1", "2", "3"])) // => true

console.log('4th', assertArrayEquals(["1", "2", "3"], ["1", "2", 4])) // => false
