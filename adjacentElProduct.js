/**
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 * @param {number[]} inputArray
 * @returns {number}
 */
function solution(inputArray) {
  const prods = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    prods.push(inputArray[i] * inputArray[i + 1]);
  }

  return Math.max(...prods);
}

console.log(solution([1, 10, 2, 3, 4, 5]));

