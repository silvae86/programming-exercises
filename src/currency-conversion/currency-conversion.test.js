var assert = require('assert');
var getRate = require("./currency-conversion").getRate;

const {performance} = require('perf_hooks');
var t0 = performance.now();

describe('Currency Conversion', function () {

    describe('Valid Cases', function () {
        it('Input: "USD", "EUR", output = 0', function () {
            assert.equal(getRate("USD", "EUR"), 2);
        });
        it('Input: "JRS", null, output = null', function () {
            assert.equal(getRate("JRS", null), null);
        });
        it('Input: null, "USD", output = null', function () {
            assert.equal(getRate(null, "USD"), null);
        });
        it('Input: "USD", "JPY", output = 0.11764705882352941', function () {
            assert.equal(getRate("USD", "JPY"), 0.11764705882352941);
        });
        it('Input: "EUR", "USD", output = 0.5', function () {
            assert.equal(getRate("EUR", "USD"), 0.5);
        });
        it('Input: "EUR", "JPY", output = 17', function () {
            assert.equal(getRate("EUR", "JPY"), 17);
        });
        it('Input: "JPY", "EUR", output = 17', function () {
            assert.equal(getRate("JPY", "EUR"), 0.058823529411764705);
        });
        it('Input: "EUR", "GBP", output = 11.333333333333332', function () {
            assert.equal(getRate("EUR", "GBP"), 11.333333333333332);
        });
        it('Input: "GBP", "XYZ", output = null', function () {
            assert.equal(getRate("GBP", "XYZ"), null);
        });
        it('Input: "XYZ", "CLP", output = null', function () {
            assert.equal(getRate("XYZ", "CLP"), 10);
        });
    });
});

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
