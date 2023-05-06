// How can you add an element to an object?

// In JavaScript, you can add a new property or update an existing property of an object using either dot notation or bracket notation.

const person = {
  name: "John",
  age: 30,
};

// using dot notation
person.job = "Frontend Developer";

// using dot notation
// remember while using bracket notation pass key name as string
person["workExp"] = false;

console.log(person);

// To remove element using dot notation
delete person.job;
// To remove element using bracket notation
delete person["workExp"];

console.log(person);
