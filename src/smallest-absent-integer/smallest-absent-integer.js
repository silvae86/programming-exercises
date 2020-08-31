// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {

    const sortFn = function (a, b) {
        return a - b;
    };

    let sorted = A.sort(sortFn);

    // remove negative numbers
    let i = 0;
    for (i = 0; i < sorted.length && sorted[i] <= 0; i++) {
    }

    sorted = sorted.slice(i);

    if (sorted.length === 0) {
        return 1;
    } else {
        let last = sorted[0];
        if (last > 1)
            return 1;
        else {
            let unseen = 0;
            for (let i = 1; i < sorted.length; i++) {
                const current = sorted[i];
                if (current - last > 1) {
                    unseen = last + 1;
                    break;
                }
                last = current;
            }

            if (!unseen) {
                unseen = Math.max(sorted[sorted.length - 1] + 1, 1);
            }

            return unseen;
        }
    }
}

exports.solution = solution;

