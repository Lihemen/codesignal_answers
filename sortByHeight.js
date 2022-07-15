/**
 * TODO
 * rearrange the people by their heights in a non-descending order without moving the trees. Trees are represented by -1
 * @param {number[]} a
 * @returns {number[]}
 */
function solution(a) {
  const arr = a
    .join(",")
    .split(-1)
    .sort((a, b) => b - a);

  return arr.join("-1");
}

function swap(arr, a, b) {
  // let temp = arr[a];
  // arr[a] = arr[b]
  // arr[b] = temp
  [arr[a], arr[b]] = [arr[b], arr[a]];
}
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));

