// Date function
// and use setInterval

const clock = new Date();
const hour = clock.getHours();
const minute = clock.getMinutes();
const second = clock.getSeconds();
console.log(clock);
console.log(hour, minute, second);

// display currentTime in your html page!

const timeSpan = document.querySelector("span");
const getNowTime = () => {
  const date = new Date();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentSeconds = date.getSeconds();
  timeSpan.innerText = `${currentHours > 9 ? currentHours : `0${currentHours}`}:${
    currentMinutes > 9 ? currentMinutes : `0${currentMinutes}`
  }:${currentSeconds > 9 ? currentSeconds : `0${currentSeconds}`}`;
};

function init() {
  getNowTime();
  setInterval(getNowTime, 1000);
}

init();
