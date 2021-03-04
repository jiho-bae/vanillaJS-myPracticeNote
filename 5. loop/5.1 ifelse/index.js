// put your favotite number!
// according to your fav number, i give you different message.

const input = prompt("input your fav number!");
const yourNumber = document.querySelector("h1");
const message = document.querySelector("h4");

yourNumber.innerText = `your fav number : ${input}`;

if (input < 10) {
  message.innerText = "your number is small. but it is cool.";
} else if (input < 50) {
  message.innerText = "it is nice number!";
} else if (input < 100) {
  message.innerText = "sometime, people like BIG number.";
} else {
  message.innerText = "your fav number is AWESOME! very BIG";
}

// ifelse can use in handling event function

const span = document.querySelector("span");
const BASE_COLOR = "rgb(45, 52, 54)";
const OTHER_COLOR = "rgb(214, 48, 49)";

const handleClickSpan = () => {
  if (span.style.color === BASE_COLOR) {
    span.style.color = OTHER_COLOR;
  } else {
    span.style.color = BASE_COLOR;
  }
};

function init() {
  span.style.color = BASE_COLOR;
  span.style.cursor = "pointer";
  span.addEventListener("click", handleClickSpan);
}
init();
