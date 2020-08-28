// Credits to https://www.youtube.com/watch?v=VNbkzsnllsU
// for explaining this in a manner that I could understand.

const peek = function (stack) {
    return stack[stack.length - 1];
};

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {

    let Sp = [];
    let Sh = [];
    let maxArea = 0;

    for (let pos = 0; pos < heights.length; pos++) {
        let height = heights[pos];

        if (Sp.length === 0 && Sh.length === 0) {
            Sp.push(pos);
            Sh.push(height);
        } else {
            let lastSp;
            while (height <= peek(Sh)) {
                const area = peek(Sh) * (pos - peek(Sp));
                if (area > maxArea) {
                    maxArea = area;
                }

                lastSp = Sp.pop();
                Sh.pop();
            }

            Sp.push(lastSp);
            Sh.push(height);
        }
    }

    return maxArea;
};

exports.largestRectangleArea = largestRectangleArea;

