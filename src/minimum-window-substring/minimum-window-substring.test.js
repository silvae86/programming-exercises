var assert = require('assert');
var minWindow = require("./minimum-window-substring").minWindow

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Minimum Window Substring', function () {
    describe('Test Cases', function () {
        it('Should extract BANC from s = ADOBECODEBANC and t = ABC', function () {
            assert.equal(minWindow("ADOBECODEBANC", "ABC"), "BANC");
        });
        it('Should extract BANC from s = ADOBECODEBANCADOBECODEBANC and t = ABC', function () {
            assert.equal(minWindow("ADOBECODEBANCADOBECODEBANC", "ABC"), "BANC");
        });
        it('Should extract BA from s = AKBCDBBA and t = ABC', function () {
            assert.equal(minWindow("AKBCDBBA", "ABC"), "AKBC");
        });
        it('Should extract A from s = A and t = A', function () {
            assert.equal(minWindow("A", "A"), "A");
        });
        it('Should extract ABC from s = ABC and t = AC', function () {
            assert.equal(minWindow("ABC", "AC"), "ABC");
        });
        it('Should extract ABBC from s = ABBC and t = ABC', function () {
            assert.equal(minWindow("ABBC", "ABC"), "ABBC");
        });
        it('Should extract AD from s = ABBCD and t = AD', function () {
            assert.equal(minWindow("ABBCD", "AD"), "ABBCD");
        });
        it('Should extract ABBC from s = ABBCD and t = ABC', function () {
            assert.equal(minWindow("ABBCD", "ABC"), "ABBC");
        });
        it('Should extract AC from s = ABACCA and t = AC', function () {
            assert.equal(minWindow("ABACCA", "AC"), "AC");
        });
        it('Should extract ABBCD from s = ABBCD and t = ABBCD', function () {
            assert.equal(minWindow("ABBCD", "ABCD"), "ABBCD");
        });
        it('Should extract BAA from s = ABA and t = BBAAC', function () {
            assert.equal(minWindow("BBAAC", "ABA"), "BAA");
        });
        it('Should extract BAA from s = ABA and t = BBAA', function () {
            assert.equal(minWindow("BBAA", "ABA"), "BAA");
        });
        it('Should extract B from s = ABC and t = B', function () {
            assert.equal(minWindow("ABC", "B"), "B");
        });
        it('Should extract C from s = ABC and t = C', function () {
            assert.equal(minWindow("ABC", "C"), "C");
        });
        it('Should extract A from s = ABC and t = A', function () {
            assert.equal(minWindow("ABC", "A"), "A");
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
