/**
 * Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber
 * @param {number} n
 * @param {number} firstNumber
 * @returns {number}
 */
function solution(n, firstNumber) {
  let opposite = firstNumber + n / 2;
  if (opposite >= n) {
    opposite = firstNumber - n / 2;
  }

  return opposite;
}

