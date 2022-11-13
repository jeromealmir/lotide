const eqArrays = function(actual, expected) {

  let results = true;
  
  if ((actual.length !== expected.length)) {
    return false;
  }
  
  for (let i = 0; i < actual.length; i++) {

    if (Array.isArray(actual[i])) {
      if (!eqArrays(actual[i], expected[i])) {
        return false;
      }
    } else if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return results;
};

module.exports = eqArrays;