var assert = require('assert');
var groupAnagrams = require("./group-anagrams").groupAnagrams;

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Interview', function () {
    describe('Trivial Cases', function () {
        it('Input: []", output = 0', function () {
            assert.equal(JSON.stringify(groupAnagrams(["tea"])), JSON.stringify([["tea"]]));
        });
    });

    describe('Valid Cases', function () {
        it('Input: ["tea", "ate"], output = [["tea", "ate"]]', function () {
            assert.equal(
                JSON.stringify(groupAnagrams(["tea", "ate"])),
                JSON.stringify([["tea", "ate"]])
            );
        });

    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
