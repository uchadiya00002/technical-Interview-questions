function sortArrayOfStrings(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}

function sortArrayIndesc(arr) {
  return arr.sort((a, b) => b.localeCompare(a));
}

const strArray = ["apple", "banana", "orange", "pear", "kiwi"];
console.log(sortArrayOfStrings(strArray));
console.log(sortArrayIndesc(strArray));

const sortedArray = [];

for (let i = 0; i < strArray.length; i++) {
  const index = sortedArray.findIndex((element) => element > strArray[i]);
  if (index === -1) {
    sortedArray.push(strArray[i]);
  } else {
    sortedArray.splice(index, 0, strArray[i]);
  }
}

console.log(sortedArray); // outputs ["apple", "banana", "kiwi", "orange", "pear"]
