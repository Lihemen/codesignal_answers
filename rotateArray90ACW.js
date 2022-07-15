/**
 * Rotate a matrix 90 degrees Anticlockwise
 *
 * @param {number[][]} a
 * @returns {number[][]}
 */
function solution(a) {
  const result = [];

  for (let i = a.length - 1; i >= 0; i--) {
    let row = [];
    for (let j = 0; j < a[i].length; j++) {
      row.push(a[j][i]);
    }
    result.push(row);
  }
  return result;
}

console.log(
  solution([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

