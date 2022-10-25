//assertEqual Function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//tail Function

const tail = function(array) {
  return array.slice(1);
};

// TEST CODE

const originalArray = [1, 2, 3];
const modifiedArray = tail(originalArray);

assertEqual(originalArray, modifiedArray);
assertEqual(modifiedArray[0], 2);
assertEqual(modifiedArray[1], 3);
assertEqual(tail([]), [2, 3]);
assertEqual(tail([1]), [2, 3]);
assertEqual(tail([1, 2, 3]), [2, 3]);