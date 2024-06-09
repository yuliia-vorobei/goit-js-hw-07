const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
input.addEventListener("input", inputHandler);
function inputHandler(event) {
  userName.textContent = event.currentTarget.value.trim();
  if (input.value.trim() === "") {
    userName.textContent = "Anonymous";
  }
}
