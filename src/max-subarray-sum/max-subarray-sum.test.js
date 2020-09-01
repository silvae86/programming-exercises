var assert = require('assert');
var maxSubArray = require("./max-subarray-sum").maxSubArray;

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Maximum Subarray Sum (Kadane\'s Algorithm', function () {

    describe('Valid Cases', function () {
        it('Input: [3,-20,6,-1,4,5,-1,-20]", output = 14', function () {
            assert.equal(maxSubArray([3, -20, 6, -1, 4, 5, -1, -20]), 14);
        });
        it('Input: [-2,1,-3,4,-1,2,1,-5,4]", output = 6', function () {
            assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
        });
    });

    describe('Trivial Cases', function () {
        it('Input: []", output = 0', function () {
            assert.equal(maxSubArray([]), 0);
        });
        it('Input: []", output = 0', function () {
            assert.equal(maxSubArray([]), 0);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
