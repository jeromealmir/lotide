const letterPosition = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];
    if (sentence[i] !== ' ') {
      if (results[key]) {
        results[key].push(i);
      } else {
        results[key] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPosition;