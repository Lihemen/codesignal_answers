/**
 * TODO
 * Given a matrix representing a sudoku board of range 1 - 9 inclusive, return true if it is valid sudoku else return false. A grid is valid sudoku if
 * 1. A number appears once per row
 * 2. A number appears once per column
 * 3. A number appears once per 3x3 subgrid
 * @param {number[][]} grid
 * @returns {boolean}
 */

function solution(grid) {
  for (let i = 0; i < grid.length; i++) {
    if (!solve(grid[i])) {
      return false;
    }
    let col = [];
    for (let j = grid.length - 1; j >= 0; j--) {
      col.push(grid[j][i]);
    }
    if (!solve(col)) {
      return false;
    }
  }
  return true;
}

function solve(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (
      /[1-9]/.test(numbers[i]) &&
      numbers.indexOf(numbers[i]) !== numbers.lastIndexOf(numbers[i])
    ) {
      return false;
    }
  }
  return true;
}

// Returm true if a number falls within the 3x3 subgrid
function subgrid(grid, i, j) {
  const row = i - (i % 3);
  const col = j - (j % 3);
  const subgrid = [];
  for (let k = 0; k < 3; k++) {
    for (let l = 0; l < 3; l++) {
      subgrid.push(grid[row + k], grid[col + l]);
    }
  }
  return subgrid;
}

console.log(
  solution([
    [1, 2, 3, 4, 5],
    [3, 1, 2, 4, 1],
    [2, 3, 1, 5, 1],
  ])
);

console.log(
  solution([
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."],
  ])
);
console.log(
  solution([
    [".", ".", ".", ".", "2", ".", ".", "9", "."],
    [".", ".", ".", ".", "6", ".", ".", ".", "."],
    ["7", "1", ".", ".", "7", "5", ".", ".", "."],
    [".", "7", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "8", "3", ".", ".", "."],
    [".", ".", "8", ".", ".", "7", ".", "6", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", "2", ".", ".", "3", ".", ".", ".", "."],
  ])
);

console.log(
  solution([
    [".", "4", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "1", ".", ".", "7", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "3", ".", ".", ".", "6", "."],
    [".", ".", ".", ".", ".", "6", ".", "9", "."],
    [".", ".", ".", ".", "1", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "8", ".", ".", ".", ".", "."],
  ])
);

console.log(
  subgrid(
    [
      [".", "4", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", "4", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "1", ".", ".", "7", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "3", ".", ".", ".", "6", "."],
      [".", ".", ".", ".", ".", "6", ".", "9", "."],
      [".", ".", ".", ".", "1", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "2", ".", "."],
      [".", ".", ".", "8", ".", ".", ".", ".", "."],
    ],
    6,
    4
  )
);

