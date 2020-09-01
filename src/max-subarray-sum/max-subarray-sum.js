/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 0)
        return 0;

    let totalMax = nums[0];
    let currentMax = nums[0];
    let start = 0;
    let end = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i] + currentMax) {
            currentMax = nums[i];
            start = i;
            end = i;
        } else {
            currentMax += nums[i];
            end++;
        }

        totalMax = Math.max(totalMax, currentMax);
    }

    return totalMax;
};

// var maxSubArray = function(nums) {
//     if(nums.length > 0)
//     {
//         let maxCurrent = nums[0];
//         let maxGlobal = nums[0];
//
//         for (let i = 1; i < nums.length ; i++) {
//             maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
//             if (maxCurrent > maxGlobal) {
//                 maxGlobal = maxCurrent;
//             }
//         }
//
//         return maxGlobal;
//     }
//     else
//     {
//         return 0;
//     }
// };

exports.maxSubArray = maxSubArray;
