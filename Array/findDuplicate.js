// How to find duplicate elements in a given array in javascript?

// using 2 for loops
function findDuplicate(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && !result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

const findDuplicateUsingFilter = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);

const arr = [1, 2, 3, 2, 4, 1, 5, 4, 6, 5];
console.log(findDuplicate(arr)); // outputs [2, 1, 5]
console.log(findDuplicateUsingFilter(arr)); // outputs [2, 1, 5]
