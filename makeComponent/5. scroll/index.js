const span = document.querySelector("span");
const img = document.querySelector("img");

function paintHeight(y) {
  if (y > 2000) {
    span.innerText = "Hey, you're too far. Just scroll up a little bit.";
    span.style.fontSize = "50px";
    span.style.color = "tomato";
    img.style.display = "none";
  } else {
    span.innerText = `Scroll Down! height : ${y}`;
    span.style.fontSize = "16px";
    span.style.color = "black";
    img.style.display = "block";
  }
}

function resizeImg(y) {
  let width;
  const height = `${y}px`;
  if (y < 100) {
    width = "100px";
  } else {
    width = `${y}px`;
  }
  console.log(width);
  img.style.width = width;
  img.style.height = height;
}

function handleScroll(event) {
  console.log(event);
  const y = window.scrollY;
  paintHeight(y);
  resizeImg(y);
}

function init() {
  span.innerText = "Scroll Down! height : 0";
  document.addEventListener("scroll", handleScroll);
}

init();
