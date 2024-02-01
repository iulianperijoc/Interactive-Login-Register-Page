"use strict";

// We will declare all tabs that we will be opened/closed (block/none)

const mainDash = document.querySelector(".container");
const forgetPassDash = document.querySelector(".container-fp");
const registerDash = document.querySelector(".container-register");
const checkEmailDash = document.querySelector(".checkEmail");

// Remember me function //

// Send link to written email (forgot password dash) //

// Forgot password function //

const resetPasswordButton = document.querySelector(".forgot");

resetPasswordButton.addEventListener("click", () => {
  mainDash.style.display = "none";
  forgetPassDash.style.display = "block";
});

// Register Function ("Join Us" button) //

const joinUsButton = document.querySelector(".registerLogin");

joinUsButton.addEventListener("click", () => {
  mainDash.style.display = "none";
  registerDash.style.display = "block";
});

// Register Button after filling all inputs + stars animation

const joinButton = document.querySelector(".registerButton");

joinButton.addEventListener("click", () => {
  registerDash.style.display = "none";
  checkEmailDash.style.display = "flex";
  var interval = setInterval(() => {stars()}, 20);
  setTimeout(() => { clearInterval(interval) }, 10000);
});

// Back to main button function + back to register page

const ids = [1, 2];

for (let id of ids) {
  const backButton = document.getElementById("backLogin" + id);
  backButton.addEventListener("click", () => {
    registerDash.style.display = "none";
    forgetPassDash.style.display = "none";
    checkEmailDash.style.display = "none";
    mark.style.display = "none";
    mainDash.style.display = "block";

    // Removing everything that was written on input elements

    let inputFields = document.querySelectorAll(".textInput");
    inputFields.forEach(function (textInput) {
      textInput.value = "";
    });
  });
}

document.getElementById("backRegister").addEventListener("click", () => {
  checkEmailDash.style.display = "none";
  registerDash.style.display = "block";
});

// Show/Hide Password

const passButton = document.querySelector(".container-password");
const showPass = document.getElementById("showPass");
const hidePass = document.getElementById("hidePass");


passButton.addEventListener("click", () => {
    const input = document.getElementById("passInput");
    if (input.type === "password") {
      input.type = "text";
      hidePass.style.display = "none";
      showPass.style.display = "flex";
    } else {
      input.type = "password";
      hidePass.style.display = "flex";
      showPass.style.display = "none";
    }
})

// Text on send link for reset password

const sendLinkButton = document.querySelector(".fpEmailButton");
const mark = document.querySelector(".sentBox");

sendLinkButton.addEventListener("click", () => {
  mark.style.display = "block";
  mark.style.animation = "pulse 1.5s 1";
});

// Stars animation function

function stars () {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.body.appendChild(e);
  e.style.left = Math.random() * + (170 - 1) + 1 + "vh"; //Returns a random number between min (inclusive) and max (exclusive)
  let size = Math.random() * 12;
  let duration = Math.random() * 3;

  e.style.fontSize = 12 + size + "px";
  e.style.animationDuration = 2 + duration + "s";

  setTimeout(() => document.body.removeChild(e), 5000)
}