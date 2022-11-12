const assertArraysEqual = require('./assertArraysEqual');

//map Function

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);