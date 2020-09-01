let sortString = function (string) {
    let charArray = string.split("");

    const sortFn = function (a, b) {
        return a.localeCompare(b);
    };

    charArray = charArray.sort(sortFn);

    return charArray.join("");
};


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var solution = function (strs) {
    return 1;
};

exports.solution = solution;

