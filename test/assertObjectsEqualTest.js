const _ = require('../index');

console.log('#assertObjectsEqual');
_.assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // => should PASS
_.assertObjectsEqual({ a: '1', b: 2, c: 3 }, { b: 2, a: '1' }); // => should FAIL
_.assertObjectsEqual({}, { b: 2, a: '1' }); // => should FAIL
console.log('\n');