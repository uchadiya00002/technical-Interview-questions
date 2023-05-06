function findOccurence(str, word) {
  const result = str.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] == word) {
      count++;
    }
  }
  return count;
}
console.log(findOccurence("Avinash", "a"));
