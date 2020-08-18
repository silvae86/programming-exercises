/**
 * @param {string} string
 * @return {string}
 */
var getCharsDict = function (string) {
    let charsDict = {};
    for (let i = 0; i < string.length; i++) {
        if (!charsDict[string[i]])
            charsDict[string[i]] = 1;
        else
            charsDict[string[i]]++;
    }
    return charsDict;
}

var registerWindow = function (s, tailPos, headPos, smallestWindow) {
    let aWindow = s.substring(tailPos, headPos + 1)

    if ((smallestWindow === "" || aWindow.length < smallestWindow.length)) {
        return aWindow;
    } else
        return smallestWindow;
}

var search = function (s, searchDict) {
    let smallestWindow = "";
    let missingChars = JSON.parse(JSON.stringify(searchDict));
    let missingCharsCount = Object.keys(searchDict).length;
    let tailPos = 0;
    let headPos = 0;

    while (headPos < s.length || tailPos < s.length) {
        while (headPos < s.length) {
            if (!searchDict[s.charAt(headPos)])
                headPos++;
            else {
                missingChars[s.charAt(headPos)]--;
                if (missingChars[s.charAt(headPos)] === 0)
                    missingCharsCount--;
                if (missingCharsCount === 0) {
                    smallestWindow = registerWindow(s, tailPos, headPos, smallestWindow);
                    headPos++;
                    break;
                } else
                    headPos++;
            }
        }

        while (tailPos < s.length) {
            if (tailPos === headPos) {
                break;
            } else if (searchDict[s.charAt(tailPos)]) {
                if (missingCharsCount === 0) {
                    smallestWindow = registerWindow(s, tailPos, headPos, smallestWindow);
                    missingChars[s.charAt(tailPos)]++;
                    if (missingChars[s.charAt(tailPos)] === 1) {
                        missingCharsCount++;
                    }
                    tailPos++;
                } else if (headPos === s.length)
                    tailPos++;
                else
                    break;
            } else {
                tailPos++;
            }
        }
    }

    return smallestWindow;
}

var minWindow = function (s, t) {
    const searchDict = getCharsDict(t);
    if (s === t) {
        return s;
    } else if (t.length > s.length)
        return "";
    else if (t.length === 1)
        if (s.indexOf(t[0]) > -1)
            return t;
        else
            return "";
    else
        return search(s, searchDict);
};
