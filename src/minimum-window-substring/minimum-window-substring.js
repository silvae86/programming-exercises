/**
 * @param {string} string
 * @return {string}
 */
var getCharsDict = function (string) {
    let dict = {};
    for (let i = 0; i < string.length; i++) {
        if (!dict[string[i]])
            dict[string[i]] = 1;
        else
            dict[string[i]]++;
    }
    return dict;
}

var registerWindow = function (s, tailPos, headPos, smallestWindow) {
    let aWindow = s.substring(tailPos, headPos + 1)

    if ((smallestWindow === "" || aWindow.length < smallestWindow.length)) {
        return aWindow;
    } else
        return smallestWindow;
}

var search = function (s, t) {
    let smallestWindow = "";
    let missingChars = getCharsDict(t);
    let missingCharsCount = Object.keys(missingChars).length;
    let tailPos = 0;
    let headPos = 0;

    while (headPos < s.length || tailPos < s.length) {
        while (headPos < s.length) {
            if (!(s.charAt(headPos) in missingChars))
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
            } else if (s.charAt(tailPos) in missingChars) {
                if (missingCharsCount === 0) {
                    smallestWindow = registerWindow(s, tailPos, headPos, smallestWindow);
                    break;
                }
            } else
                tailPos++;
        }
    }

    return smallestWindow;
}

var minWindow = function (s, t) {
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
        return search(s, t);
};

const s_and_t = [
    {
        s: "ADOBECODEBANCADOBECODEBANC",
        t: "ABC"
    },
    {
        s: "AKBCDBBA",
        t: "BA"
    },
    {
        s: "A",
        t: "A"
    },
    {
        s: "ABC",
        t: "AC"
    },
    {
        s: "ABBC",
        t: "ABC"
    },
    {
        s: "ABBCD",
        t: "AD"
    },
    {
        s: "ABBCD",
        t: "ABC"
    },
    {
        s: "ABACCA",
        t: "AC"
    },
    {
        s: "ABBCD",
        t: "ABCD"
    },
    {
        s: "BBAAC",
        t: "ABA"
    },
    {
        s: "BBAA",
        t: "ABA"
    },
    {
        s: "ABC",
        t: "B"
    },
    {
        s: "ABC",
        t: "C"
    },
    {
        s: "ABC",
        t: "A"
    }
]

const {performance} = require('perf_hooks');
var t0 = performance.now();

for (let i = 0; i < s_and_t.length; i++) {
    console.log(`For ${JSON.stringify(s_and_t[i])}: ${JSON.stringify(minWindow(s_and_t[i].s, s_and_t[i].t))}`);
}

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");



