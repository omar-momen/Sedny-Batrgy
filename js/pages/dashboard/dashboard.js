// Toggle Class Aactive on Tabs
let dashtabs = document.querySelectorAll(".tabs ul li");

dashtabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    dashtabs.forEach((dashTab) => dashTab.classList.remove("active"));
    this.classList.add("active");
  });
});

// Tabs Filter
let tabsFilter = document.querySelectorAll(".tabs_filter input");

tabsFilter.forEach((element) => {
  element.addEventListener("click", function () {
    tabsFilter.forEach((filter) => filter.removeAttribute("checked"));
    this.setAttribute("checked", "");
  });
});

// Counter Up
$(".counter_up").countTo({
  speed: 7000,
  refreshInterval: 70,
  formatter: function (value, options) {
    return value
      .toFixed(options.decimals)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  },
});

// Account Popup Form
let showPasswordEye = document.querySelector(".fa-eye");
let emailInput = document.querySelector("input[type='email']");
let passwordInput = document.querySelector("input[type='password']");

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

function generateRandomPassword() {
  "use strict";

  let chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    serialLegnth = 9,
    randomSerial = "",
    randomNumber,
    i;

  for (i = 0; i < serialLegnth; i++) {
    randomNumber = Math.floor(Math.random() * chars.length);
    randomSerial += chars.substring(randomNumber, randomNumber + 1);
  }
  passwordInput.value = randomSerial;
}

// Validation
let validationElement = document.querySelector(".validation");
let submitButton = document.querySelector("input[type='submit']");
let lowerCase = document.getElementById("small");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let Letterslength = document.getElementById("characters");

lowerCase.textContent = "حرف صغير";
capital.textContent = "حرف كبير";
number.textContent = "رقم";
Letterslength.textContent = "ثمانية حروف على الاقل";

// Lowercase, Uppercase, A number, Minimun 8 characters
let lowerCaseLetters = /[a-z]/g,
  capitalLetters = /[A-Z]/g,
  numbers = /[0-9]/g;

passwordInput.onkeyup = function () {
  validationElement.classList.add("show");
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
    validationElement.classList.add("show");
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

// Show and Hide popup
let addButton = document.getElementById("add_client");
let modelContainer = document.querySelector(".add_client_modal");
let modelBody = document.querySelector(".modal_body");
let coloseBtn = document.querySelector(".close_modal button");

addButton.onclick = function () {
  modelContainer.classList.add("show_model");
  modelBody.classList.add("show_body");
  generateRandomPassword();
};

coloseBtn.onclick = function () {
  modelContainer.classList.remove("show_model");
  modelBody.classList.remove("show_body");
};

modelContainer.onclick = function () {
  modelContainer.classList.remove("show_model");
  modelBody.classList.remove("show_body");
};

modelBody.onclick = function (e) {
  e.stopPropagation();
};
