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

class Window {
    constructor(hay = "", needle = "", tailPos = 0, headPos = 0) {
        this.missingChars = getCharsDict(needle);
        this.missingCharsCount = Object.keys(this.missingChars).length;
        this.tailPos = tailPos;
        this.headPos = headPos;
        this.minimal = null;
        this.hay = hay;
    }

    registerWindow (tailPos, headPos) {
        let aWindow = this.hay.substring(tailPos, headPos + 1)
        if ((this.minimal === null || aWindow.length < this.minimal.length)) {
            this.minimal = aWindow;
            // console.log(this.minimal);
        }
    }

    finished() {
        return (this.headPos === this.headPos && this.headPos === this.hay.length)
    }

    moveHeadToNextNeedle() {
        let newHeadPos = this.headPos;
        while (newHeadPos < this.hay.length) {
            if (this.hay.charAt(newHeadPos) in this.missingChars) {
                this.missingChars[this.hay.charAt(newHeadPos)]--;
                if (this.missingChars[this.hay.charAt(newHeadPos)] === 0)
                    this.missingCharsCount--;
                if(this.missingCharsCount < 1)
                {
                    this.registerWindow(this.tailPos, newHeadPos);
                    newHeadPos++;
                    break;
                }
                else
                {
                    newHeadPos++;
                }
            }
            else
            {
                newHeadPos++;
            }
        }

        this.headPos = newHeadPos;
        return this.headPos;
    }

    moveTailToNextNeedle() {
        let newTailPos = this.tailPos;
        if(this.headPos === this.headPos && this.headPos === this.hay.length)
            return;
        else
        {
            while (
                newTailPos < this.hay.length &&
                newTailPos < this.headPos - 1
                )
            {
                const newTailChar = this.hay.charAt(newTailPos);
                if (newTailChar in this.missingChars && this.missingCharsCount <= 0) {
                    this.missingChars[newTailChar]++;
                    if (this.missingChars[newTailChar] === 1) {
                        this.missingCharsCount++;
                    }
                    if(this.missingCharsCount <= 0)
                        this.registerWindow(newTailPos, this.headPos);
                    newTailPos++;
                }
                else if (!(newTailChar in this.missingChars)) {
                    newTailPos++;
                }
                else
                    break;
            }
        }

        this.tailPos = newTailPos;
        return newTailPos;
    }
}

var search = function (s, t) {
    let window = new Window(s, t);

    do {
        window.moveHeadToNextNeedle();
        window.moveTailToNextNeedle();
    } while (!window.finished())

    return window.minimal;
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
        s: "ADOBECODEBANC",
        t: "ABC"
    },
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



