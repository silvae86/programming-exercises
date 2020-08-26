var assert = require('assert');
var maximalRectangle = require("./maximal-rectangle").maximalRectangle;

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Maximal Rectangle', function () {
    describe('Trivial Cases', function () {
        it('Input: []", output = 0', function () {
            assert.equal(maximalRectangle([]), 0);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
