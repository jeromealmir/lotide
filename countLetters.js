const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = (string) => {;
  const noSpaces = string.split(" ").join("").toLowerCase();
  let myObj = {};
  
  for (element of noSpaces) {
    if (myObj[element]) {
      myObj[element] += 1;
    } else {
      myObj[element] = 1;
    }
  }console.log(myObj);
}



assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 1, g: 1, h: 1, t: 1, o: 1, u: 1, s: 1, e: 1, n: 1 })