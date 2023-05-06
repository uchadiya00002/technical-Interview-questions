// How can you combine two objects?
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Using spread operators
const combinedObj = { ...obj1, ...obj2 };
// Using assign method
const combinedObj2 = Object.assign({}, obj1, obj2);

// using for in loop
const combinedObj3 = {};
for (let key in obj1) {
  combinedObj3[key] = obj1[key];
}
for (let key in obj2) {
  combinedObj3[key] = obj2[key];
}

console.log(combinedObj); // {a: 1, b: 2, c: 3, d: 4}
console.log(combinedObj2); // {a: 1, b: 2, c: 3, d: 4}
console.log(combinedObj3); // {a: 1, b: 2, c: 3, d: 4}
