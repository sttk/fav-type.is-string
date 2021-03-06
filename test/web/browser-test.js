(function(){
'use strict';




var expect = chai.expect;
var isNotString = fav.type.isString.not;

describe('fav.type.isString.not', function() {

  it('Should return false when value is a string', function() {
    expect(isNotString('')).to.equal(false);
    expect(isNotString('abc')).to.equal(false);
    expect(isNotString('あ')).to.equal(false);
    expect(isNotString('ä')).to.equal(false);
    expect(isNotString(String(123))).to.equal(false);
  });

  it('Should return false when value is a string object', function() {
    expect(isNotString(Object(''))).to.equal(false);
    expect(isNotString(new String('abc'))).to.equal(false);
  });

  it('Should return true when value is other type', function() {
    expect(isNotString(undefined)).to.equal(true);
    expect(isNotString(null)).to.equal(true);
    expect(isNotString(true)).to.equal(true);
    expect(isNotString(false)).to.equal(true);
    expect(isNotString(0)).to.equal(true);
    expect(isNotString(987)).to.equal(true);
    expect(isNotString(-0.1234)).to.equal(true);
    expect(isNotString(NaN)).to.equal(true);
    expect(isNotString(Infinity)).to.equal(true);
    expect(isNotString(new Number(987))).to.equal(true);
    expect(isNotString([])).to.equal(true);
    expect(isNotString([1, 2])).to.equal(true);
    expect(isNotString({})).to.equal(true);
    expect(isNotString({ a: 1 })).to.equal(true);
    expect(isNotString(/a/g)).to.equal(true);
    expect(isNotString(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotString(function() {})).to.equal(true);
    expect(isNotString(new Date())).to.equal(true);
    expect(isNotString(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotString(Symbol('foo'))).to.equal(true);
    }
  });
});

})();
(function(){
'use strict';




var expect = chai.expect;
var isString = fav.type.isString;

describe('fav.type.isString', function() {

  it('Should return true when value is a string', function() {
    expect(isString('')).to.equal(true);
    expect(isString('abc')).to.equal(true);
    expect(isString('あ')).to.equal(true);
    expect(isString('ä')).to.equal(true);
    expect(isString(String(123))).to.equal(true);
  });

  it('Should return true when value is a string object', function() {
    expect(isString(Object(''))).to.equal(true);
    expect(isString(new String('abc'))).to.equal(true);
  });

  it('Should return false when value is other type', function() {
    expect(isString(undefined)).to.equal(false);
    expect(isString(null)).to.equal(false);
    expect(isString(true)).to.equal(false);
    expect(isString(false)).to.equal(false);
    expect(isString(0)).to.equal(false);
    expect(isString(987)).to.equal(false);
    expect(isString(-0.1234)).to.equal(false);
    expect(isString(NaN)).to.equal(false);
    expect(isString(Infinity)).to.equal(false);
    expect(isString(new Number(987))).to.equal(false);
    expect(isString([])).to.equal(false);
    expect(isString([1, 2])).to.equal(false);
    expect(isString({})).to.equal(false);
    expect(isString({ a: 1 })).to.equal(false);
    expect(isString(/a/g)).to.equal(false);
    expect(isString(new RegExp('a', 'g'))).to.equal(false);
    expect(isString(function() {})).to.equal(false);
    expect(isString(new Date())).to.equal(false);
    expect(isString(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isString(Symbol('foo'))).to.equal(false);
    }
  });
});

})();
