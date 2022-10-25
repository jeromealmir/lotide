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

//without Function

const without = function(source, itemsToRemove) {
  let filteredArray = [];

  // for (const items of itemsToRemove) {
  //   for (const elements of source) {
  //     if(elements === items) {
  //       if(elements !== items) {
  //         console.log(elements)
  //       }
  //       // filteredArray.push(elements)
  //     }
  //     // console.log('items', items, 'elements', elements)
  //   }
  // }

  for (const items of itemsToRemove) {
    filteredArray.push(source.filter(elements => elements !== items))
  }
  console.log(filteredArray)
};



without([1, 2, 3], [1, 3]) // => [2, 3]
without(["1", "2", "3"], [1, "2", 3]) // => ["1", "2"]