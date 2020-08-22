/**
 * @param {string} s
 * @return {boolean}
 */
const matcher = {};

const open = [
    "(",
    "[",
    "{"
];

const close = [
    ")",
    "]",
    "}"
];

var isValid = function (s) {

    for (let i = 0; i < open.length; i++) {
        matcher[open[i]] = close[i];
    }


    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in matcher) {
            stack.push(char);
        } else {
            const lastOpened = stack.pop();
            if (matcher[lastOpened] !== char) {
                return false;
            }
        }
    }

    if (stack.length === 0)
        return true;
    else return false;
};

exports.isValid = isValid;
