const span = document.querySelector("span");
const input = prompt("Choose one of these lists that you like. \n [ tomato, banana, apple, pineapple ] \n [ down, up, 6, gugudan, jump ]");

switch (input) {
  case "tomato":
    span.innerHTML = "I like Tomato color";
    break;
  case "banana":
    span.innerHTML = "yelllllow";
    break;
  case "apple":
  case "pineapple":
    span.innerHTML = "Do you like Tim Cook?";
    break;
  case "down":
    span.innerHTML = "hey! check your console";
    let i = 10;
    while (i > 0) {
      console.log(`its going down! while : ${i}`);
      i--;
    }
    console.log("the..... end!");
    break;
  case "up":
    span.innerHTML = "hey! check your console";
    let j = 0;
    do {
      console.log(`its going up! do while : ${j}`);
      j++;
    } while (j < 10);
    console.log("its faster than you");
    break;
  case "6":
    span.innerHTML = "hey! check your console";
    for (let k = 0; k < 6; k++) {
      console.log(`for : ${k}`);
    }
    console.log("the number is too small");
    break;
  case "gugudan":
    span.innerHTML = "hey! check your console";
    for (let a = 1; a < 5; a++) {
      for (let b = 1; b < 10; b++) {
        console.log(`gugudan ${a}dan : ${a} x ${b} = ${a * b}`);
      }
    }
    break;
  case "jump":
    span.innerHTML = "hey! check your console";
    let c = 0;
    while (c < 50) {
      if (c % 2 !== 0) {
        c++;
        continue;
      }
      console.log(`jump : ${c}`);
      c++;
    }
    break;
  default:
    span.innerHTML = `Press (F5) or (cmd + R) & follow my direction!!`;
    span.style.color = "tomato";
    span.style.fontSize = "50px";
    break;
}
