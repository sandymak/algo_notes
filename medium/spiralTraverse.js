/* 

- Have these Start Row, End Row, Start Col, End Col and treat them like CROSSHAIRS!
- Stop when the startRow <= endRow <-- ie they have me and moved backwards
- there is a SPECIFIC pattern with the SR/ER & SC/EC when the spiral takes place. 

  [
    00   01  02 03 04    RIGHT = [0][1] = [startRow][col] & col >= endCol 
    [1,  2,  3, 4, 5],   DOWN = [1][0] = [row][endCol] & row = startRow +1 && row >= endRow
                         LEFT = [0][-1] = [endRow][col] & col = endCol -1 && col >= startCol
    10   11  12 13 14    UP = [-1][0] = [row][startCol] & row = endRow -1 && row > startRow
    [12, 13, 14,15,6],
    
    20   21  22 23 24
    [11, 10, 9, 8, 7],
  ]

  T: O(n) | S: O(n)
*/

function spiralTraverse(array) {
  let output = [];
  spiralFill(array, 0, array.length -1, 0, array[0].length -1, output);
  return output;
}

function spiralFill (array, startRow, endRow, startCol, endCol, result) {
  if (startRow > endRow || startCol > endCol) return;

  // Traversing "RIGHT" direction in matrix [0][+1]
  for (let col = startCol; col <= endCol; col += 1) {
    result.push(array[startRow][col]);
  }

  // Traversing "DOWN" direction in matrix [+1][0]
  for (let row = startRow + 1; row <= endRow; row += 1) {
    result.push(array[row][endCol])
  }

  // Traversing "LEFT" in matrix [0][-1]
  for (let col = endCol - 1; col >= startCol; col -= 1) {
    // Handle the endge case when there is a single row
    // in the middle of the matrix. In this case, we don't
    // want to double-count te values in the row, which
    // we've already counted in the FIRST for loop above.
    if (startRow === endRow) break;
    result.push(array[endRow][col])
  }

  // Traversing "UP" in matrix [-1][0]
  for (let row = endRow -1; row >= startRow + 1; row -= 1) {
    // Handle the endge case when there is a single column
    // in the middle of the matrix. In this case, we don't
    // want to double-count te values in the column, which
    // we've already counted in the SECOND for loop above.
    if (startCol === endCol) break;
    result.push(array[row][startCol])
  }
  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol -1, result);
}

module.exports = {spiralTraverse};