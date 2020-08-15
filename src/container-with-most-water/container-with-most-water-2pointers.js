/**
 * What i learned from this: to perform a search along two dimensions,
 * try to find a starting point that will maximize one of them (in this case the width of the container)
 *
 * Then, on every step, try to find a step that, when you change the othersearch dimensions,
 * can only increase/decrease the goal value.
 */

const {performance} = require('perf_hooks');

var waterBetween = function (left, right, height) {
    const leftPole = height[left];
    const rightPole = height[right];
    const dist = right - left;
    return dist * Math.min(leftPole, rightPole);
};

var maxArea = function (height) {
    let currentMax = 0;
    let start = 0;
    let end = height.length - 1;

    while (end > start) {
        let area = waterBetween(start, end, height);

        currentMax = Math.max(currentMax, area);

        // we throw away the shorter post, because it always
        // limits our maximum water water volume
        if(height[start] < height[end])
        {
            start++;
        }
        else
        {
            end--;
        }
    }

    return currentMax;
};


var posts = [];


var t0 = performance.now();
console.log(maxArea([2,3,10,5,7,8,9]));
console.log(maxArea([2, 36, 25, 4]));
console.log(maxArea([2, 8, 6, 4]));
console.log(maxArea([2, 8, 6]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
for (let i = 0; i < 1000000; i++) {
    posts.push(Math.floor(Math.random() * 10000000));
}
console.log(maxArea(posts));
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
