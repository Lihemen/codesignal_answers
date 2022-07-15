/**
 * Find Two integer pairs in two arrays that sum up to a given number
 * This solution doesn't pass all the test cases 18/23
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} v
 * @return {boolean}
 */
function solution(a, b, v) {
  for (let i = 0; i < a.length; i++) {
    for (let j = b.length - 1; j >= 0; j--) {
      if (a[i] + b[j] === v) {
        return true;
      }
    }
  }
  return false;
}

console.log(solution([1, 2, 3], [10, 20, 30, 40], 42));
console.log(
  solution(
    [75, 38, 10, 57, 67, 39, 26, 14, 53, 80],
    [3, 19, 28, 92, 92, 47, 98, 30, 71, 21, 3, 60, 12, 15, -45, -56, 12],
    61
  )
);

