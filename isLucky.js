/**
 * Returns true if the number is lucky, false otherwise. A number is lucky if the sum of the first half and last half is equal
 * @param {number} n
 */
function solution(n) {
  const first = String(n).slice(0, Math.floor(String(n).length / 2));
  const second = String(n).slice(Math.floor(String(n).length / 2));
  return (
    first.split("").reduce((acc, curr) => acc + Number(curr), 0) ===
    second.split("").reduce((acc, curr) => acc + Number(curr), 0)
  );
}

console.log(solution(12301));

