//ASSERT FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// HEAD FUNCTION

const head = function(array) {
  return array.shift();
}

//TEST CODE

assertEqual(head([]), 5);
assertEqual(head([5]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');