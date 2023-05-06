const data = [
  {
    id: 1,
    name: "John",
    age: 25,
    gender: "male",
  },
  {
    id: 2,
    name: "Jane",
    age: 30,
    gender: "female",
  },
  {
    id: 3,
    name: "Bob",
    age: 40,
    gender: "male",
  },
];

function extractvalues(data) {
  return data.map((item) => {
    return { name: item?.name, age: item?.age };
  });
}
console.log(extractvalues(data));
