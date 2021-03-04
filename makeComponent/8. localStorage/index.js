// localStorage
// extends 8. input
// you can save your name in localStorage.
// and if you click deleteButton, delete your name in localStorage and display input box.

const form = document.querySelector("form");
const input = document.getElementById("js-input");
const div = document.querySelector("#js-div");

const NAME = "yourName";
const HIDE = "hide";

const handleClickBtn = () => {
  localStorage.removeItem(NAME);
  div.innerHTML = "";
  loadName();
};

const saveName = (text) => {
  localStorage.setItem(NAME, text);
};

const makeDelBtn = () => {
  const button = document.createElement("button");
  button.innerText = "Delete Name";
  button.addEventListener("click", handleClickBtn);
  div.appendChild(button);
};
const makeSpan = (text) => {
  const span = document.createElement("span");
  span.innerText = `your name : ${text}`;
  div.appendChild(span);
  makeDelBtn();
};

const handleInput = (event) => {
  event.preventDefault();
  const inputText = input.value;
  makeSpan(inputText);
  input.value = "";
  input.classList.add(HIDE);
  saveName(inputText);
};

const displayCurrentList = (name) => {
  input.classList.add(HIDE);
  makeSpan(name);
};

const loadName = () => {
  const currentName = localStorage.getItem(NAME);
  if (currentName === null) {
    input.classList.remove(HIDE);
  } else {
    displayCurrentList(currentName);
  }
};
function init() {
  loadName();
  form.addEventListener("submit", handleInput);
}

init();
