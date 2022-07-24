const eqArrays =  function(array1, array2) {
  let checker = '';
  let assertionMessage = '';

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      checker = true;
    } else {
      checker = false;
    }

    if (checker === true) {
      assertionMessage = `✅✅✅ Assertion Passed: [${array1}] === [${array2}]`;
    } else assertionMessage = `🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`;

  } console.log (assertionMessage);
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false