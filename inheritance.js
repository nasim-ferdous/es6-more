class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} is meowing`);
  }
}

class Bird extends Animal {
  constructor(name, age, species) {
    super(name, age);
    this.color = species;
  }

  flying() {
    console.log(`${this.name} is fling`);
  }
}

const dog1 = new Dog("coffee", 5, "deshi");
console.log(dog1);
dog1.eat();
const cat1 = new Cat("sp", 2, "red");
console.log(cat1);
cat1.eat();
const bird1 = new Cat("kokil", 3, "deshi");
console.log(bird1);
bird1.eat();
