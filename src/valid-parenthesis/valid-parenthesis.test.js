var assert = require('assert');
var isValid = require("./valid-parenthesis").isValid

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Valid Parenthesis', function () {
    describe('Valid Cases', function () {
        it('Input: (), output = true', function () {
            assert.equal(isValid("()"), true);
        });
        it('Input: (()), output = true', function () {
            assert.equal(isValid("(())"), true);
        });
        it('Input: ()()()()()(), output = true', function () {
            assert.equal(isValid("()()()()()()"), true);
        });
        it('Input: ()[]{}, output = true', function () {
            assert.equal(isValid("()[]{}"), true);
        });
        it('Input: {[]}, output = true', function () {
            assert.equal(isValid("{[]}"), true);
        });
        it('Input: \"\", output = true', function () {
            assert.equal(isValid(""), true);
        });
    });
    describe('Invalid Cases', function () {
        it('Input: { , output = false', function () {
            assert.equal(isValid("{"), false);
        });
        it('Input: } , output = false', function () {
            assert.equal(isValid("}"), false);
        });
        it('Input: (], output = false', function () {
            assert.equal(isValid("(]"), false);
        });
        it('Input: ([]{ , output = false', function () {
            assert.equal(isValid("([]{"), false);
        });
        it('Input: ()()()()()() , output = false', function () {
            assert.equal(isValid("()()()()()()"), true);
        });
        it('Input: ([)] , output = false', function () {
            assert.equal(isValid("([)]"), false);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
