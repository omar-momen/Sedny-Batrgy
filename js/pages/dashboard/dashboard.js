// Toggle Class Aactive on Tabs
let dashtabs = document.querySelectorAll(".tabs ul li");

dashtabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    dashtabs.forEach((dashTab) => dashTab.classList.remove("active"));
    this.classList.add("active");
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

function checkInput(input) {
  validationElement.classList.add("show");
  if (input.value.match(lowerCaseLetters)) {
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

  if (input.value.match(capitalLetters)) {
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

  if (input.value.match(numbers)) {
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

  if (input.value.length >= 8) {
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

  if (
    input.value.length >= 8 &&
    input.value.match(lowerCaseLetters) &&
    input.value.match(capitalLetters) &&
    input.value.match(numbers)
  ) {
    input.classList.remove("alert");
  }
}
passwordInput.onkeyup = function () {
  checkInput(this);
};
// Add red Color on input if input is empty
let resultsBody = document.querySelector(".add_client_form");
let createdAccount = document.querySelector(".created");
let emailField = document.querySelector(".results .email");
let passwordField = document.querySelector(".results .password");

submitButton.onclick = function (e) {
  checkInput(passwordInput);
  if (
    passwordInput.value.length >= 8 &&
    passwordInput.value.match(lowerCaseLetters) &&
    passwordInput.value.match(capitalLetters) &&
    passwordInput.value.match(numbers) &&
    emailInput.value !== ""
  ) {
    resultsBody.classList.remove("show");
    resultsBody.classList.add("hide");
    createdAccount.classList.remove("hide");
    createdAccount.classList.add("show");
    emailField.textContent = `Email: ${emailInput.value}`;
    passwordField.textContent = `Password: ${passwordInput.value}`;
  }
};
document.addEventListener("onload", function () {
  checkInput(passwordInput);
});

// Show and Hide popup
let addButton = document.getElementById("add_client");
let modelContainer = document.querySelector(".add_client_modal");
let modelBody = document.querySelector(".modal_body");
let coloseBtn = document.querySelector(".close_modal button");

addButton.onclick = function () {
  modelContainer.classList.add("show_model");
  modelBody.classList.add("show_body");
  resultsBody.classList.remove("hide");
  resultsBody.classList.add("show");
  createdAccount.classList.remove("show");
  createdAccount.classList.add("hide");
  emailInput.value = "";
  emailField.innerHTML = "";
  passwordField.innerHTML = "";
  generateRandomPassword();
  checkInput(passwordInput);
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

// Active and Inactive Button
let statusBtn = document.querySelector(".status_btn button");
let statusText = document.querySelector(".status_btn button span");

statusBtn.onclick = function (e) {
  this.classList.toggle("active");
  e.preventDefault();
  if (this.classList.contains("active")) {
    statusText.textContent = "نشط";
  } else {
    statusText.textContent = "غير نشط";
  }
};

// Start Service Content
let serviceInfoEl = document.querySelector(".service_info");
let serviceDropBtn = document.querySelector(".service_button");

let condition = false;

serviceDropBtn.onclick = function () {
  if (!condition) {
    condition = true;
    serviceInfoEl.style.display = "block";
    this.classList.add("active");
    setTimeout(() => {
      serviceInfoEl.classList.add("active");
    }, 50);
  } else if (condition) {
    condition = false;
    serviceInfoEl.classList.remove("active");
    this.classList.remove("active");
    this.style.transition = `all 0.3s ease`;
    this.style.transform = `translateY(${serviceInfoEl.offsetHeight * -1}px)`;
    setTimeout(() => {
      this.style.transition = `unset`;
      this.style.transform = `translateY(0)`;
      serviceInfoEl.style.display = "none";
    }, 300);
  }
};

// Add Service Popup
let addServiceContainer = document.querySelector(".add_service_modal");
let addServiceButton = document.getElementById("add_service");
let serviceModelBody = document.querySelector(".add_service_modal .modal_body");
let serviceColoseBtn = document.querySelector(
  ".add_service_modal .close_modal button"
);
let serviceFinishBtn = document.querySelector(
  ".add_service_modal input[type='submit']"
);

addServiceButton.onclick = function () {
  addServiceContainer.classList.add("show");
  serviceModelBody.classList.add("show");
};

serviceColoseBtn.onclick = function () {
  addServiceContainer.classList.remove("show");
  serviceModelBody.classList.remove("show");
};

serviceFinishBtn.onclick = function () {
  addServiceContainer.classList.remove("show");
  serviceModelBody.classList.remove("show");
};

addServiceContainer.onclick = function () {
  addServiceContainer.classList.remove("show");
  serviceModelBody.classList.remove("show");
};

serviceModelBody.onclick = function (e) {
  e.stopPropagation();
};

// Progress Bar
let firstStep = $("#step_one");
let secondtStep = $("#step_two");
let thirdStep = $("#step_three");
let fourthStep = $("#step_four");
let fifthStep = $("#step_five");
let sixStep = $("#step_six");
let shape = $(".step_shape");
let stepStatus = $(".step_status");

function toggleActive() {
  $(".steps li").click(function () {
    $(this).addClass("active");
  });
  firstStep.click(function () {
    $(this).siblings().removeClass("active");
  });
  secondtStep.click(function () {
    firstStep.addClass("active");
    thirdStep.removeClass("active");
    fourthStep.removeClass("active");
    fifthStep.removeClass("active");
    sixStep.removeClass("active");
  });
  thirdStep.click(function () {
    firstStep.addClass("active");
    secondtStep.addClass("active");
    fourthStep.removeClass("active");
    fifthStep.removeClass("active");
    sixStep.removeClass("active");
  });
  fourthStep.click(function () {
    firstStep.addClass("active");
    secondtStep.addClass("active");
    thirdStep.addClass("active");
    fifthStep.removeClass("active");
    sixStep.removeClass("active");
  });
  fifthStep.click(function () {
    firstStep.addClass("active");
    secondtStep.addClass("active");
    thirdStep.addClass("active");
    fourthStep.addClass("active");
    sixStep.removeClass("active");
  });
  sixStep.click(function () {
    $(this).siblings().addClass("active");
  });
}
toggleActive();
