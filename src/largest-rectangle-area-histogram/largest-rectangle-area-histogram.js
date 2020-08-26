/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
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
        let l = 0;
        let r = heights.length - 1;

        let heightsWithoutEdges = heights.slice(1, heights.length - 1);
        let minimumWithoutEdges = Math.min.apply(null, heightsWithoutEdges);
        let minOverall = Math.min(heights[0], minimumWithoutEdges, heights[heights.length - 1]);
        let areaOverall = minOverall * heights.length;

        if (heights[l] <= heights[r]) {
            l++;
        } else {
            r--;
        }

        const nextHeights = heights.slice(l, r + 1);
        const maxArea = Math.max(areaOverall, largestRectangleArea(nextHeights));


        return maxArea;
    }
};

exports.largestRectangleArea = largestRectangleArea;
