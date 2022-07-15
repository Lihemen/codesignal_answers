/**
 * Return the number of common characters between two strings
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
function solution(s1, s2) {
  const map = {};
  for (let i = 0; i < s1.length; i++) {
    if (map[s1[i]]) {
      map[s1[i]]++;
    } else {
      map[s1[i]] = 1;
    }
  }

  let count = 0;
  for (let i = 0; i < s2.length; i++) {
    if (map[s2[i]]) {
      count++;
      map[s2[i]]--;
    }
  }

  return count;
}

/**
 *
 * @param {string} s
 */
function countLetter(s) {}

console.log(solution("aabcc", "adcaa"));
console.log(solution("abca", "xyzbac"));

