//assertEqual Function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//countLetters Function

const countLetters = function(string) {
  console.log(string.split(' '));
  const flattenString = string.split(' ').join('');
  let counter = {};
  for (const key of flattenString) {
    if (counter[key]) {
      counter[key] += 1;
    } else {
      counter[key] = 1;
    }
  }
  return counter;
};

assertEqual(countLetters('lighthouse in the house').e, 3);