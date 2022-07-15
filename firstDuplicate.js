/**
 * Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index
 * TODO
 * @param {number[]} a
 * @returns {number}
 */
function solution(a) {
  const map = {};
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
      map[a[i]] = i;
    }
  }

  if (Object.keys(map).length === 0) {
    return -1;
  }

  return Object.keys(map).reduce(function (a, b) {
    return map[a] < map[b] ? a : b;
  }, 0);
}

console.log(solution([2, 3, 4, 4, 3, 1, 2]));
console.log(solution([2, 3, 4]));
console.log(solution([1, 1, 2, 2, 1]));

