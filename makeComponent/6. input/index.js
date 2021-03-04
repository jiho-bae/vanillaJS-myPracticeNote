// using input!
// if you write a something, you can add that.
const form = document.querySelector("form");
const input = document.getElementById("js-input");
const ul = document.getElementById("js-ul");

const makeSpan = (text) => {
  const li = document.createElement("li");
  li.innerText = text;
  ul.appendChild(li);
};

const handleInput = (event) => {
  event.preventDefault();
  const inputText = input.value;
  console.log(inputText);
  makeSpan(inputText);
  input.value = "";
};

function init() {
  form.addEventListener("submit", handleInput);
}

init();
