/**
 * Return true if an array contains duplicate
 * @param {number[]}a
 * @returns {boolean}
 */

function solution(a) {
  return a.length !== new Set(a).size;
}

console.log(solution([1, 2, 3, 1]));
console.log(solution([1, 2, 3, 4, 9, 29]));
