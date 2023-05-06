// Filter the given object based on certain conditions and return the corresponding object?

const data = [
  { name: "John", age: 25, city: "New York" },
  { name: "Sarah", age: 30, city: "San Francisco" },
  { name: "Mike", age: 20, city: "Chicago" },
  { name: "Emily", age: 35, city: "Los Angeles" },
];

function checkCondition(data) {
  return data.filter((item, index) => item.age >= 25);
}

console.log(checkCondition(data));
