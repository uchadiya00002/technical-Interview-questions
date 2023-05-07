// SetItem in localStorage
const myObj = { name: "John", age: 30 };
localStorage.setItem("myObj", JSON.stringify(myObj));

// getItem from localStorage
let val = JSON.parse(localStorage.getItem("myObj"));
