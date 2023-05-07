const univerSalObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

const univerSalArr = [1, 2, 3, 4, 5];

const univerSalStr = "I am batman";
// // How to detect a mobile device with JavaScript?

// function isMobileDevice() {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   );
// }

// // What is the easiest way to resize an Array?

// // to increase
// const arr1 = [1, 2, 3];
// arr1.length = 5;
// // console.log(arr); // Output: [1, 2, 3, undefined, undefined]

// // to decrease
// const arr2 = [1, 2, 3, 4, 5];
// arr2.length = 3;
// // console.log(arr); // Output: [1, 2, 3]

// // 3 Verify that a function argument is a Number or not?

// function isNumber(n) {
//   return typeof n === "number";
// }

// // console.log(isNumber(5));

// // 4 What is the easiest way to convert an array to an object?

// const arr3 = [
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ];
// const myObj = Object.fromEntries(arr3);
// // console.log(myObj);

// // 5 How to create a specific number of copies for a string?

// const str1 = "Avii";
// const numOfCopies = 5;
// const result = str1.repeat(numOfCopies);
// // console.log(result);

// // 6 How do you swap variables in destructuring assignment?

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// // console.log(a); // output: 2
// // console.log(b); // output: 1

// // 7 What are default values in destructuring assignment?

// const person = { name: "Bon clay", age: 25 };
// const { name, age, gender = "unknown" } = person;
// // console.log(name);
// // console.log(age);
// // console.log(gender); // output: unknown

// // 8 How do you find the Vowels?

// const str2 = "Avinash Uchadiya";
// const vowels = str2.match(/[aeiou]/gi);
// // console.log(vowels);

// // 9 How do you prevent an object from extending?

// const myObj3 = { a: 1 };
// Object.preventExtensions(myObj3);

// myObj3.b = 2;
// // console.log(myObj3);

// // 10 How do you check whether an object can be extendable or not?

// const myObj4 = { a: 1 };
// Object.preventExtensions(myObj4);
// const resultOfObject = Object.isExtensible(myObj4);

// // console.log(resultOfObject);

// // 11 How can you call the constructor of a parent class?

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
// }

// const myDog = new Dog("Akamaru", "Golden Retriver");
// // console.log(myDog);

