//assertEqual Function

const assertEqual = require('./assertEqual')

//head Function

const head = function(array) {
  return array.shift();
}

//TEST CODE

assertEqual(head([5]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');