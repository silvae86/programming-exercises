/**
 * @param {string} s
 * @return {number}
 */

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
        let firstOpenParenthesis;

        while (canStillFindALongerSequence(bh, bt, s, t)) {
            const hChar = s.charAt(h);
            if (hChar === "(") {
                if (!firstOpenParenthesis) {
                    t = h;
                    firstOpenParenthesis = t;
                }
                stack.push(h);
            } else if (hChar === ")") {
                if(stack.length === 0) {
                    if (!firstOpenParenthesis) {
                        t++;
                        h = t;
                        continue;
                    } else {
                        if ((h - firstOpenParenthesis) > (bh - bt)) {
                            bh = h - 1;
                            bt = firstOpenParenthesis;
                            h++;
                            continue;
                        } else {
                            t = firstOpenParenthesis;
                            h++;
                            continue;
                        }
                    }
                }
                else
                {
                    const r = stack.pop();
                    if(stack.length === 0) {
                        if (firstOpenParenthesis && (h - firstOpenParenthesis) > (bh - bt)) {
                            bt = firstOpenParenthesis;
                            bh = h;
                            continue;
                        } else {
                            t = t++;
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
                firstOpenParenthesis = null;
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
