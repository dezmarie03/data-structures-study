/* 
  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  Output: 1
*/

function getIslandCount(grid, i, j) {
  if (i < 0 || j < 0) { // Out of bounds
    return 0;
  }

  if (i >= grid.length || j >= grid[i].length) { // Out of bounds
    return 0;
  }

  if (grid[i][j] === "0") { // Is a zero
    return 0;
  }

  grid[i][j] = "0"; // Visited; set to zero

  // Recursively check adjacent siblings' values
  getIslandCount(grid, i + 1, j); // above
  getIslandCount(grid, i - 1, j); // below
  getIslandCount(grid, i, j + 1); // right
  getIslandCount(grid, i, j - 1); // left

  return 1; // Return 1 to increment island counter
}

function numIslands(grid) {
  if (grid === null || grid.length === 0) { // Null/empty grid
    return 0;
  }

  let numberOfIslands = 0; // Island counter

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // is this a 1?
      if (grid[i][j] === "1") {
        numberOfIslands += getIslandCount(grid, i, j); // Increment island counter
      }
    }
  }

  return numberOfIslands;
}
