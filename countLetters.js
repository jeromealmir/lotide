const countLetters = function(string) {
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

module.exports = countLetters;