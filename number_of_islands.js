// https://leetcode.com/problems/number-of-islands/

var visited = [];
var initVisited = function(grid)
{
    visited = new Array(grid.length);
    for(var i = 0; i < grid.length; i++)
    {
        var arrayOfZeros = new Array(grid[i].length);
        for(var j = 0; j < grid[i].length; j++)
        {
            arrayOfZeros[j] = 0;
        }

        visited[i] = arrayOfZeros;
    }
}

var markVisited = function (pos)
{
    visited[pos.y][pos.x] = 1;
}
var validatepos = function(grid, pos)
{
    if(pos.y < 0)
        return null;

    if(pos.y >= grid.length)
        return null;

    if(pos.x >= grid[pos.y].length)
        return null;

    if(pos.x < 0)
        return null;

    return pos;
}

var expand = function(grid, pos)
{
    // uncomment to see expansion steps
    // console.log(`Expanding y= ${pos.y}, x= ${pos.x}.`);
    var steps = [
        validatepos(grid, {y: pos.y - 1, x: pos.x}), // up
        validatepos(grid, {y: pos.y + 1, x: pos.x}), // down
        validatepos(grid, {y: pos.y, x: pos.x - 1}), // left
        validatepos(grid, {y: pos.y, x: pos.x + 1}), // right
    ];

    if(!visited[pos.y][pos.x])
    {
        markVisited(pos);
        if (grid[pos.y][pos.x] === "1")
        {
            for(var i = 0; i < steps.length; i++)
            {
                const step = steps[i];
                if(steps[i] !== null && !visited[step.y][step.x] && grid[step.y][step.x] === "1")
                    expand(grid, steps[i]);
            }
            // if we started from "solid ground", it is a new island
            return 1;
        }
        else
            // we are just visiting something previously unvisited, but we started on water and did not expand.
            // do not count as an island
            return 0;
    }
    else
    {
        return 0;
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var n_islands = 0;
    initVisited(grid);

    for(var i = 0; i < grid.length; i++)
    {
        for(var j = 0; j < grid[i].length; j++)
        {
            let found_island = expand(grid, {y: i, x: j});
            n_islands += found_island;
            // uncomment to see evolution of island detection
            // console.log(visited);
            // console.log("N islands: " + n_islands);
        }
    }

    return n_islands;
};

// 1 0 1 1 0
// 1 1 0 1 0
// 1 1 0 0 0
// 0 0 0 0 0
console.log(numIslands([["1","0","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));

// 1 1 1 1 0
// 1 1 0 1 0
// 1 1 0 0 0
// 0 0 0 0 0
console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));

// 1 1 0 0 0
// 1 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 1
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
