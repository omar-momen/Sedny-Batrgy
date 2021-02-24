// Toggle Eye
$("#oldPass").keyup(function () {
  $("label[for='oldPass'] .fa-eye").css("opacity", "1");
});
$("#password").keyup(function () {
  $("label[for='password'] .fa-eye").css("opacity", "1");
});

$("#confirm").keyup(function () {
  $("label[for='confirm'] .fa-eye").css("opacity", "1");
});

$(".fa-eye.oldPass").each(function () {
  $(this).click(function () {
    $(this).toggleClass("fa-eye-slash");
    if ($(this).hasClass("fa-eye-slash")) {
      $("#oldPass").attr("type", "text");
    } else {
      $("#oldPass").attr("type", "password");
    }
  });
});
$(".fa-eye.password").each(function () {
  $(this).click(function () {
    $(this).toggleClass("fa-eye-slash");
    if ($(this).hasClass("fa-eye-slash")) {
      $("#password").attr("type", "text");
    } else {
      $("#password").attr("type", "password");
    }
  });
});
$(".fa-eye.confirm").each(function () {
  $(this).click(function () {
    $(this).toggleClass("fa-eye-slash");
    if ($(this).hasClass("fa-eye-slash")) {
      $("#confirm").attr("type", "text");
    } else {
      $("#confirm").attr("type", "password");
    }
  });
});

let showPasswordEye = document.querySelector(".fa-eye");
let emailInput = document.querySelector("input[type='email']");
let passwordInput = document.querySelector("#password");

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
