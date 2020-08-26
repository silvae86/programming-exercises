var assert = require('assert');
var groupAnagrams = require("./group-anagrams").groupAnagrams;

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Group Anagrams', function () {
    describe('Trivial Cases', function () {
        it('Input: []", output = 0', function () {
            assert.equal(JSON.stringify(groupAnagrams(["tea"])), JSON.stringify([["tea"]]));
        });
        it('Input: ["ate"]", output = ["ate"]', function () {
            assert.equal(JSON.stringify(groupAnagrams(["ate"])), JSON.stringify([["ate"]]));
        });
        it('Input: ["tea"]", output = ["tea"]', function () {
            assert.equal(JSON.stringify(groupAnagrams(["tea"])), JSON.stringify([["tea"]]));
        });
    });

    describe('Open open close close', function () {
        it('Input: ["tea", "ate"], output = [["tea", "ate"]]', function () {
            assert.equal(
                JSON.stringify(groupAnagrams(["tea", "ate"])),
                JSON.stringify([["tea", "ate"]])
            );
        });
        it('Input: ["tea", "ate", "mane", "amen"], output = [["tea", "ate"], ["mane", "amen"]]', function () {
            assert.equal(
                JSON.stringify(groupAnagrams(["tea", "ate", "mane", "amen"])),
                JSON.stringify([["tea", "ate"], ["mane", "amen"]])
            );
        });
        it('Input: ["tea", "mane"], output = [["tea"], ["mane"]]', function () {
            assert.equal(
                JSON.stringify(groupAnagrams(["tea", "mane"])),
                JSON.stringify([["tea"], ["mane"]])
            );
        });

    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
