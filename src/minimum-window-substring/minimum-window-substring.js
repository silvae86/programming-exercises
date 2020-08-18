/**
 * @param {string} string
 * @return {string}
 */
var getCharsDict = function (string) {
    let charsDict = {};
    for (let i = 0; i < string.length; i++) {
        charsDict[string[i]] = 1;
    }
    return charsDict;
}

var search = function (s, searchDict) {
    let smallestWindow = "";
    let aWindow = "";
    let missingChars = JSON.parse(JSON.stringify(searchDict));
    let missingCharsCount = Object.keys(searchDict).length;
    let tailPos = 0;
    let headPos = 0;

    while (headPos < s.length && tailPos < s.length) {
        while (headPos < s.length) {
            if (searchDict[s.charAt(headPos)])
                missingChars[s.charAt(headPos)]--;
            if (missingChars[s.charAt(headPos)] === 0)
                missingCharsCount--;
            if (missingCharsCount === 0)
                break;
            else
                headPos++;
        }

        while (tailPos < s.length) {
            aWindow = s.substring(tailPos, headPos + 1)
            if (missingCharsCount === 0 && (smallestWindow === "" || aWindow.length < smallestWindow.length))
                smallestWindow = aWindow;

            if (searchDict[s.charAt(tailPos)])
                missingChars[s.charAt(tailPos)]++;
            if (missingChars[s.charAt(tailPos)] === 1)
                missingCharsCount++;

            if (tailPos < headPos)
                tailPos++;
            else if (headPos === s.length - 1)
                tailPos++;
            else
                break;
        }
    }

    return smallestWindow;
}

var minWindow = function (s, t) {
    const searchDict = getCharsDict(t);
    if (s === t) {
        return s;
    }
    return search(s, searchDict);
};


console.log(JSON.stringify(minWindow("ADOBECODEBANC", "ABC")));

// console.log(JSON.stringify(minWindow("AKBCDBBA", "BA")));
// console.log(JSON.stringify(minWindow("A", "A")));
// console.log(JSON.stringify(minWindow("AB", "AB")));
// console.log(JSON.stringify(minWindow("ABC", "AC")));
// console.log(JSON.stringify(minWindow("ABBC", "ABC")));
// console.log(JSON.stringify(minWindow("ABBCD", "AD")));
// console.log(JSON.stringify(minWindow("ABBCD", "ABC")));
// console.log(JSON.stringify(minWindow("ABACCA", "AC")));
// console.log(JSON.stringify(minWindow("ABBCD", "ABCD")));


