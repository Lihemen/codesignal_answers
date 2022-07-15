/**
 * Return a sub array containing all the longest strings with the same length
 * @param {string[]} inputArray
 * @returns {string[]}
 */

function solution(inputArray) {
  const longest = inputArray.reduce((acc, cur) => {
    if (cur.length > acc.length) {
      return cur;
    }
    return acc;
  }, "");
  return inputArray.filter((cur) => cur.length === longest.length);
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));

