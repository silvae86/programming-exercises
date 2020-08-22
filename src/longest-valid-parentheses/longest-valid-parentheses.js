/**
 * @param {string} s
 * @return {number}
 */

class Jump {
    origin;
    destination;
    character;

    constructor(origin, destination, character) {
        this.origin = origin;
        this.destination = destination;
        this.character = character;
    }
}

var longestValidParentheses = function(s) {
    if (s.length === 0)
        return 0;
    else if (s.length === 1)
        return 0;
    else {
        let h = 0;
        let t = 0;
        let bh = 0;
        let bt = 0;
        const jumps = {};
        const stack = [];

        while (h < s.length && t < s.length) {
            const hChar = s.charAt(h);
            if (hChar === "(") {
                stack.push(new Jump(h, null, hChar));
            } else if (hChar === ")") {

            }
        }
    }
};

exports.longestValidParentheses = longestValidParentheses;