// // 12 How do you define property on an Object constructor?

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Object.defineProperty(Person, "species", {
//   value: "human",
//   writable: false,
//   enumerable: true,
//   configurable: true,
// });

// //   console.log(Person.species); // output: "human"

// // 13 How do you encode an URL?

// const url = "https://example.com/search?q=hello world";
// const encodedUrl = encodeURIComponent(url);
// // console.log(encodedUrl);

// // 14 How can you get the list of keys of any object?

// const obj5 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const keysOfObject = Object.keys(obj5);
// // console.log(keysOfObject);

// // 15 What is the main difference between Object.values and Object.entries method?
// const human = { name: "John", age: 30, city: "New York" };

// // Object.values will only return array of values like [1,2,3]
// const values = Object.values(human);
// // console.log(values); // Output: ['John', 30, 'New York']

// // bu Object.entries will return array of arrays containing each array key and there corresponding value [["a",1],["b",2],["c",3]]
// const entries = Object.entries(person);
// // console.log(entries); // Output: [['name', 'John'], ['age', 30], ['city', 'New York']]

// // 16 How do you get an enumerable key and value pairs?

// const univerSalObj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
// };

// for (let key in univerSalObj) {
//   //   console.log(`${key} : ${univerSalObj[key]}`);
// }

// // 17 How do you determine if an object is sealed or not?

// const myObj6 = { a: 1, b: 2 };

// // console.log(Object.isSealed(myObj6)); // Output: false

// Object.seal(myObj);

// // console.log(Object.isSealed(myObj)); // Output: true

// // 18  How do you copy properties from one object to another object?

// let dummyObj1 = { a: 1, b: 2 };
// let dummyObj2 = { c: 3, d: 4 };

// one way
// [dummyObj2, dummyObj1] = [dummyObj1, dummyObj2];
// by using object.assign method

// const newObj = Object.assign({}, dummyObj1, dummyObj2);
// console.log(newObj); // {a: 1, b: 2, c: 3, d: 4}

// by using speared operators
// const newObj2 = { ...obj1, ...obj2 };
// console.log(newObj2); // {a: 1, b: 2, c: 3, d: 4}
// console.log(dummyObj1);
// console.log(dummyObj2);

// 19 How do you determine two values are the same or not using an object?
// const obj7 = { value: 5 };
// const obj8 = { value: 5 };
// const obj9 = { value: 10 };

// if (obj7.value === obj8.value) return console.log("both are equal");
// else console.log("not Equal");

// 20 How do you determine whether an object is frozen or not?
const result = Object.isFrozen(univerSalObj);
// console.log(result);

// 21 How to write an Object and implement multiple function chaining?

// const Person = function () {
//   this.name = "";
//   this.age = 0;
//   this.setAge = function (age) {
//     this.age = age;
//     return this;
//   };
//   this.setName = function (name) {
//     this.name = name;
//     return this;
//   };
//   this.introduce = function () {
//     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//     return this;
//   };
// };

// // Usage example:
// const person = new Person();
// person.setName("Bruce").setAge(30).introduce();

// 22 How do you search a string for a pattern?
// let str = "man the myth the legend";

// // let word = "the";
// const findMatch = str.match(/the/gi);
// const searchMatch = str.search(/the/);
// console.log(findMatch);
// console.log(searchMatch);

// 23 Implement a method which generates random numbers between 41 and 67 and sort them reverse?

// const generateRandomNums = (max, min, count) => {
//   const numbers = [];
//   for (let i = 0; i < count; i++) {
//     const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
//     numbers.push(randomNum);
//   }
//   return numbers;
// };

// console.log(generateRandomNums(10, 1, 10));

// 24 generate n numbers of random numbers
// function generateRandomNumbers(n) {
//   const randomNumbers = [];
//   for (let i = 0; i < n; i++) {
//     randomNumbers.push(Math.floor(Math.random() * 100));
//   }
//   return randomNumbers;
// }

// // Example usage:
// console.log(generateRandomNumbers(5)); // Outputs an array of 5 random numbers

// 25 For a given function, count the number of parameters expected by a function?

// to count the given parameters we can check function.length to see how many parameters are expected in function

// function example(arr1, arr2, arr3) {
//   console.log(arr1);
// }
// console.log(example.length);

// 26 How do you assign default values to variables?

// let variable = "defaultvalue";

// function getName(name = "Bruce Wayne") {
//   return console.log(`Hello I am ${name}`);
// }

// console.log(getName());
// console.log(getName("Avinash Uchadiya"));

// 27 How do you remove whitespaces from a given string?

// let trimmedStr = univerSalStr.replace(/\s+/g, "");
// console.log(trimmedStr);

// 28 How do you check if a string starts with another string?

// let checkstarting = univerSalStr.startsWith("I");
// console.log(checkstarting);

// 29 How do you compare time for two dates?

// const date1 = new Date("2022-05-11T10:00:00Z");
// const date2 = new Date("2022-05-11T11:30:00Z");

// if (date1.getTime() < date2.getTime()) {
//   return console.log(`date1 is earlier than date2`);
// } else if (date1.getTime() > date2.getTime()) {
//   return console.log(`date2 is earlier than date1`);
// } else return console.log(`both are equals`);

//  30 How to display the current date in javascript?

// const currentDate = new Date();
// console.log(currentDate);

// 31 How to create and trigger events in javascript?

// // create the event
// const customEvent = new Event("myCustomEvent");

// // add event listener to handle the event
// document.addEventListener("myCustomEvent", () => {
//   console.log("Custom event triggered!");
// });

// // trigger the event
// document.dispatchEvent(customEvent);

// 32 How do I get query string values in javascript?

// Assuming the URL is "http://example.com/?name=John&age=30"

// const params = new URLSearchParams(window.location.search);
// const name = params.get("name");
// const age = params.get("age");

// 33 How can we parse a given JSON object?

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);

// console.log(jsonObject.name); // Output: John
// console.log(jsonObject.age); // Output: 30
// console.log(jsonObject.city); // Output: New York

// 34 How can we call a function which logs a message after every 5 seconds?

// function generateMessage() {
//   console.log("I am Batman");
// }

// setInterval(generateMessage, 5000);

// 35 How can we delay calling a function after 5 seconds?

function generateMessage() {
  console.log("I am Batman");
}

setTimeout(generateMessage, 5000);
