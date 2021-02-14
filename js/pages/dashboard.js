window.onload = function () {
  document.documentElement.style.overflow = "unset";
  document.body.classList.add("fix_body");
};

let dashtabs = document.querySelectorAll(".tabs ul li");

dashtabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    dashtabs.forEach((dashTab) => dashTab.classList.remove("active"));
    this.classList.add("active");
  });
});

let notifcation_bell = document.getElementById("notifcation_bell");
let notifcation_menu = document.querySelector(".menu");

notifcation_bell.onclick = function (e) {
  notifcation_menu.classList.toggle("show");
  e.stopPropagation();
};
notifcation_menu.onclick = function (e) {
  e.stopPropagation();
};
document.body.onclick = function () {
  notifcation_menu.classList.remove("show");
};

document.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    notifcation_menu.classList.remove("show");
  }
});

// Navbar Toggler
let navToggleButtom = document.querySelector(".toggler");
let tabsElement = document.querySelector(".tabs_wrapper");
let tabsNav = document.querySelector(".tabs_nav");

navToggleButtom.onclick = function () {
  this.classList.toggle("clicked");
  this.classList.toggle("close");
  tabsElement.classList.toggle("opened");
};

tabsElement.onclick = function () {
  this.classList.remove("opened");
  navToggleButtom.classList.remove("clicked");
  navToggleButtom.classList.remove("close");
};

tabsNav.onclick = function (e) {
  e.stopPropagation();
};
