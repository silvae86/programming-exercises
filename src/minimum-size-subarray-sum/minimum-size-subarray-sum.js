/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (s, nums) {
    let h = 0;
    let t = 0;
    let bh = null;
    let bt = null;
    let sum = nums[h];

    while (t < nums.length && h < nums.length) {
        if (sum >= s) {
            if ((bh - bt) > (h - t) || (bh === null && bt === null)) {
                bh = h;
                bt = t;
            }
            sum -= nums[t];
            t++;
        } else {
            h++;
            sum += nums[h];
        }
    }
    if (bt !== null && bh !== null)
        return nums.slice(bt, bh + 1).length;
    else
        return 0;
};

exports.minSubArrayLen = minSubArrayLen;
