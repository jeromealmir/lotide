const takeUntil = function(array, callback) {
  let results = [];

  array.filter((value, index, array) => callback(value) ? results = array.slice(0, index) : null);
  
  return results;
};

module.exports = takeUntil;
