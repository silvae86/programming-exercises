/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
    let maxWindow = [];
    let startOfWindow = 0;
    let numbersCount = {};
    let currentMax = nums[0];

    if (nums.length === 0) {
        return [];
    } else if (nums.length === 1) {
        return nums;
    } else if (k === 1) {
        return nums;
    } else {
        // init first window in the dictionary
        for (let i = 0; i < k; i++) {
            const number = nums[i];
            if (!numbersCount[number])
                numbersCount[number] = 1;
            else
                numbersCount[number]++;
            if (nums[i] > currentMax)
                currentMax = nums[i];
        }

        maxWindow.push(currentMax);

        while (startOfWindow + k < nums.length) {
            const newNumber = nums[startOfWindow + k];
            const leavingNumber = nums[startOfWindow];

            numbersCount[leavingNumber]--;

            if (!numbersCount[newNumber])
                numbersCount[newNumber] = 1;
            else
                numbersCount[newNumber]++;

            if (leavingNumber === currentMax && numbersCount[leavingNumber] < 1) {
                let currentWindow = nums.slice(startOfWindow, k);
                if (currentWindow.length > 1)
                    currentMax = Math.max.apply(currentWindow);
                else
                    currentMax = currentWindow[0]
            } else if (newNumber > currentMax) {
                currentMax = newNumber;
            }

            maxWindow.push(currentMax);
            startOfWindow++;
        }
    }
    return maxWindow;
};

const {performance} = require('perf_hooks');

var t0 = performance.now();


console.log(JSON.stringify(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)));
console.log(JSON.stringify(maxSlidingWindow([1, 2, 3, 5, 6, 7, 8, 9, 10], 3)));

console.log(JSON.stringify(maxSlidingWindow([2, -3, 2], 2)));
console.log(JSON.stringify(maxSlidingWindow([1, -1, 1], 2)));

console.log(JSON.stringify(maxSlidingWindow([1], 1)));
console.log(JSON.stringify(maxSlidingWindow([1, -1], 1)));
console.log(JSON.stringify(maxSlidingWindow([2, -3, 2], 1)));

// const values = [];
// for (let i = 0; i < Math.pow(10, 6); i++) {
//     values.push((Math.floor(Math.random() * 10) + 5) * -1 * i) ;
// }
// console.log(JSON.stringify(maxSlidingWindow(values,2)));

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");



