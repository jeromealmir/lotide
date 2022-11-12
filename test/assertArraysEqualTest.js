const _ = require('../index');

console.log('#assertArraysEqual');
_.assertArraysEqual([1, 2, 3], [1, 2, 3]);
_.assertArraysEqual([1, 2, 3], [1, 3, 3]);
console.log('\n');