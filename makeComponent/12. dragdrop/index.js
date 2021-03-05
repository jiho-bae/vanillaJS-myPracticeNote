function onDragStart(event) {
  let targetColor;
  event.dataTransfer.setData("text/plain", event.target.id);
  switch (event.target.id) {
    case "js-dragTarget1":
      targetColor = "tomato";
      break;
    case "js-dragTarget2":
      targetColor = "brown";
      break;
    case "js-dragTarget3":
      targetColor = "gray";
      break;
  }
  event.currentTarget.style.backgroundColor = targetColor;
  event.currentTarget.style.color = "white";
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  console.log("abcde");
  const id = event.dataTransfer.getData("text");
  console.log("bcd", id);
  const elDraggable = document.getElementById(id);
  event.target.appendChild(elDraggable);

  event.dataTransfer.clearData();
}
