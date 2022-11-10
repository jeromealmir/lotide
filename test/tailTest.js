const assertEqual = require('../assertEqual');
const tail = require('../tail');

const originalArray = [1, 2, 3];
const modifiedArray = tail(originalArray);

assertEqual(originalArray, modifiedArray);
assertEqual(modifiedArray[0], 2);
assertEqual(modifiedArray[1], 3);
assertEqual(tail([]), [2, 3]);
assertEqual(tail([1]), [2, 3]);
assertEqual(tail([1, 2, 3]), [2, 3]);