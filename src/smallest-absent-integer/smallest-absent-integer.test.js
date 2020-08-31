var assert = require('assert');
var solution = require("./smallest-absent-integer").solution;

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Smallest Unseen Integer', function () {
    describe('Test Cases', function () {
        it('Input [1, 3, 6, 4, 1, 2] , Output 1', function () {
            assert.equal(solution([1, 3, 6, 4, 1, 2]), 5);
        });
        it('Input [2], Output 1', function () {
            assert.equal(solution([2]), 1);
        });
        it('Input [-1 000 000, 1 000 000], Output 1 000 001', function () {
            assert.equal(solution([-1000000, 1000000]), 1);
        });
        it('Input [-1 000 000], Output 1', function () {
            assert.equal(solution([-1000000]), 1);
        });
        it('Input [1 000 000], Output 1', function () {
            assert.equal(solution([1000000]), 1);
        });
        it('Input [-999 995, 5], Output 1', function () {
            assert.equal(solution([-999995, 5]), 1);
        });
        it('Input [3], Output 1', function () {
            assert.equal(solution([3]), 1);
        });
        it('Input [-3], Output 1', function () {
            assert.equal(solution([-3]), 1);
        });
        it('Input [-1,-2,-3,-4,-5], Output 1', function () {
            assert.equal(solution([-1, -2, -3, -4, -5]), 1);
        });
        it('Input [0,1,2,-3,3,4,-4,5,-5,6], Output 7', function () {
            assert.equal(solution([0, 1, 2, -3, 3, 4, -4, 5, -5, 6]), 7);
        });
        it('Input [0], Output 1', function () {
            assert.equal(solution([0]), 1);
        });
        it('Input [], Output 1', function () {
            assert.equal(solution([1]), 2);
        });
        it('Input large, 1-1,000,000, Output 1 000 001', function () {
            let array = [];

            for (let i = 0; i <= Math.pow(10, 6); i++) {
                array.push(i);
            }

            assert.equal(solution(array), 1000001);
        });
        it('Shuffled Sequence', function () {
            let array = [];

            for (let i = 0; i <= 100; i++) {
                array.push(i);
            }

            for (let i = 102; i <= 200; i++) {
                array.push(i);
            }

            assert.equal(solution(array), 101);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
