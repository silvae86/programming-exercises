/**
 * @param {string} s
 * @return {number}
 */

class Record {
    origin;
    destination;
    character;

    constructor(origin, destination, character) {
        this.origin = origin;
        this.destination = destination;
        this.character = character;
    }
}

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
        const cache = {};
        const stack = [];

        while ( t < s.length || (bh - bt) < (s.length - t) ) {
            const hChar = s.charAt(h);
            if (hChar === "(") {
                let r = cache[hChar];
                if(!r)
                {
                    r = new Record(h, null, hChar);
                    cache[h] = r;
                }
                stack.push(r);
            } else if (hChar === ")") {
                if(stack.length === 0) {
                    if ((bh - bt) < (h - t)) {
                        bh = h - 1;
                        bt = t;
                        continue;
                    } else {
                        t++;
                        h = t;
                        continue;
                    }
                }
                else
                {
                    const r = stack.pop();
                    if(stack.length === 0)
                    {
                        r.destination = h;
                        cache[h] = r;
                        bh = h;
                        bt = t;
                    }
                }
            }

            h++;

            if(h === s.length)            {
                // aqui entra a cache depois, para saltar a tail
                // logo para o fim da maior sequencia válida
                // vista entretanto

                if(!bh && !bt)
                {
                    t++;
                    h = t;
                }
                else
                {
                    break;
                }
            }
        }

        if (bh !== null && bt !== null) {
            return bh - bt + 1;
        } else
            return 0;
    }
};

exports.longestValidParentheses = longestValidParentheses;
