/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0;
    if (heights.length === 0)
        return 0;
    if (heights.length === 1) {
        return heights[0];
    } else if (heights.length === 2) {
        if (!heights[0] || !heights[1]) {
            return Math.max(heights[0], heights[1]);
        } else {
            return Math.min(heights[0], heights[1]) * 2;
        }
    } else {
        for (let t = 0; t < heights.length; t++) {
            let min = heights[t];
            for (let h = t; h < heights.length; h++) {
                if (heights[h] < min) {
                    min = heights[h];
                }

                let newArea = min * (h - t + 1);

                if (newArea > maxArea)
                    maxArea = newArea;
            }
        }

        return maxArea;
    }
};

exports.largestRectangleArea = largestRectangleArea;
