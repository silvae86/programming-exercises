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

const peek = function (stack) {
    return stack[stack.length - 1];
}

const largestAreaUnderHistogram = function (hist) {
    const Sh = [];
    const Sp = [];
    let pos = 0;
    let maxArea = 0;

    for (; pos < hist.length; pos++) {
        let height = hist[pos];

        if (Sh.length === 0 && Sp.length === 0) {
            Sh.push(height);
            Sp.push(pos);
        } else if (height >= peek(Sh)) {
            Sh.push(height);
            Sp.push(pos);
        } else {
            let newSp = null;
            while (peek(Sh) >= height && Sh.length > 0 && Sp.length > 0) {
                let area = peek(Sh) * (pos - peek(Sp));

                if (area > maxArea)
                    maxArea = area;

                newSp = Sp.pop();
                Sh.pop();
            }

            if (newSp !== null) {
                Sp.push(newSp);
            } else {
                Sp.push(pos);
            }

            Sh.push(height);
        }
    }

    while (Sh.length > 0 && Sp.length > 0) {
        let area = peek(Sh) * (pos - peek(Sp));
        if (area > maxArea)
            maxArea = area;
        Sp.pop();
        Sh.pop();
    }

    return maxArea;
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

    return maxArea;
};

exports.maximalRectangle = maximalRectangle;
