/**
 * Calculate how many distinct ways you can climb to the top of the staircase.
 * @param {number} n
 * @returns {number}
 */

// RECURSIVE
// Gets slower from n >= 35
function solution(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return solution(n - 1) + solution(n - 2);
}

// console.log(solution(4));

// Loop. This is the more efficient way to solve this problem.
function climbingStairsLoop(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1;
  let b = 2;
  let c = 0;

  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

console.log(climbingStairsLoop(300));

// MEMOIZATION
// Gets slower from n >= 35
function climbingStairsMemo(n) {
  let m = new Map();
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  for (let i = 1; i <= n; i++) {
    if (!m.has(i)) {
      m.set(i, solution(i - 1) + solution(i - 2));
    }
  }
  return m.get(n);
}

// console.log(climbingStairsMemo(3));

