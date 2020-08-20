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
        }
        return {aWindow, minimal: this.minimal}
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
                if(this.missingCharsCount < 1) {
                    this.registerWindow(this.tailPos, newHeadPos);
                    if (this.headPos < this.hay.length - 1)
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
        while (
            newTailPos < this.hay.length &&
            newTailPos < this.headPos - 1
            ) {
            const newTailChar = this.hay.charAt(newTailPos);
            if (newTailChar in this.missingChars && this.missingCharsCount <= 0) {
                this.missingChars[newTailChar]++;
                if (this.missingChars[newTailChar] === 1) {
                    this.missingCharsCount++;
                }
                if (this.missingCharsCount <= 0)
                    this.registerWindow(newTailPos, this.headPos);
                newTailPos++;
            } else if (!(newTailChar in this.missingChars)) {
                newTailPos++;
            } else
                break;
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

module.exports.minWindow = function (s, t) {
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





