const divControls = document.querySelector("#controls");
const div = document.querySelector("#boxes");
const input = divControls.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const amount = createButton.addEventListener("click", function () {
  createBoxes(input.value);
});

function createBoxes(amount) {
  div.innerHTML = "";
  if (input.value >= 1 && input.value <= 100) {
    let step = 30;
    for (let i = 1; i <= input.value; i++) {
      const divEl = document.createElement("div");
      div.append(divEl);
      step += 10;
      divEl.style.width = `${step}px`;
      divEl.style.height = `${step}px`;
      divEl.style.backgroundColor = getRandomHexColor();
    }
  }
  input.value = "";
}
destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  div.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
