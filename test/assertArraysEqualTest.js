const _ = require('../index');

_.assertArraysEqual([1, 2, 3], [1, 2, 3]);
_.assertArraysEqual([1, 2, 3], [1, 3, 3]);