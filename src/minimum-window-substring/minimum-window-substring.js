/**
 * @param {string} string
 * @return {string}
 */
const getCharsDict = function (string) {
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
        this.needle = needle;
        this.missingChars = getCharsDict(needle);
        this.missingCharsCount = Object.keys(this.missingChars).length;
        this.tailPos = tailPos;
        this.headPos = headPos;
        this.minimal = null;
        this.hay = hay;
    }

    registerMinimal() {
        let aWindow = this.getCurrent();
        let windowChanged = false;
        if ((this.minimal === null || aWindow.length <= this.minimal.length)) {
            windowChanged = true;
            this.minimal = aWindow;
        }
        return this.minimal;
    }

    isFinished() {
        return (
            (this.headPos === this.headPos && this.headPos === this.hay.length)
        )
    }

    oneLessMissing(position) {
        const char = this.hay.charAt(position);
        if (char in this.missingChars) {
            this.missingChars[char]--;
            if (this.missingChars[char] === 0)
                this.missingCharsCount--;
        }
    }

    oneMoreMissing(position) {
        const char = this.hay.charAt(position);
        if (char in this.missingChars) {
            this.missingChars[char]++;
            if (this.missingChars[char] === 1)
                this.missingCharsCount++;
        }
    }

    checkHeadSaveIfComplete() {
        let isComplete = false;
        if (this.charIsRequired(this.headPos)) {
            this.oneLessMissing(this.headPos);
            if (this.missingCharsCount < 1) {
                this.becameComplete = true;
                this.registerMinimal();
            }
        }
        if (!this.becameComplete)
            this.moveHeadForward();
        return (this.missingCharsCount < 1 || this.becameComplete);
    }

    checkTailSaveIfComplete() {
        if (this.charIsRequired(this.tailPos)) {
            if (this.missingCharsCount < 1) {
                this.registerMinimal();
                this.oneMoreMissing(this.tailPos);
                this.tailPos++;
            }
        } else {
            this.tailPos++;
            if (this.missingCharsCount < 1) {
                this.registerMinimal();
            }
        }
        return (this.missingCharsCount < 1);
    }

    charIsRequired(position) {
        return this.hay.charAt(position) in this.missingChars;
    }

    moveHeadForward() {
        this.headPos++;
        return this.headPos;
    }

    moveHeadBackward() {
        this.headPos--;
        return this.headPos;
    }

    getCurrent() {
        return this.hay.substring(this.tailPos, (this.headPos + 1))
    }
}

var search = function (s, t) {
    let window = new Window(s, t);

    do {
        while (window.headPos < window.hay.length) {
            if (window.checkHeadSaveIfComplete()) {
                break;
            }
        }

        while (window.tailPos < window.hay.length) {
            if (!window.checkTailSaveIfComplete()) {
                break;
            }
        }

        if (window.becameComplete)
            window.moveHeadForward();

    } while (!window.isFinished())

    return window.minimal;
}

const minWindow = function (s, t) {
    if (s === t) {
        return s;
    } else if (t.length > s.length)
        return "";
    else if (t.length === 1)
        if (s.indexOf(t[0]) > -1)
            return t;
        else
            return "";
    else {
        const result = search(s, t);
        if (result === null)
            return "";
        else
            return result;
    }
};


module.exports.minWindow = minWindow;

