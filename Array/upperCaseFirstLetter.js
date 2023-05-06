const upperCaseFirstLetter = (arr) =>
  arr.map((item, index) => item.charAt(0).toUpperCase() + item.slice(1));

const arr = ["avinash", "kushagra", "chirag", "yash"];

console.log(upperCaseFirstLetter(arr));
