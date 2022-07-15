/**
 *
 * @param {number[][]} a
 * @returns {number[][]}
 */
function solution(a) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    let row = [];
    for (let j = a.length - 1; j >= 0; j--) {
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

