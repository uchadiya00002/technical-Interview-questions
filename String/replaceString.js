const replaceString = (arr, toReplace, byReplace) =>
  arr.map((item) => item.replace(toReplace, byReplace));

const strArray = ["apple", "banana", "orange", "grape"];

console.log(replaceString(strArray, "orange", "kiwi"));
