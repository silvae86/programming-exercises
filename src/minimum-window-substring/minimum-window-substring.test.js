var assert = require('assert');
var minWindow = require("./minimum-window-substring").minWindow

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Minimum Window Substring', function () {
    describe('Test Cases', function () {
        it('Should extract \"\" from s = BABB and t = BABA', function () {
            assert.equal(minWindow("BABB", "BABA"), "");
        });
        it('Should extract BABA from s = BABA and t = BABA', function () {
            assert.equal(minWindow("BABA", "BABA"), "BABA");
        });
        it('Should extract BANC from s = ADOBECODEBANC and t = ABC', function () {
            assert.equal(minWindow("ADOBECODEBANC", "ABC"), "BANC");
        });
        it('Should extract BANC from s = ADOBECODEBANCADOBECODEBANC and t = ABC', function () {
            assert.equal(minWindow("ADOBECODEBANCADOBECODEBANC", "ABC"), "BANC");
        });
        it('Should extract AKBC from s = AKBCDBBA and t = ABC', function () {
            assert.equal(minWindow("AKBCDBBA", "ABC"), "AKBC");
        });
        it('Should extract CDBBA from s = AKKKKBCDBBA and t = ABC', function () {
            assert.equal(minWindow("AKKKKBCDBBA", "ABC"), "CDBBA");
        });
        it('Should extract CDABC from s = ABACDABBAC and t = ABCC', function () {
            assert.equal(minWindow("ABACDABCAB", "ABCC"), "CDABC");
        });
        it('Should extract BBAC from s = ABACDABBAC and t = BCBA', function () {
            assert.equal(minWindow("ABACDABBAC", "BCBA"), "BBAC");
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
        it('Should extract CA from s = ABACCA and t = AC', function () {
            assert.equal(minWindow("ABACCA", "AC"), "CA");
        });
        it('Should extract CA from s = ABACCAXXXXXXX and t = AC', function () {
            assert.equal(minWindow("ABACCAXXXXXXX", "AC"), "CA");
        });
        it('Should extract CA from s = ABACCAXXXXXXXA and t = AC', function () {
            assert.equal(minWindow("ABACCAXXXXXXXA", "AC"), "CA");
        });
        it('Should extract CA from s = ABACCAX and t = AC', function () {
            assert.equal(minWindow("ABACCAX", "AC"), "CA");
        });
        it('Should extract CA from s = ABACCAA and t = AC', function () {
            assert.equal(minWindow("ABACCAA", "AC"), "CA");
        });
        it('Should extract BAA from s = ABA and t = BBAAC', function () {
            assert.equal(minWindow("BBAAC", "ABA"), "BAA");
        });
        it('Should extract ABBCD from s = ABBCD and t = ABBCD', function () {
            assert.equal(minWindow("ABBCD", "ABCD"), "ABBCD");
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
