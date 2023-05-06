// How can you Insert an element at a specific index in an Array in js?

const array = ["apple", "banana", "orange", "peach"];
const index = 1; // insert at index 2
const element = "grape"; // element to insert

array.splice(index, 3, element);
console.log(array);

// How can you Replace an element at a specific index in an Array?
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 6);
console.log(arr); // output: [1, 2, 6, 4, 5]

// How can you Delete an element at a specific index in an Array?
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1);
console.log(arr2); // output: [1, 2, 4, 5]
