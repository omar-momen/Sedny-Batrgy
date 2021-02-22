let showPasswordEye = document.querySelector(".fa-eye"),
  showPasswordEyeConfrim = document.querySelector(".fa-eye.confrim"),
  emailInput = document.querySelector("input[type='email']"),
  passwordInput = document.querySelector("input[type='password']"),
  passwordConfirm = document.getElementById("confrim");

// Toggle Eye
showPasswordEye.onclick = function () {
  "use strict";
  if (showPasswordEye.classList.contains("fa-eye")) {
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
    passwordInput.type = "text";
  } else {
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
    passwordInput.type = "password";
  }
};

showPasswordEyeConfrim.onclick = function () {
  "use strict";
  if (this.classList.contains("fa-eye")) {
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
    passwordConfirm.type = "text";
  } else {
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
    passwordConfirm.type = "password";
  }
};

passwordInput.oninput = function () {
  "use strict";
  if (this.value.length > 0) {
    showPasswordEye.style.opacity = "1";
  } else {
    showPasswordEye.style.opacity = "0";
  }
};

// Change Input Placeholder
let pageDirection = document.documentElement.getAttribute("dir");

// Validation
let validationElement = document.querySelector(".validation"),
  submitButton = document.querySelector("input[type='submit']"),
  lowerCase = document.getElementById("small"),
  capital = document.getElementById("capital"),
  number = document.getElementById("number"),
  Letterslength = document.getElementById("characters");

lowerCase.textContent = "A lower letter";
capital.textContent = "A capital letter";
number.textContent = "A number";
Letterslength.textContent = "Minimum 8 letter";

if (pageDirection === "rtl") {
  lowerCase.textContent = "حرف صغير";
  capital.textContent = "حرف كبير";
  number.textContent = "رقم";
  Letterslength.textContent = "ثمانية حروف على الاقل";
}

// Lowercase, Uppercase, A number, Minimun 8 characters
let lowerCaseLetters = /[a-z]/g,
  capitalLetters = /[A-Z]/g,
  numbers = /[0-9]/g;

passwordInput.onkeyup = function () {
  validationElement.style.opacity = "1";
  if (this.value.match(lowerCaseLetters)) {
    lowerCase.classList.remove("invalid");
    lowerCase.classList.add("valid");
    setTimeout(() => {
      lowerCase.style.display = "none";
    }, 1050);
  } else {
    lowerCase.classList.remove("valid");
    lowerCase.classList.add("invalid");
    lowerCase.style.display = "block";
    passwordInput.classList.add("alert");
  }

  if (this.value.match(capitalLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    setTimeout(() => {
      capital.style.display = "none";
    }, 1050);
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    capital.style.display = "block";
    passwordInput.classList.add("alert");
  }

  if (this.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    setTimeout(() => {
      number.style.display = "none";
    }, 1050);
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    number.style.display = "block";
    passwordInput.classList.add("alert");
  }

  if (this.value.length >= 8) {
    Letterslength.classList.remove("invalid");
    Letterslength.classList.add("valid");
    setTimeout(() => {
      Letterslength.style.display = "none";
    }, 1050);
  } else {
    Letterslength.classList.remove("valid");
    Letterslength.classList.add("invalid");
    Letterslength.style.display = "block";
    passwordInput.classList.add("alert");
  }
};

// Add red Color on input if input is empty
submitButton.onclick = function (e) {
  if (
    !passwordInput.value.match(lowerCaseLetters) ||
    !passwordInput.value.match(capitalLetters) ||
    !passwordInput.value.match(numbers) ||
    !passwordInput.value >= 8 ||
    emailInput.value === ""
  ) {
    e.preventDefault();
    validationElement.style.opacity = "1";
    emailInput.classList.add("alert");
    passwordInput.classList.add("alert");
  }
};

let loginInputs = document.querySelectorAll(".login_form input");

document.addEventListener("keyup", function (e) {
  if (e.target.getAttribute("type") == "email") {
    e.target.classList.remove("alert");
  }
  if (e.target.getAttribute("type") == "password") {
    if (
      e.target.value.length >= 8 &&
      e.target.value.match(lowerCaseLetters) &&
      e.target.value.match(capitalLetters) &&
      e.target.value.match(numbers)
    ) {
      e.target.classList.remove("alert");
    }
  }
});

// Upload Picture with review
function reviewCover(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();

    reader.onload = function (e) {
      $(".profile_image form img").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#upload").change(function () {
  reviewCover(this);
});
