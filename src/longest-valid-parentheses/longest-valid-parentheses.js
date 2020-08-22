/**
 * @param {string} s
 * @return {number}
 */

class Teleport {
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
        const teleports = {};
        const stack = [];
        return;
        while (h < s.length && t < s.length) {
            if (s.charAt(h) === "(") {

            } else if (s.charAt(h) === ")") {

            }
        }
    }
};

exports.longestValidParentheses = longestValidParentheses;
