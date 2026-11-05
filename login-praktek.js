const form = document.querySelector(".login-form");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const cek = document.querySelector("#cek");
const sessionWrapper = document.querySelector("#session-wrapper");
const emailSession = document.querySelector("#email-session");
const passwordSession = document.querySelector("#password-session");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (inputEmail.value == "" && inputPassword.value == "") {
    emailError.style.display = "block";
    passwordError.style.display = "block";
    return;
  }

  if (inputEmail.value == "") {
    emailError.style.display = "block";
    return;
  } else if (inputPassword.value == "") {
    passwordError.style.display = "block";
    return;
  }

  emailError.style.display = "none";
  passwordError.style.display = "none";
  alert(`Berhasil login. Email: ${inputEmail.value} Password: ${inputPassword.value}`);
  localStorage.setItem("email", inputEmail.value);
  localStorage.setItem("password", inputPassword.value);
});

cek.addEventListener("click", function () {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  sessionWrapper.style.display = "block";

  emailSession.innerText = `Email: ${email}`;
  passwordSession.innerText = `Password: ${password}`;
});
