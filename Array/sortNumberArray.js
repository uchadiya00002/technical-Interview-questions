// How to Sort a Number Array in javascript?
function sortNumberArrayInAscendingOrder(arr) {
  return arr.sort((a, b) => a - b);
}
function sortNumberArrayInDsceningOrder(arr) {
  return arr.sort((a, b) => b - a);
}

const numArray = [3, 1, 4, 2, 5];
console.log(sortNumberArrayInAscendingOrder(numArray));
console.log(sortNumberArrayInDsceningOrder(numArray));
