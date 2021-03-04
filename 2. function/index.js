// practice function

console.log("hello");
console.log("hello python");
console.log("hello world");
console.log("hello java");
console.log("hello thomas");
console.log("hello babo");

// make call console.log function

function sayHello(message) {
  console.log("hello ", message);
}

sayHello("python");
sayHello("tomato");
sayHello("banana");
sayHello("kimchi");
sayHello("bokkumbob");

// more advance function

const name = "Jiho";
const age = 31;

console.log("Name : ", name, " age : ", age);

function sayHelloMoreComfort(name, age) {
  console.log(`Name : ${name} age : ${age}`);
}
sayHelloMoreComfort(name, age);

// function return

function plus(a, b) {
  return a + b;
}
console.log(plus(1, 2));

// ES6 arrow function

const minus = (a, b) => {
  return a - b;
};
console.log(minus(3, 7));

// function in object

const calculator = {
  product: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
    return a / b;
  },
};

console.log(calculator.product(3, 4));
console.log(calculator.division(5, 3));

// callback function, anonymous function

function sayHey(answer, printYes, printNo) {
  if (answer === "hey") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes?");
};

const printNo = function () {
  console.log("no!");
};

sayHey("hey", printYes, printNo);
sayHey("hoi", printYes, printNo);

// Immediately Invoked Function Expression (IIFE)

(function sayBye() {
  console.log("IIFE.. BYE~");
})();
