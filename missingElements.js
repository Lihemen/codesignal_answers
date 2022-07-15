/**
 * Given an array, return the number of missing elements within the range of smallest to the largest element
 * @param {number[]} inputArray
 * @returns {number}
 */
function solution(inputArray) {
  const smallest = Math.min(...inputArray);
  const largest = Math.max(...inputArray);

  const allElements = Array.from(
    { length: largest - smallest + 1 },
    (_, i) => i + smallest
  );

  const missingElements = allElements.filter(
    (element) => !inputArray.includes(element)
  );

  return missingElements.length;
}

console.log(solution([1, 2, 3, 5]));

