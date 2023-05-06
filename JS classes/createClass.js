// How to define a class with properties and methods in JavaScript?

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello my Name is ${this.name} and I am ${this.age} old`);
  }
  get fullName() {
    return this.name;
  }
  set fullName(value) {
    this.name = value;
  }
}

const person = new Person("Avinash", 25);
person.sayHello();
console.log(person.fullName);
person.fullName = "Raghav";
console.log(person.fullName);
