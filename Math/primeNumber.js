function primeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(2));
console.log(primeNumber(4));
console.log(primeNumber(7));
