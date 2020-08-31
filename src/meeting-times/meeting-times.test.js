var assert = require('assert');
var meetingTimes = require("./meeting-times").meetingTimes;

const {performance} = require('perf_hooks');
var t0 = performance.now();

// found here

describe('Meeting Times - AirBNB interview', function () {


    describe('Valid Cases', function () {
        it('[Modified example] Input: [ [[4,5],[6,10],[12,14]], [[4,5],[5,9],[13,16]], [[11,14]] ]' +
            ' output =' +
            ' [[0,4],[10,11],[16,23]]', function () {
            assert.equal(JSON.stringify(meetingTimes([[[4, 5], [6, 10], [12, 14]], [[4, 5], [5, 9], [13, 16]], [[11, 14]]])), JSON.stringify([[0, 4], [10, 11], [16, 23]]));
        });
        it('Input: [[[11,12]]], output = [[[0,11], [11,23]]]', function () {
            assert.equal(JSON.stringify(meetingTimes([[[11, 12]]])), JSON.stringify([[0, 11], [12, 23]]));
        });

    });
    describe('Trivial Cases', function () {
        it('Input: [], output = [[0,23]]', function () {
            assert.equal(JSON.stringify(meetingTimes([])), JSON.stringify([[0, 23]]));
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
