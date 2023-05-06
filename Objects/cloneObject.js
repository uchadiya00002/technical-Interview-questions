// How do you clone an Object in js?

// In JavaScript, there are several ways to clone an object. One way is to use the Object.assign() method. Here is an example:

const obja = { a: 1, b: 2, c: 3 };
const objb = Object.assign({}, obja);
console.log(objb); // output: { a: 1, b: 2, c: 3 }

// Another way to clone an object is to use the spread operator ...

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1 };
console.log(obj2); // output: { a: 1, b: 2, c: 3 }
