//assertArraysEqual function

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

//eqArrays function

const eqArrays =  function(array1, array2) {
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

//flatten function

const flatten = function (arrayFlatten) {
  let initalArray = []
  for (let i = 0; i < arrayFlatten.length; i++) {
    if(Array.isArray(...arrayFlatten)){
      initalArray.push(arrayFlatten[i]);
    }
  } return initalArray.concat(...arrayFlatten);
}

console.log(flatten([1, 2, [3, 4], [6]])) // => [1, 2, 3, 4, 5, 6]