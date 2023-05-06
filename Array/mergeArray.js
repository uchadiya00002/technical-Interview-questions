// Merge arrays into one array

function mergeArray(...arr) {
  let newArray = [];
  newArray = newArray.concat(...arr);
  return newArray;
}

// How can you combine two Arrays into a third Array using spread operator in javascript?

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(mergeArray(arr1, arr2));
console.log(arr3);
