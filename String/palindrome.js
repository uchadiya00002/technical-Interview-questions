// Write a function to check if a given string is Palindrome or not?

function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  const isPalindrome = str.split("").reverse().join("");
  console.log(isPalindrome);
  return str == isPalindrome;
}
console.log(palindrome("RaceCar"));
