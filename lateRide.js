/**
 * Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.
 *
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
  const hour = Math.floor(n / 60);
  const min = n % 60;

  return stringSum(hour) + stringSum(min);
}

/**
 *
 * @param {number} num
 * @returns {number}
 */
function stringSum(num) {
  return String(num)
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

