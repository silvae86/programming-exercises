var assert = require('assert');
var largestRectangleArea = require("./largest-rectangle-area-histogram-stack").largestRectangleArea;

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Largest Rectangle Area Under Histogram', function () {
    describe('Trivial Cases', function () {
        it('Input: []", output = 0', function () {
            assert.equal(largestRectangleArea([]), 0);
        });
        it('Input: [2]", output = 2', function () {
            assert.equal(largestRectangleArea([2]), 2);
        });
        it('Input: [0]", output = 0', function () {
            assert.equal(largestRectangleArea([0]), 0);
        });
    });

    describe('Failed from leetcode', function () {
        it('Input: [5,5,1,7,1,1,5,2,7,6]", output = 12', function () {
            assert.equal(largestRectangleArea([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]), 12);
        });
    });

    describe('Examples', function () {
        it('[Tower in middle] Input: [2,1,5,6,2,3]", output = 10', function () {
            assert.equal(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
        });
        it('[Towers in extremes] Input: [600,500,3,1,2,2,500,600]", output = 1000', function () {
            assert.equal(largestRectangleArea([600, 500, 3, 1, 2, 2, 500, 600]), 1000);
        });

        it('[Towers in extremes] Input: [600,500,3,1,2,2,700,600]", output = 1200', function () {
            assert.equal(largestRectangleArea([600, 500, 3, 1, 2, 2, 700, 600]), 1200);
        });

        it('[Hotdog Bottom Rectangle] Input: [500,6,5,5,6,500]", output = 30', function () {
            assert.equal(largestRectangleArea([10, 6, 5, 5, 6, 10]), 30);
        });
        it('[Center Mountain] Input: [2,6,5,5,6,2]", output = 20', function () {
            assert.equal(largestRectangleArea([2, 5, 6, 6, 5, 2]), 20);
        });
        it('[SkyscraperWithShack] Input: [0,9]", output = 9', function () {
            assert.equal(largestRectangleArea([0, 9]), 9);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
