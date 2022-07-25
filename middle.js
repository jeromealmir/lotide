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


const middle = function (array) {
  // console.log(array[0], array[array.length-1])
  let middleItem = []
  if(array.length === 1 || array.length === 2) {
    middleItem = []
  } else if(array.length % 2 === 1) {
    middleItem = array.slice(array.length/2, ((array.length/2)+1))
  } else if(array.length % 2 === 0) {
    middleItem = array.slice(((array.length/2)-1), ((array.length/2)+1))
  } return middleItem;
}

console.log(assertArrayEquals(middle([1]), [])) // => []
console.log(assertArrayEquals(middle([1, 2]), [])) // => []

console.log(assertArrayEquals(middle([1, 2, 3]), [2])) // => [2]
console.log(assertArrayEquals(middle([1, 2, 3, 4, 5]), [3])) // => [3]

console.log(assertArrayEquals(middle([1, 2, 3, 4]), [2, 3])) // => [2, 3]
console.log(assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4])) // => [3, 4]
