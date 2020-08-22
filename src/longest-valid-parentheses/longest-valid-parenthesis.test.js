var assert = require('assert');
var longestValidParentheses = require("./longest-valid-parentheses").longestValidParentheses

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Longest Valid Parenthesis', function () {
    describe('Trivial Cases', function () {
        it('Input: \"\"", output = 0', function () {
            assert.equal(longestValidParentheses(""), 0);
        });
    });
    describe('Open open close close', function () {
        it('Input: (()), output = 4', function () {
            assert.equal(longestValidParentheses("(())"), 4);
        });
        it('Input: ((((())))), output = 10', function () {
            assert.equal(longestValidParentheses("((((()))))"), 10);
        });
        it('Input: (((((()))))), output = 12', function () {
            assert.equal(longestValidParentheses("(((((())))))"), 12);
        });
        it('Input: ( , output = 0', function () {
            assert.equal(longestValidParentheses("{"), 0);
        });
        it('Input: } , output = 0', function () {
            assert.equal(longestValidParentheses("}"), 0);
        });
    });

    describe('Open and close, open and close', function () {
        it('Input: (), output = 2', function () {
            assert.equal(longestValidParentheses("()"), 2);
        });
        it('Input: ()(), output = 4', function () {
            assert.equal(longestValidParentheses("()()"), 4);
        });
        it('Input: ()()(), output = 6', function () {
            assert.equal(longestValidParentheses("()[]{}"), 6);
        });
        it('Input: ()()()() , output = 8', function () {
            assert.equal(longestValidParentheses("()[]{}()"), 8);
        });
        it('Input: ()()()()()(), output = 12', function () {
            assert.equal(longestValidParentheses("()()()()()()"), 12);
        });
    });

    describe('Open and close, open and close and junk at start or end', function () {
        it('Input: ()()()()()( , output = 10', function () {
            assert.equal(longestValidParentheses("()()()()()("), 10);
        });
        it('Input: )()()()() , output = 8', function () {
            assert.equal(longestValidParentheses("()()()()("), 8);
        });
        it('Input: )()()()()( , output = 8', function () {
            assert.equal(longestValidParentheses(")()()()()("), 8);
        });
        it('Input: )()()()()(, output = 8', function () {
            assert.equal(longestValidParentheses(")()()()()("), 8);
        });
        it('Input: (((((()))))))))))))))))) , output = false', function () {
            assert.equal(longestValidParentheses("(((((())))))))))))))))))"), 12);
        });
    });

    describe('Open and close, open and close and junk at middle', function () {
        it('Input: ()())))))-->()()()<--( , output = 6', function () {
            assert.equal(longestValidParentheses("()())))))()()()("), 6);
        });
        it('Input: ()()((((((-->()()()<--( , output = 6', function () {
            assert.equal(longestValidParentheses("()()((((((()()()("), 6);
        });
    });

    describe('Invalid Cases', function () {
        it('Input: (], output = 0', function () {
            assert.equal(longestValidParentheses("(]"), 0);
        });
        it('Input: ([]{ , output = 0', function () {
            assert.equal(longestValidParentheses("([]{"), 0);
        });

        it('Input: ([)] , output = false', function () {
            assert.equal(longestValidParentheses("([)]"), 0);
        });
        it('Input: ]]]]]]]]]]] , output = false', function () {
            assert.equal(longestValidParentheses("]]]]]]]]]]]"), 0);
        });
        it('Input: [[[[[[[[[[[ , output = false', function () {
            assert.equal(longestValidParentheses("[[[[[[[[[[["), 0);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
