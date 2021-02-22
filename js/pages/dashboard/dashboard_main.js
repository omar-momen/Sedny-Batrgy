window.onload = function () {
  document.documentElement.style.overflow = "unset";
  document.body.classList.add("fix_body");

  // Show notifcations notify
  let notifiy = document.createElement("div");
  let notifiyText = document.createElement("div");
  let notifiyHead = document.createElement("h3");
  let notifiyHeadText = document.createTextNode("لديك اشعارات جديدة");
  let notifiyIcon = document.createElement("i");
  let notifcationAudio = document.createElement("audio");
  let notifcationsNumber = document.querySelector("#notifcation_bell span");

  notifiy.className = "notify";
  notifiyText.className = "notify_body";

  notifiyIcon.className = "far fa-bell";

  notifiyHead.appendChild(notifiyIcon);
  notifiyHead.appendChild(notifiyHeadText);
  notifiyText.appendChild(notifiyHead);
  notifiy.appendChild(notifiyText);

  notifcationAudio.src = "../../audio/notification.mp3";
  notifcationAudio.setAttribute("preload", "");
  notifiy.appendChild(notifcationAudio);

  if (notifcationsNumber.textContent > 0) {
    document.body.appendChild(notifiy);
    notifiy.classList.add("show");
    notifcationAudio.play();
    setTimeout(() => {
      notifiy.classList.remove("show");
    }, 5000);
  }
};

// Notification Menu & Profile Menu
let notifcation_bell = document.getElementById("notifcation_bell");
let notifcation_menu = document.querySelector(".menu");
let profileImage = document.querySelector("#userProfile");
let profileMenu = document.querySelector(".profile_menu");

notifcation_bell.onclick = function (e) {
  notifcation_menu.classList.toggle("show");
  profileMenu.classList.remove("show");
  e.stopPropagation();
};
notifcation_menu.onclick = function (e) {
  e.stopPropagation();
};
document.body.touchstart = function () {
  notifcation_menu.classList.remove("show");
};

document.body.onclick = function () {
  notifcation_menu.classList.remove("show");
};

document.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    notifcation_menu.classList.remove("show");
  }
});

// Profile Menu
profileImage.onclick = function (e) {
  profileMenu.classList.toggle("show");
  notifcation_menu.classList.remove("show");
  e.stopPropagation();
};
document.body.addEventListener("click", function () {
  profileMenu.classList.remove("show");
});
profileMenu.onclick = function (e) {
  e.stopPropagation();
};

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
