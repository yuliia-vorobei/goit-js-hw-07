const divControls = document.querySelector("#controls");
const div = document.querySelector("#boxes");
const input = divControls.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const amount = createButton.addEventListener("click", function () {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
});

function createBoxes(amount) {
  div.innerHTML = "";
  const fragment = document.createDocumentFragment();
  let step = 30;
  for (let i = 1; i <= amount; i++) {
    const divEl = document.createElement("div");
    fragment.appendChild(divEl);
    step += 10;
    divEl.style.width = `${step}px`;
    divEl.style.height = `${step}px`;
    divEl.style.backgroundColor = getRandomHexColor();
  }
  div.appendChild(fragment);
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
