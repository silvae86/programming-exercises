function expand(matrix, r, c, sideFound) {
    let maxHeight = matrix.length - 1;
    let maxWidth = matrix[0].length - 1;

    if(r+sideFound <= maxHeight && c+sideFound <= maxWidth)
    {
        for (let i = c; i <= c+sideFound; i++) {
            if(!matrix[r+sideFound][i])
            {
                return sideFound;
            }
        }

        for (let i = r; i <= r+sideFound; i++) {
            if(!matrix[i][c+sideFound])
            {
                return sideFound;
            }
        }

        return expand(matrix, r, c, sideFound + 1);
    }

    else
    {
        return sideFound;
    }
}


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if(matrix.length > 0)
    {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                matrix[r][c] = Number.parseInt(matrix[r][c]);
            }
        }

        let maxSideFound = 0;
        if(matrix.length > 0)
        {
            for (let r = 0; r < matrix.length; r++) {
                for (let c = 0; c < matrix[r].length; c++) {
                    if(matrix[r][c] === 1)
                    {
                        let sideFound = expand(matrix, r,c, 1);
                        if(sideFound > maxSideFound)
                            maxSideFound = sideFound;
                    }
                }
            }
        }
        else
        {
            return 0;
        }
        return Math.pow(maxSideFound,2);
    }
    else
    {
        return 0;
    }
};

exports.maximalSquare = maximalSquare;
