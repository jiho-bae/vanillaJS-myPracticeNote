const sliderBox = document.querySelector(".slider_box");
const sliderBoxContents = document.querySelectorAll(".slider_box-content");
const prevBtn = document.querySelector(".slider_btn-prev");
const nextBtn = document.querySelector(".slider_btn-next");
const sliderLen = sliderBoxContents.length;
const sliderWidth = 600;

let currentIndex = 0;

function handlePrevBtn() {
  if (currentIndex > 0) {
    sliderBox.style.transform = `translate3d(-${sliderWidth * (currentIndex - 1)}px, 0px, 0px)`;
    currentIndex--;
  }
}

function handleNextBtn() {
  if (currentIndex < sliderLen - 1) {
    sliderBox.style.transform = `translate3d(-${sliderWidth * (currentIndex + 1)}px, 0px, 0px)`;
    currentIndex++;
  }
}

function init() {
  sliderBox.style.transition = "0.3s";
  prevBtn.addEventListener("click", handlePrevBtn);
  nextBtn.addEventListener("click", handleNextBtn);
}

init();
