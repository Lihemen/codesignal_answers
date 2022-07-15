/**
 * Given an array of numbers representing the amount in each house, return the maximum amount the robber can get in a given night, provided alternate houses are connected by an alarm system and the robber cannot rob them without tripping the alarm
 * TODO
 * @param {number[]} nums
 * @returns {number}
 */
function solution(nums) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even += nums[i];
    } else {
      odd += nums[i];
    }
  }
  return Math.max(even, odd);
}

console.log(solution([]));
console.log(solution([0, 1, 2, 4, 3, 2, 6]));

