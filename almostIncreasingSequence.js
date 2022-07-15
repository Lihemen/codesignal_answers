// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
/**
 *
 * @param {number[]} sequence
 * @returns {boolean}
 *
 */
function solution(sequence) {
  let removed = 0;
  let maximum = 0;
  let previous_maximum = (maximum = -Infinity);

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] > maximum) {
      previous_maximum = maximum;
      maximum = sequence[i];
    } else if (sequence[i] > previous_maximum) {
      removed++;
      maximum = sequence[i];
    } else {
      removed++;
    }

    if (removed > 1) {
      return false;
    }
  }

  return true;
}

/**
 *
 * @param {number[]} arr
 * @returns {boolean}
 */
function countGreaterThanZero(arr) {}

console.log(solution([1, 2, 3]));
console.log(solution([10, 1, 2, 3, 4, 5]));
console.log(solution([3, 6, 5, 8, 10, 20, 15]));
// console.log(solution([1, 3, 2, 1]));

console.log(solution([1, 3, 2, 5]));
console.log(solution([1, 3, 2, 1]));
console.log(solution([1, 2, 2, 1]));
console.log(solution([1, 2, 1, 2]));

