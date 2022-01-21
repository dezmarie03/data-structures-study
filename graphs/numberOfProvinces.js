/* 
  Taking a 2D array of cities, use disjoint sets to check if cities are connected to each other. If cities are connected (directly or indirectly), they represent a province. Return the total number of provinces.

  Cities: 1, 2, 3, 4

  1 = connected
  0 = not connected

  citiesArray = [
    [1, 1, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 1]
  ]
*/

function depthFirstSearch(grid, visited, row) {
  for (let col = 0; col < grid.length; col++) {
    if (grid[row][col] === 1 && visited[col] === 0) {
      visited[col] = 1;
      depthFirstSearch(grid, visited, col);
    }
  }
}

function findCircleNum(isConnected) {
  let n = isConnected.length;

  if (n <= 1) return n; // 1 or less cities

  let visited = Array(n).fill(0); // Placeholder storage array for checked nodes
  let totalProvinces = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      depthFirstSearch(isConnected, visited, i);
      totalProvinces++;
    }
  }

  return totalProvinces;
};
