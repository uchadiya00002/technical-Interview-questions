// How to implement class inheritance in JavaScript?

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Fido");
dog.eat(); // outputs "Fido is eating."
dog.bark(); // outputs "Fido is barking."

//   In this example, we have a Animal class with a constructor method and an eat method. We then create a Dog class that extends the Animal class using the extends keyword. The Dog class also has a constructor method, but it calls the parent constructor using super() to set the name property. It also has a bark method that logs a message to the console.

// When we create a new Dog object and call its methods, we can see that it has access to the eat method inherited from the Animal class as well as the bark method defined in the Dog class.

// Note that the child class (Dog in this case) can also override methods from the parent class (Animal in this case) by defining a method with the same name. The child class can also define its own properties and methods in addition to the ones inherited from the parent class.
