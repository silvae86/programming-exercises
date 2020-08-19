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

class Window {
    constructor(hay = "", needle = "", tailPos = 0, headPos = 0) {
        this.missingChars = getCharsDict(needle);
        this.missingCharsCount = needle.length;
        this.tailPos = tailPos;
        this.headPos = headPos;
        this.minimal = null;
        this.hay = hay;
        this.needle = needle;
        this.hasAll = false;
    }

    update(newTailPos, newHeadPos) {
        if (this.tailPos < newTailPos) {
            const tailChar = this.hay.charAt(this.tailPos);
            if (tailChar in this.missingChars) {
                this.missingChars[tailChar]++;
                if (this.missingChars[tailChar] === 1) {
                    this.hasAll = false;
                }
            }
            this.tailPos = newTailPos;
        }

        if (this.headPos < newHeadPos) {
            const headChar = this.hay.charAt(this.headPos);
            if (headChar in this.missingChars) {
                this.missingChars[headChar]--;
                if (this.missingChars[headChar] === 0) {
                    this.hasAll = true;
                    this.minimal = registerWindow(hay, this.tailPos, this.headPos, this.minimal);
                }
            }
            this.headPos = newHeadPos;
        } else if (this.headPos === newHeadPos) {
            this.headPos++;
        }
    }

    finished() {
        return ((this.headPos === this.hay - 1) && (this.tailpos === this.hay - 1))
    }

    getNextHeadInNeedle() {
        let newHead = this.headPos;
        while (!(this.hay.charAt(this.headPos) in this.missingChars) && newHead < this.hay.length - 1) {
            newHead++;
        }
        return newHead;
    }

    getNextTailInNeedle() {
        let newTail = this.headPos;
        while (!(this.hay.charAt(this.tailPos) in this.missingChars) && newTail < this.hay.length - 1) {
            newTail++;
        }
        return newTail;
    }
}

var search = function (s, t) {
    let window = new Window(s, t);

    while (!window.finished()) {
        let nextHead = window.getNextHeadInNeedle();
        let nextTail = window.getNextTailInNeedle();
        window.update(nextHead, nextTail);
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



