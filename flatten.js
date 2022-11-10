const flatten = function(array) {
  let flattenedArray = [];

  for (const items of array) {
    if (Array.isArray(items)) {
      flattenedArray.push(...flatten(items));
    } else {
      flattenedArray.push(items);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
