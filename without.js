const without = function(source, itemsToRemove) {
  let filteredArray = source.slice();

  for (const key of itemsToRemove) {
    let index = filteredArray.indexOf(key);
    if (index > -1) {
      filteredArray.splice(index, 1);
    }
  }
  return filteredArray;
};

module.exports = without;