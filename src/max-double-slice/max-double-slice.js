/**
 * NOT WORKING YET.
 * TODO READ https://stackoverflow.com/questions/20660989/max-double-slice-sum
 * TODO PROBLEM https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
 * TODO SOLUTION https://app.codility.com/demo/results/demoVUMMR9-JH3/
 * @param A
 * @returns {number}
 */

function solution(A) {
    let maxSequence = [A[0]];
    let maxSequenceBackward = new Array(A.length);
    maxSequenceBackward[maxSequenceBackward.length - 1] = A[A.length - 1];

    for (let i = 2; i < A.length - 1; i++) {
        maxSequence[i] = Math.max(maxSequence[i - 1] + A[i], A[i]);
    }

    for (let i = A.length - 2; i > 1; i--) {
        maxSequenceBackward[i] = Math.max(maxSequenceBackward[i + 1] + A[i], A[i]);
    }

    let max = 0;
    let sumWithoutY = [];
    for (let i = 1; i < A.length - 2; i++) {
        let currentSumWithoutY = maxSequence[i - 1] + maxSequenceBackward[i + 1];
        sumWithoutY.push(currentSumWithoutY);

        if (currentSumWithoutY > max) {
            max = currentSumWithoutY;
        }
    }

    return max;
}


exports.solution = solution;
