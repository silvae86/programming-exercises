var assert = require('assert');
var maximalSquare = require("./maximal-square-brute-force").maximalSquare;

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Maximal Square', function () {
    describe('Trivial Cases', function () {
        it('Input: [], output = 0', function () {
            assert.equal(maximalSquare([]), 0);
        });
        it('Input: [["1"]], output = 1', function () {
            assert.equal(maximalSquare([["1"]]), 1);
        });
        it('Input: [["0"]], output = 0', function () {
            assert.equal(maximalSquare([["0"]]), 0);
        });
    });

    describe('Valid Cases', function () {
        it('[Single island in middle, 5x4] Input: [ ["0","0","0","0","0"], ["0","1","1","1","0"], ["0","1","1","1","0"], ["0","0","0","0","0"]", output = 4', function () {
            assert.equal(maximalSquare([["0", "0", "0", "0", "0"], ["0", "1", "1", "1", "0"], ["0", "1", "1", "1", "0"], ["0", "0", "0", "0", "0"]]), 4);
        });
        it('[Two islands in middle, 4x5] Input: [ ["0","0","0","0","0"], ["0","1","0","1","0"], ["0","1","0","1","0"], ["0","0","0","0","0"] ]", output = 1', function () {
            assert.equal(maximalSquare([["0", "0", "0", "0", "0"], ["0", "1", "0", "1", "0"], ["0", "1", "0", "1", "0"], ["0", "0", "0", "0", "0"]]), 1);
        });

        it('[Everything 1s, 4x5 ] Input: [ ["1","1","1","1","1"], ["1","1","1","1","1"], ["1","1","1","1","1"], ["1","1","1","1","1"] ]", output = 16', function () {
            assert.equal(maximalSquare([["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"]]), 16);
        });

        it('[Everything 1s, 5x4] Input: [ ["1","1","1","1"], ["1","1","1","1"], ["1","1","1","1"], ["1","1","1","1"], ["1","1","1","1"] ]", output = 16', function () {
            assert.equal(maximalSquare([["1", "1", "1", "1"], ["1", "1", "1", "1"], ["1", "1", "1", "1"], ["1", "1", "1", "1"], ["1", "1", "1", "1"]]), 16);
        });

        it('[Everything 1s, 3x4] Input: [ ["1","1","1","1"], ["1","1","1","1"], ["1","1","1","1"]]", output = 9', function () {
            assert.equal(maximalSquare([["1", "1", "1", "1"], ["1", "1", "1", "1"], ["1", "1", "1", "1"]]), 9);
        });

        it('[Everything 0s, 3x4] Input: [ ["0","0","0","0"], ["0","0","0","0"], ["0","0","0","0"]]", output = 0', function () {
            assert.equal(maximalSquare([["0", "0", "0", "0"], ["0", "0", "0", "0"], ["0", "0", "0", "0"]]), 0);
        });

        it('[Everything 0s except 1, 3x4] Input: [ ["0","0","0","1"], ["0","0","0","0"], ["0","0","0","0"]]", output = 1', function () {
            assert.equal(maximalSquare([["0", "0", "0", "1"], ["0", "0", "0", "0"], ["0", "0", "0", "0"]]), 1);
        });

        it('[Leetcode example] Input: [ ["1","0","1","0","0"], ["1","0","1","1","1"], ["1","1","1","1","1"], ["1","0","0","1","0"] ]", output = 4', function () {
            assert.equal(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]), 4);
        });

        it('[Leetcode example 2] Input: [["1","1","1","1","1"],["1","1","1","1","1"],["0","0","0","0","0"],["1","1","1","1","1"],["1","1","1","1","1"]]", output = 4', function () {
            assert.equal(maximalSquare([["1","1","1","1","1"],["1","1","1","1","1"],["0","0","0","0","0"],["1","1","1","1","1"],["1","1","1","1","1"]]), 4);
        });

        it('[Leetcode example 3] Input: [["0","0","0","1"],["1","1","0","1"],["1","1","1","1"],["0","1","1","1"],["0","1","1","1"]]", output = 9', function () {
            assert.equal(maximalSquare([["0","0","0","1"],["1","1","0","1"],["1","1","1","1"],["0","1","1","1"],["0","1","1","1"]]), 9);
        });

        it('[Huge Matrix] Input: [ 1000 x 1000 ]", output = 1 000 000', function () {

            let hugeMatrix = new Array(1000);
            for (let i = 0; i < 1000; i++) {
                hugeMatrix[i] = new Array(1000).fill("1");
            }

            assert.equal(maximalSquare(hugeMatrix), 1000 * 1000);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
