//make class

class Person {
  // this is constructor.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //this is method.
  speak() {
    console.log(`${this.name} :  hello there?`);
  }
}

// call class

const user = new Person("jiho", 27);
console.log(user.name);
console.log(user.age);
user.speak();

// getter, setter
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(val) {
    this._age = val < 0 ? 0 : val;
  }
}

const user1 = new Person1("Tom", 25);
console.log(user1.age);
user1.age = -15;
console.log(user1.age);
user1.age = 30;
console.log(user1.age);

// public, private
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  publicField = 2;
  #privateField = 0;
}

const user2 = new Person2("james", 20);
console.log(`public : ${user2.publicField}`);
console.log(`private : ${user2.privateField}`);

// Inherit

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // method overriding
  // triangle's area = (1/2)*width*height
  draw() {
    super.draw();
    console.log("🔻");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const rect = new Rectangle(20, 20, "blue");
rect.draw();
console.log(rect.getArea());
const tri = new Triangle(30, 50, "red");
tri.draw();
console.log(tri.getArea());

//check instanceof
console.log(rect instanceof Rectangle);
console.log(rect instanceof Triangle);
console.log(rect instanceof Shape);
console.log(tri instanceof Rectangle);
console.log(tri instanceof Triangle);
console.log(tri instanceof Shape);
