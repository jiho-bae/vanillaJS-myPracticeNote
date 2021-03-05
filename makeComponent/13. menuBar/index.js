const lists = document.querySelectorAll("li");
let curTarget;

function init() {
  for (const list of lists) {
    list.addEventListener("mouseover", function (event) {
      curTarget = event.currentTarget;
      const my = curTarget.querySelector("div");
      my.style.display = "block";
      console.log("hi");
    });
    list.addEventListener("mouseout", function (event) {
      curTarget = event.currentTarget;
      const my = curTarget.querySelector("div");
      my.style.display = "none";
      console.log("hi");
    });
  }
}

init();
