// Find unique value in array of javascript?

// const arr = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 1, name: "Jack" },
//   { id: 3, name: "Jill" },
//   { id: 2, name: "James" },
// ];

const arr = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const uniqueArr = arr.reduce((acc, current) => {
  const x = acc.find((item) => item === current);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);

const fineUniqueUsingSet = (arr) => [...new Set(arr)];

console.log(uniqueArr.sort((a, b) => b - a));
console.log(fineUniqueUsingSet(arr));
