function checkForValue(arr, value) {
  return arr.filter((item, index) => item == value);
}

const checkInAnotherArr = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};
const arr = [1, 2, 3, 4, 6, 5];
const arr2 = [6, 7, 8, 3, 9];

console.log(checkForValue(arr, 3));
console.log(checkInAnotherArr(arr, arr2));
