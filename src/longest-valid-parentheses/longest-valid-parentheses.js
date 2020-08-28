/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function(s) {
    const stack = [-1];
    let max = 0;

    for (let h = 0; h < s.length; h++) {
        if (s.charAt(h) === "(") {
            stack.push(h);
        } else if (s.charAt(h) === ")") {
            stack.pop();

            if (stack.length === 0) {
                stack.push(h);
            } else {
                let top = stack[stack.length - 1];
                max = Math.max(max, (h - top));
            }
        }
    }

    return max;
};

exports.longestValidParentheses = longestValidParentheses;
