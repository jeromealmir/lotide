const _ = require('../index');

_.eqArrays([1, 2, 3], [1, 2, 3]); // => true
_.eqArrays([1, 2, 3], [3, 2, 1]); // => false

_.eqArrays(['1', '2', '3'], ['1', '2', '3']); // => true
_.eqArrays(['1', '2', '3'], ['1', '2', 3]); // => false

_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS