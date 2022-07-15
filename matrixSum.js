/**
 * Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots. CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms represented by 0.
 * @param {number[][]} matrix
 * @returns {number}
 */
function solution(matrix) {
  const room = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0 && !zeroAbove(i, j, matrix)) {
        room.push(matrix[i][j]);
      }
    }
  }
  return room.reduce((acc, cur) => acc + cur, 0);
}

function zeroAbove(i, j, matrix) {
  if (i === 0) {
    return false;
  }
  if (matrix[0][j] === 0) {
    return true;
  }
  if (matrix[i - 1][j] === 0) {
    return true;
  }
  return false;
}

console.log(
  solution([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);

console.log(
  solution([
    [1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10],
  ])
);

