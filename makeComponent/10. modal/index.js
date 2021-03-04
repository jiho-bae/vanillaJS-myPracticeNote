const wrapper = document.querySelector(".wrapper");
const blackBackground = document.querySelector(".black_bg");
const Btn = document.getElementById("btn");
const closeBtn = document.querySelector(".closeBtn");

function onClick() {
  wrapper.style.display = "block";
  blackBackground.style.display = "block";
}
function offClick() {
  wrapper.style.display = "none";
  blackBackground.style.display = "none";
}

function init() {
  Btn.addEventListener("click", onClick);
  closeBtn.addEventListener("click", offClick);
}
init();
