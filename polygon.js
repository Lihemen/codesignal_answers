/**
 * Given a number n, find the total number of squares placed beside it in steps of 2 from the first n - 1
 * @param {number} n
 * @returns {number}
 */
function polygon(n) {
  if (n === 1) {
    return n;
  }
  let sum = n + n - 1;
  let pivot = sum - 2;

  while (pivot > 0) {
    sum += 2 * pivot;
    pivot -= 2;
  }
  return sum;
}

console.log(polygon(4));

