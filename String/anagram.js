function anagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");

  if (str1.length !== str1.length) {
    return false;
  }
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(anagram("silent", "listen")); // Output: true
console.log(anagram("anagram", "nag a ram")); // Output: true
console.log(anagram("hello", "elloh")); // Output: false
