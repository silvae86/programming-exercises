/**
 * @param {string} s
 * @return {number}
 */

class Shortcut {
    origin;
    destination;

    static shortcutsByOrigin = {};
    static shortcutsByDestination = {};

    constructor(origin) {
        this.origin = origin;
    }

    static getByOrigin(origin) {
        if (Shortcut.shortcutsByOrigin[origin] == null) {
            Shortcut.shortcutsByOrigin[origin] = new Shortcut(origin);
            return Shortcut.shortcutsByOrigin[origin];
        } else {
            return Shortcut.shortcutsByOrigin[origin];
        }
    }

    static getByDestination(destination) {
        return Shortcut.shortcutsByDestination[destination];
    }

    static jumpFrom(origin) {
        if (Shortcut.shortcutsByOrigin[origin]) {
            return Shortcut.shortcutsByOrigin[origin].destination;
        } else {
            return origin;
        }
    }

    static jumpBackFrom(destination) {
        if (Shortcut.shortcutsByDestination[destination]) {
            return Shortcut.shortcutsByDestination[destination].origin;
        } else {
            return destination;
        }
    }

    update(origin, destination) {
        if (Shortcut.shortcutsByDestination[origin]) {
            Shortcut.shortcutsByDestination[origin].destination = destination;
        }
        this.destination = destination;
    }
}

var canStillFindALongerSequence = function (bh, bt, s, t) {
    return ((bh === null && bt === null) && (t < s.length)) ||
        ((bh !== null && bt !== null) && (bh - bt) < (s.length - t))
};

var longestValidParentheses = function(s) {
    if (s.length === 0)
        return 0;
    else if (s.length === 1)
        return 0;
    else {
        let h = 0;
        let t = 0;
        let bh = null;
        let bt = null;
        let stack = [];

        while (canStillFindALongerSequence(bh, bt, s, t)) {
            const hChar = s.charAt(h);
            if (hChar === "(") {
                stack.push(Shortcut.getByOrigin(t));
            } else if (hChar === ")") {
                if(stack.length === 0) {
                    if (Shortcut.getByOrigin(t)) {
                        Shortcut.getByOrigin(t).update(h);
                    }

                    if ((h - t) > (bh - bt)) {
                        bh = h - 1;
                        bt = t;
                        t = h;
                        h++;
                        continue;
                    } else {
                        t = Shortcut.jumpBackFrom(h) + 1;
                        h = t;
                        continue;
                    }
                }
                else
                {
                    const r = stack.pop();
                    if(stack.length === 0)
                    {
                        r.update(h);
                        if ((h - t) > (bh - bt)) {
                            bt = t;
                            bh = h;
                            continue;
                        } else {
                            t = Shortcut.jumpBackFrom(h) + 1;
                            h = t;
                            continue;
                        }
                    }
                }
            }

            if (h === s.length) {
                t++;
                h = t;
                stack = [];
                if (!canStillFindALongerSequence(bh, bt, s, t))
                {
                    break;
                }
                else
                {
                    // aqui entra a cache depois, para saltar a tail
                    // logo para o fim da maior sequencia válida
                    // vista entretanto
                }
            } else {
                h++;
            }
        }

        if (bh !== null && bt !== null) {
            return bh - bt + 1;
        } else
            return 0;
    }
};

exports.longestValidParentheses = longestValidParentheses;
