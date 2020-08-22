var assert = require('assert');
var minSubArrayLen = require("./minimum-size-subarray-sum").minSubArrayLen

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Minimum Size Subarray', function () {
    describe('Test Cases', function () {
        it('Input: s = 7, nums = [4,4,1], output = 2', function () {
            assert.equal(minSubArrayLen(7, [4, 4, 1]), 2);
        });
        it('Input: s = 7, nums = [2,3,1,2,4,3], output = 2', function () {
            assert.equal(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
        });
        it('Input: s = 4, nums = [1,1,1,1,1,5], output = 1', function () {
            assert.equal(minSubArrayLen(4, [1, 1, 2, 1, 1, 5]), 1);
        });
        it('Input: s = 4, nums = [1,1,2,1,1,5], output = 1', function () {
            assert.equal(minSubArrayLen(4, [1, 1, 2, 1, 1, 5]), 1);
        });
        it('Input: s = 5, nums = [1,1,2,1,1,5], output = 1', function () {
            assert.equal(minSubArrayLen(5, [1, 1, 3, 2, 1, 5]), 1);
        });
        it('Input: s = 7, nums = [1,1,2,5,1,5], output = 2', function () {
            assert.equal(minSubArrayLen(7, [1, 1, 2, 5, 1, 5]), 2);
        });
        it('Input: s = 10, nums = [], output = 0', function () {
            assert.equal(minSubArrayLen(10, []), 0);
        });
        it('Input: s = 10, nums = [1], output = 0', function () {
            assert.equal(minSubArrayLen(10, [1]), 0);
        });
        it('Input: s = 11, nums = [1,2,3,4,5], output = 3', function () {
            assert.equal(minSubArrayLen(10, [1, 2, 3, 4, 5]), 3);
        });
        it('Input: s = 15, nums = [1,13,1], output = 3', function () {
            assert.equal(minSubArrayLen(15, [1, 13, 1]), 3);
        });
        it('Input: s = 15, nums = [1,2,3,4,5], output = 5', function () {
            assert.equal(minSubArrayLen(15, [1, 2, 3, 4, 5]), 5);
        });
        it('Input: s = 11, nums = [1,2,3,4,5,6], output = 2', function () {
            assert.equal(minSubArrayLen(11, [1, 2, 3, 4, 5, 6]), 2);
        });
        it('Input: s = 12, nums = [1,2,3,4,5,6,7], output = 3', function () {
            assert.equal(minSubArrayLen(12, [1, 2, 3, 4, 5, 6]), 3);
        });
        it('Input: s = 13, nums = [1,2,3,4,5,6,7], output = 3', function () {
            assert.equal(minSubArrayLen(13, [1, 2, 3, 4, 5, 6, 7]), 2);
        });
        it('Input: s = 10, nums = [1,2,2,2,2,1], output = 6', function () {
            assert.equal(minSubArrayLen(10, [1, 2, 2, 2, 2, 1]), 6);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
