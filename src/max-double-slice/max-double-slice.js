// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let kadane = function (A) {
    let start = 0;
    let end = 0;
    let sum = A[0];

    for (let i = 1; i < A.length; i++) {
        if (sum < A[i]) {
            start = i;
            end = i;
            sum = A[i];
        } else {
            sum = A[i] + sum;
            end++;
        }
    }

    return {start, end, sum};
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
