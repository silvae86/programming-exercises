// https://leetcode.com/problems/rotting-oranges/

const assert = require('assert')

const valid_cell = function (grid, pos) {
  if (pos.y >= grid.length) {
    return null
  }

  if (pos.y >= grid.length) {
    return null
  }

  if (pos.x < 0) {
    return false
  }

  if (pos.y < 0) {
    return false
  }

  return pos
}

const rot_cell = function (grid, pos) {
  if (valid_cell(grid, pos) && grid[pos.y][pos.x] === 1) {
    grid[pos.y][pos.x] = 2
  }

  return grid
}

const spread_from = function (grid, pos) {
  if (valid_cell(grid, pos) && grid[pos.y][pos.y] === 2) {
    const steps = [
      { x: pos.x, y: pos.y - 1 }, // up
      { x: pos.x, y: pos.y + 1 }, // down
      { x: pos.x - 1, y: pos.y }, // left
      { x: pos.x + 1, y: pos.y } // right
    ]

    for (let i = 0; i < steps.length; i++) {
      const adjacent_cell = steps[i]
      grid = rot_cell(grid, adjacent_cell)
    }
  }

  return grid
}

const rot = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid = spread_from(grid, { x: j, y: i })
    }
  }

  console.log(grid)

  return grid
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  const rotten = grid
  let next_rotten
  let minutes = 0

  do {
    next_rotten = rot(rotten)
    minutes++
  } while (JSON.stringify(next_rotten) !== JSON.stringify(rotten))

  return minutes
}

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]))
