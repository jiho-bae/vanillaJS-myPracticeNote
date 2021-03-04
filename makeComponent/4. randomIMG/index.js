const imgBox = document.querySelector("div");

function changeImg() {
  const randomNum = Math.floor(Math.random() * 1000);
  imgBox.style.backgroundImage = `url("https://source.unsplash.com/random/${randomNum}")`;
}

function init() {
  imgBox.style.backgroundImage = `url("https://source.unsplash.com/random")`;
  setInterval(changeImg, 1500);
}

init();
