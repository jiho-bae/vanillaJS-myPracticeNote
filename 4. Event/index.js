const title = document.querySelector("#hello");
const description = document.querySelector(".hi");
console.log(title);
console.log(description);

const handleMouseoverDescript = () => {
  description.style.fontSize = "50px";
};

const handleClickTitle = () => {
  title.style.color = "red";
};

const handleResize = (event) => {
  console.log(event);
};
function init() {
  window.addEventListener("resize", handleResize);
  title.addEventListener("click", handleClickTitle);
  description.addEventListener("mouseover", handleMouseoverDescript);
}

init();
