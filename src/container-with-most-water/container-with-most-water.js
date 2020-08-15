const {performance} = require('perf_hooks');

/**
 * @param {number[]} height
 * @return {number}
 */
var waterBetween = function(left, right, distanceBetween)
{
    return Math.min(left, right) * distanceBetween;
};

var maxArea = function(height) {
    let currentMax = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let distance = j-i;
            if(waterBetween(height[i], height[j], distance) > currentMax)
            {
                currentMax = waterBetween(height[i], height[j], distance);
            }
        }
    }
    return currentMax;
};



var posts = [];

for (let i = 0; i < 100000; i++) {
    posts.push(Math.floor(Math.random() * 1000000));
}

var t0 = performance.now();
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea(posts));
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
