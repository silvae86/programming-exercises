/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let multipliers = [];
    let digits = [];
    let count = 0;
    let reversedNumber = 0;
    let multiplier = (x > 0)? 1: -1 ;
    x = Math.abs(x);
    while(x > 0)
    {
        multipliers.push(Math.pow(10, count++));
        digits.push(x % 10);
        x = Math.floor(x / 10);
    }

    multipliers = multipliers.reverse();
    for (let i = 0; i < digits.length; i++) {
        reversedNumber += digits[i] * multipliers[i];
    }

    if(reversedNumber > Math.pow(2,31) - 1)
        return 0
    else
        return reversedNumber * multiplier;
};

const {performance} = require('perf_hooks');
var t0 = performance.now()
console.log(reverse(-123));
console.log(reverse(Number.MAX_VALUE));
console.log(reverse(1534236469));
console.log(reverse(Number.MAX_SAFE_INTEGER / 2));
var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
