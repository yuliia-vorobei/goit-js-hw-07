const form = document.querySelector(".login-form");
form.addEventListener("submit", formHandler);
function formHandler(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(data);
    evt.currentTarget.reset();
  }
}
