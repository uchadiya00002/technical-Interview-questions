// How do you sort and reverse an array without changing the original array?

const reverseDuplicateArr = (arr) => {
  const dupArr = arr;
  dupArr.sort().reverse();
  return dupArr;
};
const originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(reverseDuplicateArr(originalArray));
