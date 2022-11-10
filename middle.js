const middle = function(array) {
  let middleNumber = [];
  const halfLength = Math.floor(array.length / 2);
  if (array.length >= 3) {
    if (array.length % 2 === 1) {
      middleNumber = array.slice(halfLength, halfLength + 1);
    } else {
      middleNumber = array.slice(halfLength - 1, halfLength + 1);
    }
  }
  return middleNumber;
};

module.exports = middle;