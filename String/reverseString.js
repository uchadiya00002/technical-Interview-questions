// Given an array of strings, reverse each word in the sentence?

const reverseWordsInString = (str) => {
  const words = str.split(" ");
  const reverseWords = words.map((word, index) =>
    word.split("").reverse().join("")
  );

  const reverseSentence = reverseWords.join(" ");
  //   console.log(reverseWords.join(" "), "words");
  return reverseSentence;
};
// Given an array of strings, reverse single word string?
const reverseString = (str) => {
  const words = str.split("");
  return words.reverse().join("");
};
// Given an array of strings, reverse multiple word string?
const revereSentence = (str) => {
  const words = str.split(" ");
  return words.reverse().join(" ");
};

console.log(reverseWordsInString("Hello Avinash How are you doing?"));
console.log(reverseString("Avinash"));
console.log(revereSentence("Avinash Uchadiya"));
