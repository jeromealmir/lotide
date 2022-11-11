const { assert } = require('chai');
const _ = require('../index');

describe('#eqObjects', () => {
  
  const objList = {
    ab: { a: "1", b: "2" },
    ba: { b: "2", a: "1" },
    abc: { a: "1", b: "2", c: "3" },
    cd: { c: "1", d: ["2", 3] },
    dc: { d: ["2", 3], c: "1" },
    cd2: { c: "1", d: ["2", 3, 4] },
  }

  it('return true for (objList.ab, objList.ba)', () => {
    assert.strictEqual(_.eqObjects(objList.ab, objList.ba), true)
  });
  it('return false for (objList.ab, objList.abc)', () => {
    assert.strictEqual(_.eqObjects(objList.ab, objList.abc), false)
  });
  it('return true for (objList.cd, objList.dc)', () => {
    assert.strictEqual(_.eqObjects(objList.cd, objList.dc), true)
  });
  it('return false for (objList.cd, objList.cd2)', () => {
    assert.strictEqual(_.eqObjects(objList.cd, objList.cd2), false)
  });
})