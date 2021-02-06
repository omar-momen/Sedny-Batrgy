let showPasswordEye = document.querySelector(".fa-eye"),
  emailInput = document.querySelector("input[type='email']"),
  passwordInput = document.querySelector("input[type='password']");

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

passwordInput.oninput = function () {
  "use strict";
  if (this.value.length > 0) {
    showPasswordEye.style.opacity = "1";
  } else {
    showPasswordEye.style.opacity = "0";
  }
};

let pageDirection = document.documentElement.getAttribute("dir");

if (pageDirection === "ltr") {
  emailInput.placeholder = "Email address";
  passwordInput.placeholder = "Password";
} else if (pageDirection == "rtl") {
  emailInput.placeholder = "البريد الالكتروني";
  passwordInput.placeholder = "كلمة المرور";
}

// Validation
let validationElement = document.querySelector(".validation"),
  submitButton = document.querySelector("input[type='submit']"),
  lowerCase = document.getElementById("small"),
  capital = document.getElementById("capital"),
  number = document.getElementById("number"),
  Letterslength = document.getElementById("characters");

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
    Letterslength.classList.add("invalid");
  }
};

// Length
// passwordInput.onkeyup = function () {
//   "use strict";
//   if (this.value.length >= 8) {
//     validationElement.style.opacity = "0";
//   } else {
//     validationElement.style.opacity = "1";
//     validationElement.innerHTML = `<p>Password must be 8 characters at least</p>`;
//   }
// };

// (function () {
//   "use strict";
//   $(
//     ".login-page .login .left-box .box-content .form-one .toggle-password span"
//   ).click(function () {
//     $(this).toggleClass("eye eye-slash");
//     let input = $($(this).attr("toggle"));
//     if (input.attr("type") == "password") {
//       input.attr("type", "text");
//     } else {
//       input.attr("type", "password");
//     }
//   });

//   // ****** Start Validation ******
//   var PasswordError = true,
//     EmailError = true;

//   $('.login-page.ltr .box-content form input[name="email"]').keyup(function () {
//     if ($(this).val().length == 0) {
//       $(this).next().find("#errorMessage").text("Email Requierd");
//       $(this).next().fadeIn();
//       $(this).addClass("error").removeClass("validate");
//       EmailError = true;
//     } else {
//       $(this).next().fadeOut();
//       $(this).removeClass("error").addClass("validate");
//       EmailError = false;
//     }
//   });
//   $('.login-page.ltr .box-content form input[name="password"]').keyup(
//     function () {
//       if ($(this).val().length == 0) {
//         $(this).next().find("#errorMessage").text("Password Requierd");
//         $(this).next().fadeIn();
//         $(this).addClass("error").removeClass("validate");
//         PasswordError = true;
//       } else if ($(this).val().length < 6) {
//         $(this)
//           .next()
//           .find("#errorMessage")
//           .html("password Must Be at least 6 chars");
//         $(this).next().fadeIn();
//         $(this).addClass("error").removeClass("validate");
//         PasswordError = true;
//       } else {
//         $(this).next().fadeOut();
//         $(this).removeClass("error").addClass("validate");
//         PasswordError = false;
//       }
//     }
//   );
//   $(".login-page.ltr .box-content form input[type='submit']").click(function (
//     e
//   ) {
//     $(".forms form input").keyup();
//     if (
//       userNameError == true ||
//       EmailError == true ||
//       PasswordError == true ||
//       confirmPassword == true
//     ) {
//       e.preventDefault();
//     }
//   });

//   $('.login-page.rtl .box-content form input[name="email"]').keyup(function () {
//     if ($(this).val().length == 0) {
//       $(this).next().find("#errorMessage").text("الايميل مطلوب");
//       $(this).next().fadeIn();
//       $(this).addClass("error").removeClass("validate");
//       EmailError = true;
//     } else {
//       $(this).next().fadeOut();
//       $(this).removeClass("error").addClass("validate");
//       EmailError = false;
//     }
//   });
//   $('.login-page.rtl .box-content form input[name="password"]').keyup(
//     function () {
//       if ($(this).val().length == 0) {
//         $(this).next().find("#errorMessage").text("كلمة السر مطلوبة");
//         $(this).next().fadeIn();
//         $(this).addClass("error").removeClass("validate");
//         PasswordError = true;
//       } else if ($(this).val().length < 6) {
//         $(this)
//           .next()
//           .find("#errorMessage")
//           .html("كلمة السر يجب ان تكون اكثر من ستة احرف");
//         $(this).next().fadeIn();
//         $(this).addClass("error").removeClass("validate");
//         PasswordError = true;
//       } else {
//         $(this).next().fadeOut();
//         $(this).removeClass("error").addClass("validate");
//         PasswordError = false;
//       }
//     }
//   );
//   $("#signIn").click(function (e) {
//     $(".login-page.rtl .box-content form input").keyup();
//     if (EmailError == true || PasswordError == true) {
//       e.preventDefault();
//     }
//   });
//   // ****** End Validation ******
// })();
