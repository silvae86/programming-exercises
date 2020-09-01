// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let kadane = function (A) {
    if (A.length === 0) {
        return {start: 0, end: 0, sum: 0};
    } else {
        let maxOverall = Number.MIN_VALUE;
        let maxFound = Number.MIN_VALUE;
        let start = 0;
        let end = 0;

        for (let i = 1; i < A.length; i++) {
            if (A[i] > maxFound + A[i]) {
                maxFound = A[i];
                start = i;
                end = i;
            } else {
                maxFound += A[i];
                end++;
            }

            if (maxFound > maxOverall) {
                maxOverall = maxFound;
            }
        }

        return {start, end, sum: maxOverall};
    }
};

let sum = function (A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
    }
    return sum;
};

function solution(A) {
    let maximumSumSeq = kadane(A);
    let X = maximumSumSeq.start;
    let Y = maximumSumSeq.start;
    let Z = maximumSumSeq.end;


    let min = A[Y];
    for (let i = maximumSumSeq; i < maximumSumSeq.end; i++) {
        if (min > A[Y]) {
            Y++;
        }
    }

    let result = sum(maximumSumSeq) - A[Y];
    return result;
}


exports.solution = solution;
