/**
 * From Leetcode discussion:
 -----------------------------------------------
 For all people wondering how you'd solve this in an interview in 30 mins - this is a fairly easy DP problem.
 If you're confused its because the explanation jumps into the bottom-up DP solution without explaining how it got there.
 You can never figure out a bottom-up DP solution without first figuring out a top down recursive approach.
 If during the recursion you find you're solving the same sub-problem repeatedly ("overlapping sub-problems") -
 that's the first hint that its DP.
 Next, if you find that the optimal answer for the current sub-problem is formed from the
 optimal answer for the overlapping sub-problems, you now have found the optimal sub-structure. Its DP for sure.
 Typically problems involving finding the "longest/shortest/largest/smallest/maximal" of something
 have the optimal-substructure. For example if the shortest distance from A to D is A->B->C->D,
 then it follows that the shortest distance from B to D is B->C->D.
 At first sight, this problem requires a DFS traversal - a dead giveaway that we need recursion.
 And it also wants you to find the largest square. So you'd go to the first 1 and ask it,
 "Hey, what's the largest square of 1s that begins with you?".
 To calculate that it needs to know the largest squares its adjacent cells can begin.
 So, it'll ask the same question to its adjacent cells which will in turn will ask their adjacent cells and so on...
 The cell that began the question will deduce that the largest square that
 begins with it is 1 + the minimum of all the values its adjacent cells returned.
 You'd then ask the same question to every 1 you find in the grid and keep track of the global maximum.
 In doing so, you'll notice that the recursion causes many cells to be asked the same question again and
 again (overlapping sub-problems)- so you'd use memoization.
 The recursive solution takes O(m+n) space. From this, you can now figure out the bottom-up approach.
 */


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let maxSide = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Number.parseInt(matrix[i][j]);
        }
    }

    if (matrix.length > 0) {
        let height = matrix.length;
        let width = matrix[0].length;
        const dp = new Array(height);

        for (let i = 0; i < height; i++) {
            dp[i] = new Array(width).fill(0);
        }

        dp[0][0] = matrix[0][0];

        for (let r = 0; r < height; r++) {
            for (let c = 0; c < width; c++) {
                if (matrix[r][c] === 1) {
                    let upLeft = (r > 0 && c > 0) ? dp[r - 1][c - 1] : 0;
                    let left = (c > 0) ? dp[r][c - 1] : 0;
                    let up = (r > 0) ? dp[r - 1][c] : 0;

                    dp[r][c] = Math.min(upLeft, left, up) + 1;
                    if (dp[r][c] > maxSide)
                        maxSide = dp[r][c];
                } else {
                    dp[r][c] = 0;
                }
            }
        }
        return Math.pow(maxSide, 2);
    } else {
        return 0;
    }
};

exports.maximalSquare = maximalSquare;
