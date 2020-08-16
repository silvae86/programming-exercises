/**
 * @param {number[]} nums
 * @return {number[]}
 */

var getProductArrays = function (nums) {
    const fromLeft = new Array(nums.length)
    const fromRight = new Array(nums.length)

    fromLeft[0] = nums[0]
    fromRight[nums.length-1] = nums[nums.length-1];

    for (let i = 1; i < nums.length ; i++) {
        fromLeft[i] = fromLeft[i-1] * nums[i];
    }

    for (let i = nums.length - 2; i >=0 ; i--) {
        fromRight[i] = fromRight[i+1] * nums[i];
    }

    return {fromLeft, fromRight}
}

var productExceptSelf = function (nums) {
    const products = new Array(nums.length);
    const productsFromLeft = [];
    const productsFromRight = [];

    if (products.length === 0)
        return 0;
    else if (products.length === 1)
        return 0;
    else if (products.length === 2)
        return nums.reverse();
    else {
        const arrays = getProductArrays(nums);
        for (let i = 0; i < nums.length; i++) {
            if(i - 1 < 0 )
            {
                products[i] = 1 * arrays.fromRight[i + 1];
            }
            else if(i + 1 >= nums.length )
            {
                products[i] = arrays.fromLeft[i - 1] * 1;
            }
            else
            {
                products[i] = arrays.fromLeft[i - 1] * arrays.fromRight[i + 1];
            }

        }
    }

    return products;
};

const values = [];
for (let i = 0; i < 40; i++) {
    values.push(Math.floor(Math.random() * 10) + 5) ;
}

const {performance} = require('perf_hooks');
var t0 = performance.now();
console.log(JSON.stringify(productExceptSelf([1,2,3,4,5,6,7])));
console.log(JSON.stringify(productExceptSelf(values)));
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
