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

countLetters("lighthouse in the house");
