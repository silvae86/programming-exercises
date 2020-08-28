const updateHistogram = function (previousHistogram, newRow) {
    if (!previousHistogram) {
        previousHistogram = newRow;
    } else {
        for (let c = 0; c < newRow.length; c++) {
            if (newRow[i] === 0) {
                previousHistogram[c] = 0;
            } else {
                previousHistogram[c] += newRow[i];
            }
        }
    }

    return previousHistogram;
};

const largestAreaUnderHistogram = function (histogram) {

};

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let maxArea = 0;

    // convert into numbers
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            matrix[r][c] = Number.parseInt(matrix[r][c]);
        }
    }

    let histogram = null;
    for (let i = 0; i < matrix.length; i++) {
        histogram = updateHistogram(histogram, matrix[i]);
        maxArea = Math.max(maxArea, largestAreaUnderHistogram(histogram));
    }
};

exports.maximalRectangle = maximalRectangle;
