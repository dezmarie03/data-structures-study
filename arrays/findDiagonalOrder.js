/*
  Input:
  mat = [[1,2,3],[4,5,6],[7,8,9]]

  Output:
  [1,2,4,7,5,3,6,8,9]
*/

function findDiagonalOrder(mat) {
  if (mat.length === 0) return []; // empty array

  let rowCount = mat.length; // number of nested arrays
  let colCount = mat[0].length; // number of elements in each array

  let diagonalOrder = []; // storage array for the result
  let row = 0;
  let col = 0;

  for (let i = 0; i < mat.length * mat[0].length; i++) { // single pass over mat
    diagonalOrder[i] = mat[row][col]; // update storage

    if ((row + col) % 2 === 0) { // pivot check
      if (col === colCount - 1) { // move down to next row
        row++;
      } else if (row === 0) { // move right 1 column
        col++;
      } else { // up & right diagonal
        row--;
        col++;
      }
    } else {
      if (row === rowCount - 1) { // move right 1 column
        col++;
      } else if (col === 0) { // move down 1 row
        row++;
      } else { // down & left diagonal
        row++;
        col--;
      }
    }
  }

  return diagonalOrder;
};
