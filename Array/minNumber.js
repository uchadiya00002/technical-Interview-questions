// Find minimum number in array or you can do is sort array and return last element
function minNumber(arr) {
  return Math.min(...arr);
}
const arr = [3, 7, 1, 9, 200, 4, 6];

console.log(minNumber(arr));
