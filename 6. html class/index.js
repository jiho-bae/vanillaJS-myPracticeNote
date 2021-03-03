const span = document.querySelector("span");
const btn = document.querySelector("button");

const RED_CLASS = "redAndBigBold";
const BLUE_CLASS = "blueAndSmallItalic";

const handleClickBtn = (event) => {
  event.preventDefault();
  const hasRedClass = span.classList.contains(RED_CLASS);
  if (!hasRedClass) {
    span.classList.remove(BLUE_CLASS);
    span.classList.add(RED_CLASS);
    span.innerText = "Red & Big";
  } else {
    span.classList.remove(RED_CLASS);
    span.classList.add(BLUE_CLASS);
    span.innerText = "Blue & Small";
  }
};

function init() {
  btn.addEventListener("click", handleClickBtn);
}

init();
