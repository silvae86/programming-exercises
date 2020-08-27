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

    describe('Valid Cases', function () {
        it('[Single island in middle] Input: [ ["0","0","0","0","0"], ["0","1","1","1","0"], ["0","1","1","1","0"], ["0","0","0","0","0"]", output = 6', function () {
            assert.equal(maximalRectangle([["0", "0", "0", "0", "0"], ["0", "1", "1", "1", "0"], ["0", "1", "1", "1", "0"], ["0", "0", "0", "0", "0"]]), 6);
        });
        it('[Two islands in middle] Input: [ ["0","0","0","0","0"], ["0","1","0","1","0"], ["0","1","0","1","0"], ["0","0","0","0","0"] ]", output = 2', function () {
            assert.equal(maximalRectangle([["0", "0", "0", "0", "0"], ["0", "1", "0", "1", "0"], ["0", "1", "0", "1", "0"], ["0", "0", "0", "0", "0"]]), 2);
        });

        it('[Leetcode example] Input: [ ["1","0","1","0","0"], ["1","0","1","1","1"], ["1","1","1","1","1"], ["1","0","0","1","0"] ]", output = 6', function () {
            assert.equal(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]), 6);
        });

        it('[Huge Matrix] Input: [ 1000 x 1000 ]", output = 1 000 000 ', function () {

            let hugeMatrix = new Array(1000);
            for (let i = 0; i < 1000; i++) {
                hugeMatrix[i] = new Array(1000).fill("1");
            }

            assert.equal(maximalRectangle(hugeMatrix), 1000 * 1000);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
