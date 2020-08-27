let convertPosition = function (r, c, direction) {
    switch (direction) {
        case("right"):
            return {r: r, c: c + 1};
        case("down"):
            return {r: r + 1, c: c};
    }
};

let nextValidPositions = function (matrix, r, c, directions) {
    const validPositions = [];
    for (let i = 0; i < Object.keys(directions).length; i++) {
        let key = Object.keys(directions)[i];
        if (directions[key]) {
            const newValidPosition = convertPosition(r, c, key);
            validPositions.push(newValidPosition);
        }
    }
    return validPositions;
};


let getMaxRectangle = function (matrix, r, c, directions) {
    console.log(`Checking (r: ${r}, c: ${c})`);
    let currentRectArea = 1;

    if (!directions) {
        directions = {};
        directions.right = (c < matrix[r].length - 1) && matrix[r][c + 1] === "1";
        directions.down = (r < matrix.length - 1) && matrix[r + 1][c] === "1";
    } else {
        directions.right = directions.right && (c < matrix[r].length - 1) && matrix[r][c + 1] === "1";
        directions.down = directions.down && (r < matrix.length - 1) && matrix[r + 1][c] === "1";
    }

    let nextViablePositions = nextValidPositions(matrix, r, c, directions);

    if (nextViablePositions.length === 0) {
        return 1;
    } else {
        for (let i = 0; i < nextViablePositions.length; i++) {
            let nextPos = nextViablePositions[i];
            currentRectArea = currentRectArea + getMaxRectangle(matrix, nextPos.r, nextPos.c, directions)
        }
    }

    return currentRectArea;

};


/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let maxArea = 0;
    for (let r = 0; r < matrix.length; r++) {
        let row = matrix[r];
        for (let c = 0; c < row.length; c++) {
            if (matrix[r][c] === "1") {
                let areaOfNextRectangle = getMaxRectangle(matrix, r, c);
                if (maxArea < areaOfNextRectangle) {
                    maxArea = areaOfNextRectangle;
                }
            }
        }
    }

    return maxArea;
};

exports.maximalRectangle = maximalRectangle;
