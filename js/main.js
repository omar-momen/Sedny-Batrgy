/********** Start loading **********/
$(window).on("load", function () {
  $(".loading-overlay").fadeOut();
  /********* Start main_nav Services Hover *********/
  const active_tab = document.querySelector(
    "nav.nav .main_nav ul.links .services .services_hover .tab_body .tab.active"
  );
  services_hover.style.height = active_tab.clientHeight + 150 + "px";
  /********* End main_nav Services Hover *********/
});
/********** End loading **********/

/********** Start Switch Dom (right To left) (left To right) **********/
let language_button = document.querySelector(
  "nav.nav .upper_nav .switch_lang .glope"
);
let siwtch_lang = () => {
  if (document.documentElement.getAttribute("dir") == "ltr") {
    document.documentElement.setAttribute("dir", "rtl");
    language_button.nextElementSibling.textContent = "En";
  } else if (document.documentElement.getAttribute("dir") == "rtl") {
    document.documentElement.setAttribute("dir", "ltr");
    language_button.nextElementSibling.textContent = "Ar";
  }
};
language_button.addEventListener("click", siwtch_lang);
/********** End Switch Dom (right To left) (left To right) **********/

// Adjust main Header_height
const main_header = document.querySelector("header.header");
const nav = document.querySelector("nav.nav");
const nav_height_value = nav.clientHeight;
const window_height = window.innerHeight;
if (main_header) {
  main_header.style.height = window_height - nav_height_value + "px";
}
// Main Nav Search input
$("nav .main_nav form span").click(function () {
  $(this).next().slideToggle();
  $(this).next().focus();
});

// Toggle Class Active On Main Nav Links
// $("nav.nav .main_nav ul.links li").click(function () {
//   $(this).addClass("active").siblings().removeClass("active");
// });

/********** Start Nav Services Hover **********/
// Adjust main Nav_height
const main_nav = document.querySelector("nav.nav .main_nav");
const main_nav_height = main_nav.offsetHeight;
const services_hover = document.querySelector(
  "nav.nav .main_nav ul.links .services .services_hover"
);
services_hover.style.top = main_nav_height + "px";
// parent
$("nav.nav .main_nav ul.links .services").hover(
  function () {
    $("nav.nav .main_nav ul.links .services .services_hover").addClass(
      "active"
    );
  },
  function () {
    $("nav.nav .main_nav ul.links .services .services_hover").removeClass(
      "active"
    );
  }
);
// childs
$("nav.nav .main_nav ul.links .services .services_hover").click(function (e) {
  e.preventDefault();
});

if (window.innerWidth >= 992) {
  $("nav.nav .main_nav ul.links .services .services_hover ul.tabs li").hover(
    function () {
      $(this).addClass("active").siblings().removeClass("active");
      services_hover.style.height =
        $($(this).data("active")).height() + 150 + "px";
      $($(this).data("active"))
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  );
} else {
  $("nav.nav .main_nav ul.links .services .services_hover ul.tabs li").click(
    function () {
      $(this).addClass("active").siblings().removeClass("active");
      services_hover.style.height =
        $($(this).data("active")).height() + 150 + "px";
      $($(this).data("active"))
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  );
}
/********** End Nav Services Hover **********/
