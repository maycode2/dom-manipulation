function changeContent() {
  document.getElementById("dynamic-text").textContent = "The content has changed dynamically!";
}

function changeStyle() {
  document.body.style.backgroundColor = "#f0f8ff";
  document.getElementById("main-title").style.color = "green";
  document.getElementById("main-title").style.fontSize = "2.5rem";
}

function addElement() {
  const newDiv = document.createElement("div");
  newDiv.textContent = "New Element Added!";
  newDiv.id = "new-element";
  newDiv.style.marginTop = "10px";
  document.getElementById("element-container").appendChild(newDiv);
}

function removeElement() {
  const element = document.getElementById("new-element");
  if (element) {
    element.remove();
  }
}
