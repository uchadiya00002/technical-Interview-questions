function averageNumber(arr) {
  const sum = arr.reduce((acc, current) => acc + current);
  return sum / arr.length;
}
console.log(averageNumber([1, 2, 3]));
