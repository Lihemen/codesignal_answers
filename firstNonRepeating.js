/**
 * Return the first non repeating character
 * @param {string} s
 * @returns {string}
 */
function solution(s) {
  const lower = s.toLowerCase();
  const array = lower.split("");
  const repeating = array.filter((item, index) => {
    return array.indexOf(item) !== index;
  });
  const nonRepating = array.filter((item) => {
    return !repeating.includes(item);
  });

  const indexes = [];

  for (let i = 0; i < nonRepating.length; i++) {
    indexes.push(array.indexOf(nonRepating[i]));
  }

  if (!indexes.length) return "_";

  return array[Math.min(...indexes)];
}

console.log(solution("abacaba"));

