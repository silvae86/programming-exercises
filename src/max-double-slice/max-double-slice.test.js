var assert = require('assert');
var solution = require("./max-double-slice").solution;

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Maximum Double Slice', function () {

    describe('Valid Cases', function () {
        it('Input: [3,2,6,-1,4,5,-1,2]", output = 17', function () {
            assert.equal(solution([3, 2, 6, -1, 4, 5, -1, 2]), 17);
        });
        it('Input: [3,-20,6,-1,4,5,-1,-20]", output = 17', function () {
            assert.equal(solution([3, -20, 6, -1, 4, 5, -1, -20]), 17);
        });
        it('Input: [1,1,0,10,-100,10,0]", output = 21', function () {
            assert.equal(solution([1, 1, 0, 10, -100, 10, 0]), 21);
        });
    });

    describe('Trivial Cases', function () {
        it('Input: []", output = 0', function () {
            assert.equal(solution([]), 0);
        });
        it('Input: []", output = 0', function () {
            assert.equal(solution([]), 0);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
